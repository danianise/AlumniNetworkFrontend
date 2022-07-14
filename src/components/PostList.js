import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'

import '../css/PostList.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ComputerIcon from '@mui/icons-material/Computer';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function PostList(props) {
  
  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'posts/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  }, [])

  // console.log(djangoData)

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
      {djangoData.map((each) => {
        if(props.topic === each.topic){
          console.log(each)
          return(
          <>
            <h6>
              {props.userData[each.author-1].name}
            </h6>
            <p>{each.body}</p>
            <h6>{each.timestamp}</h6>
            
          </>
          )
        }
      })}
      <hr />
      <h5>...add to the conversation</h5>
      <PostForm topic={props.topic}/>
    </div>
  )
}

export default PostList