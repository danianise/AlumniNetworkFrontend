import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PostPreview(props) {

  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  // const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'posts/')
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'comments/')
    .then(res => res.json())
    .then(data => setCommentData(data))
  }, [])

  console.log(props)

  let topicForRoute = (props.topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '')

  return (<>

    <div className='postPreview'>
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
        }

        function limit (string, limit) {
            return string.substring(0, limit)
        }

        if(props.topic === eachPost.topic){

          // console.log(eachPost)

          return(<>
          <Link to={`/conversations/${topicForRoute}/${eachPost.id}`}>
            <div className='postContainer'>
              <h6>
                {props.userData[0].name}
              </h6>
              <p>{eachPost.body.substring(0, 50)}{eachPost.body.length > 50 ? "..." : ""}</p>
              <h6>{months[month]} {day}, {year} {hour}:{minutes}{amPM}</h6>

              {commentData.map((eachComment) => {
                if(eachPost.id === eachComment.post){
                  return(
                    <div className='commentContainer'>
                      <p>{commentData.length} Comment{commentData.length > 1 ? "s" : ""}</p>
                      </div>
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