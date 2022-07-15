import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'
import PostPreview from './PostPreview';

import '../css/PostList.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ComputerIcon from '@mui/icons-material/Computer';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function PostList(props) {
  
  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'posts/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setPostData(data))
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'comments/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCommentData(data))
  }, [])

  console.log(postData)
  console.log(commentData)

  let emojis = [
    {topic: 'Life', icon: <TelegramIcon fontSize="large" />},
    {topic: 'Party Time', icon: <CelebrationIcon fontSize="large" />},
    {topic: 'Industry', icon: <ComputerIcon fontSize="large" />},
    {topic: 'Crying Room', icon: <SentimentVeryDissatisfiedIcon fontSize="large" />}
  ]

  // console.log(props.userData)

  return (
    <div>
      {emojis.map((each) => {
        if (props.topic === each.topic){
          return(
            <h1>{each.icon} [{props.topic}]</h1>
          )
        }
      })}

      <PostPreview topic={props.topic} userData={props.userData}/>

      <hr />
      <h5>...add to the conversation</h5>
      <PostForm topic={props.topic}/>
    </div>
  )
}

export default PostList