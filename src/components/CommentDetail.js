import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Avatar } from '@mui/material'

function CommentDetail({topic, currentUser, accessToken}) {

  const params=useParams()
  console.log('params', params)
  console.log('currentUser', currentUser)

  const navigate=useNavigate()

  let topicForRoute = (topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '')

  const [commentData, setCommentData] = useState([])
  const [userData, setUserData] = useState([])
  const [profileData, setProfileData] = useState([])

  useEffect(() => {
   
    fetch(
      process.env.REACT_APP_API_URL + 'comments/',
      // 'https://radiant-tundra-28877.herokuapp.com/comments/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    .then(res => res.json())
    .then(data => setCommentData(data))

    fetch(
      process.env.REACT_APP_API_URL + 'users/',
      // 'https://radiant-tundra-28877.herokuapp.com/users/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then(res => res.json())
    .then(data => setUserData(data))

    fetch(
      process.env.REACT_APP_API_URL + 'profile/',
      // 'https://radiant-tundra-28877.herokuapp.com/profile/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }
    )
    .then(res => res.json())
    .then(data => setProfileData(data))
  }, [])

  const handleClickDeleteComment = () => {
    fetch(
      process.env.REACT_APP_API_URL + `comments/${params.commentId}`,
      // `https://radiant-tundra-28877.herokuapp.com/comments/${params.commentId}/`,
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
    <div className='commentDetail'>
      {commentData.map((eachComment) => {

        let dateTime = eachComment.timestamp
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

        if(parseInt(params.commentId) === eachComment.id) {

          let authorOfComment=""
          {userData?.map((eachUser)=>{
            if (eachUser.id === eachComment.author)
            authorOfComment=eachUser
          })}
          console.log('authorOfComment', authorOfComment)

          let profileOfAuthor={}
          {profileData?.map((eachProfile) =>{
            if (eachProfile.user === authorOfComment.id){
              profileOfAuthor = eachProfile
            }
          })}
          console.log('profileOfAuthor', profileOfAuthor)

          return(<>
            <div className="postContainer">
              <h6 className = "userHeader">
                <Avatar src={profileOfAuthor.photo} className='postAvatar'/> {authorOfComment.first_name} {authorOfComment.last_name}
              </h6>
              <p>{eachComment.body}</p>
              <h6>{months[month]} {day}, {year} {hour}:{minutes}{amPM}</h6>

              {authorOfComment.id === currentUser.id
                ? <>
                    <button onClick={''}>Edit Comment</button>
                    <button className='deleteButton' onClick={handleClickDeleteComment}>Delete Comment</button>
                  </>
                : ""
              }
            </div>
          </>)
        }
      })}
    </div>
  )
}

export default CommentDetail