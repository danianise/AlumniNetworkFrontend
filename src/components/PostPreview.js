import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {autocompleteClasses, Avatar} from '@mui/material'

function PostPreview({ topic, accessToken, profileData }) {

  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [users, setUsers] = useState([])
  // const [profileData, setProfileData] = useState({})
  // const [currentUser, setCurrentUser] = useState([])

  let commentsThisPost = []

  useEffect(() => {
    // const url = process.env.REACT_APP_API_URL
    const url = 'https://radiant-tundra-28877.herokuapp.com/'
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

    // fetch(
    //   process.env.REACT_APP_API_URL + 'profile/', 
    //   {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${accessToken}`
    //     }
    //   }
    // )
    // .then(res => res.json())
    // .then(data => {
    //     setProfileData(data)
    // })
  }, [])

  // console.log(postData)
  // console.log(users)
  // console.log(commentData)

  let topicForRoute = (topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '')
  
  // console.log([...postData].reverse())

  // console.log('userData', userData)
  // console.log('postData', postData)
  // console.log('commentData', commentData)
  // console.log('currentUser', currentUser)

  return (<>

    <div className='postPreview'>
      {[...postData].reverse().map((eachPost) => {

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
        }

        function limit (string, limit) {
            return string.substring(0, limit)
        }

        if(topic === eachPost.topic){

          // console.log(eachPost)

          return(<>
          <Link to={`/conversations/${topicForRoute}/${eachPost.id}`}>
            <div className='postContainer'>
              <h6 className = "userHeader">
                <Avatar src={profileOfAuthor.photo} className='postAvatar'/>
                {authorOfPost.first_name} {authorOfPost.last_name}
              </h6>
              {eachPost.imageURL ? <img src={eachPost.imageURL} style={{width:'500px'}} alt="Image input by poster"/> : ""}
              <p className="postBody">{eachPost.body.substring(0, 50)}{eachPost.body.length > 50 ? "..." : ""}</p>
              <h6>{months[month]} {day}, {year} {hour}:{minutes}{amPM}</h6>
              
              {commentData.map((eachComment) => {
                
                if(eachPost.id === eachComment.post){
                  // console.log(eachComment)
                  commentsThisPost.push(eachComment)
                  
                  return(
                    <><p>{commentsThisPost.length} Comment{commentsThisPost.length > 1 ? "s" : ""}</p></>
                  )
                }
              })}
            </div>
          </Link>
          </>)
        }
      })}
    </div>
  </>)
}

export default PostPreview