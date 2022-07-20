import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import { useParams } from 'react-router-dom'

import { Avatar } from '@mui/material'
import "../css/PostList.css"

function PostDetail({topic, userData, loggedIn, accessToken, getPosts, getComments}) {
  
let timestamp = "2022-07-20T00:18:28.497677Z"
let hour = timestamp.slice(11, 13)

if (hour < 1){
  hour = 12
}
console.log(hour)

  const params = useParams()

  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + 'posts/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL + 'comments/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setCommentData(data))
  }, [])

  // console.log(params)

  return (<>
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
          return(<>
            <div className="postContainer">
            <h6 className = "userHeader">
                <Avatar src="" className='postAvatar'/> {userData.name}
              </h6>
              <p>{eachPost.body}</p>
              <h6>{months[month]} {day}, {year} {hour}:{minutes}{amPM}</h6>
            </div>

              {commentData.map((eachComment) => {

                // console.log(eachComment)

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
                  return(
                    <div className='commentContainer'>
                      <h6>Author of comment here</h6>
                      <p>{eachComment.body}</p>
                      <h6>{commentMonths[commentMonth]} {commentDay}, {commentYear} {commentHour}:{commentMinutes} {commentAMPM}</h6>
                      </div>
                  )
                }
              })}
          </>)
        }
      })}
    </div>
    <div>
      <hr />
      <h5>...add a comment</h5>
      <CommentForm post={params.postId} accessToken={accessToken} getPosts={getPosts} getComments={getComments} />
    </div>
  </>)
}

export default PostDetail