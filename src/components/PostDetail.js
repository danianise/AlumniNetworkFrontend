import React, { useState, useEffect, useContext } from 'react'
import CommentForm from './CommentForm'
import { useParams, useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

import { Avatar } from '@mui/material'
import "../css/PostList.css"

function PostDetail({topic, currentUser, userData, loggedIn, accessToken, getPosts, getComments}) {
  
  const params = useParams()
  // console.log(params)
  let postId = parseInt(params.postId)
  const navigate = useNavigate()
  let {profileData} = useContext(AuthContext)


  let topicForRoute = (topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '')

  let editURL = `${postId}/edit`

  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [users, setUsers] = useState([])

  let commentsThisPost = []

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL
    // const url = 'https://radiant-tundra-28877.herokuapp.com/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    const authOpts= {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url + 'users/', opts)
    .then(
      fetch(url + 'posts/', authOpts)
      .then(
        fetch(url + 'comments/', authOpts)
        .then(res=>res.json())
        .then(data=>setCommentData(data))
      )
      .then(res => res.json())
      .then(data => setPostData(data))
    )
    .then(res => res.json())
    .then(data => setUsers(data))

  }, [])

  const handleClickDeletePost = () => {
    fetch(
      process.env.REACT_APP_API_URL + `posts/${postId}`,
      // `https://radiant-tundra-28877.herokuapp.com/posts/${postId}/`,
      {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    .then(() => {navigate(-1)})
  }

  

  return (
  <div className='postDetailContainer'>
    <div className="postDetail">
      {postData.map((eachPost) => {

        let dateTime = eachPost.timestamp
        let date = dateTime.slice(0, 10)
        let year = date.slice(0, 4)
        let month = date.slice(5, 7)
        let months = [
        "None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
        let day = date.slice(8, 10)
        let time = dateTime.slice(11, 16)
        let hour = time.slice(0, 2)
        let minutes = time.slice(3, 5)
        let amPM = "AM"
        if(month.slice(0,1) == 0){
        month = month.slice(1,2)
        }
        if (hour > 12){
        hour = hour-12
        amPM = "PM"
        } else if (hour < 1){
          hour = 12
          amPM = "AM"
        }

        
        if(parseInt(params.postId) === eachPost.id) {

          let authorOfPost=""
          {users?.map((eachUser)=>{
            if (eachUser.id === eachPost.author)
            authorOfPost=eachUser
          })}
          console.log('authorOfPost', authorOfPost)

          let profileOfAuthor={}
          {profileData?.map((eachProfile) =>{
            if (eachProfile.user === authorOfPost.id){
              profileOfAuthor = eachProfile
            }
          })}
          console.log('profileOfAuthor', profileOfAuthor)

          return(<>
            <div className="postContainer">
              <h6 className = "userHeader">
                <Avatar src={profileOfAuthor.photo} className='postAvatar'/> {authorOfPost.first_name} {authorOfPost.last_name}
              </h6>
              {eachPost.imageURL ? <img src={eachPost.imageURL} style={{width:'500px'}} alt="Image input by poster"/> : ""}
              <p>{eachPost.body}</p>
              <h6>{months[month]} {day}, {year} {hour}:{minutes}{amPM}</h6>

              {authorOfPost.id === currentUser.id
                ? <>
                    <a href={editURL}>
                      <button>Edit Post</button>
                    </a>
                    <button className='deleteButton' onClick={handleClickDeletePost}>Delete Post</button>
                  </>
                : ""
              }
            </div>

              {commentData.map((eachComment) => {

                let authorOfComment=""
                {users?.map((eachUser)=>{
                  if (eachUser.id === eachComment.author)
                  authorOfComment=eachUser
                })}
                console.log('authorOfComment', authorOfComment)

                let profileOfCommentAuthor={}
                {profileData?.map((eachProfile) =>{
                  if (eachProfile.user === authorOfComment.id){
                    profileOfCommentAuthor = eachProfile
                  }
              })}
              console.log('profileOfCommentAuthor', profileOfCommentAuthor)

                let commentDateTime = eachComment.timestamp
                let commentDate = commentDateTime.slice(0, 10)
                let commentYear = commentDate.slice(0, 4)
                let commentMonth = commentDate.slice(5, 7)
                let commentMonths = [
                "None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ]
                let commentDay = commentDate.slice(8, 10)
                let commentTime = commentDateTime.slice(11, 16)
                let commentHour = commentTime.slice(0, 2)
                let commentMinutes = commentTime.slice(3, 5)
                let commentAMPM = "AM"
                if(commentMonth.slice(0,1) == 0){
                commentMonth = commentMonth.slice(1,2)
                }
                if (commentHour > 12){
                commentHour = commentHour-12
                commentAMPM = "PM"
                } else if (commentHour < 1){
                  commentHour = 12
                  amPM = "AM"
                }

                if(eachPost.id === eachComment.post){
                  return(<>
                    <Link to={`/conversations/${topicForRoute}/${params.postId}/comments/${eachComment.id}`}>
                      <div className='commentContainer'>
                        <h6 className='userHeader'>
                          <Avatar src={profileOfCommentAuthor.photo} className='postAvatar'/> {authorOfComment.first_name} {authorOfComment.last_name}
                        </h6>
                        <p>{eachComment.body}</p>
                        <h6>{commentMonths[commentMonth]} {commentDay}, {commentYear} {commentHour}:{commentMinutes} {commentAMPM}</h6>
                      </div>
                    </Link>
                  </>)
                }
              })}
          </>)
        }
      })}
    </div>
    <div>
      <hr />
      <h5>...add a comment</h5>
      <CommentForm
        post={params.postId}
        currentUser={currentUser}
        accessToken={accessToken}
        getPosts={getPosts}
        getComments={getComments}
      />
    </div>
  </div>)
}

export default PostDetail