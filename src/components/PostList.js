import React, {useEffect, useContext} from 'react'
import PostForm from './PostForm'
import PostPreview from './PostPreview';
import AuthContext from '../context/AuthContext'


import '../css/PostList.css'
import TelegramIcon from '@mui/icons-material/Telegram';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ComputerIcon from '@mui/icons-material/Computer';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function PostList({ topic, currentUser, userData, accessToken, refreshToken, getPosts, getComments }) {

  let {profileData} = useContext(AuthContext)

  let emojis = [
    {topic: 'Life', icon: <TelegramIcon fontSize="large" />},
    {topic: 'Party Time', icon: <CelebrationIcon fontSize="large" />},
    {topic: 'Industry', icon: <ComputerIcon fontSize="large" />},
    {topic: 'Crying Room', icon: <SentimentVeryDissatisfiedIcon fontSize="large" />}
  ]

  let reloadCount = sessionStorage.getItem('reloadCount')

  useEffect(() => {
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }, []);

  // console.log(props.userData)

  return (
    <div className = 'postList'>
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
        currentUser={currentUser}
        accessToken={accessToken}
        // userData={userData}
        // postData={postData}
        profileData={profileData}
        getPosts={getPosts}
        getComments={getComments}
      /><hr />

      <div className='postPreview'>
        <PostPreview
          topic={topic}
          currentUser={currentUser}
          userData={userData}
          profileData={profileData}
          accessToken={accessToken}
          refreshToken={refreshToken}
        />
      </div>
      
    </div>
  )
}

export default PostList