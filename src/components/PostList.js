import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'
import PostPreview from './PostPreview';


import '../css/PostList.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ComputerIcon from '@mui/icons-material/Computer';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function PostList({ topic, userData, loggedIn, accessToken, refreshToken, getPosts, getComments }) {

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
        if (topic === each.topic){
          return(
            <h1>{each.icon} [{topic}]</h1>
          )
        }
      })}

      <h5>...add to the conversation</h5>
      <PostForm
        topic={topic}
        accessToken={accessToken}
        // userData={userData}
        // postData={postData}
        getPosts={getPosts}
        getComments={getComments}
      /><hr />

      <div className='postPreview'>
        <PostPreview
          topic={topic}
          userData={userData}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
      </div>
      
    </div>
  )
}

export default PostList