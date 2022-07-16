import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import NetworkForm from './components/NetworkForm';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';

import LandingPage from './components/LandingPage';
import ProfileIndex from './components/ProfileIndex';

import ConversationIndex from './components/ConversationIndex'
import NetworkIndex from './components/NetworkIndex';
import EventIndex from './components/EventIndex';

import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

import CommentList from './components/CommentList';
import CommentDetail from './components/CommentDetail';
import CommentForm from './components/CommentForm';


function App() {

  const networkArray = [
    {
      name: 'General Assembly',
      location: 'Boston, MA',
      logo: 'https://i.imgur.com/mTuKYLr.png'
    },
    {
      name: "Miss Hall's School",
      location: 'Pittsfield, MA',
      logo: 'https://i.imgur.com/VQR5BL1.png'
    }
  ]

  const user = {
    name: 'Danielle Hoey',
    email: 'danianisehoey@gmail.com',
    password: 'PASSWORD',
    photo: 'https://i.imgur.com/hqp432f.jpg',
    location: 'Lunenburg, MA',
    linkedin: 'https://www.linkedin.com/in/danielleahoey/',
    github: 'https://github.com/danianise',
    facebook: 'https://www.facebook.com/danianise',
    twitter: null,
    instagram: 'https://www.instagram.com/danianise/',
    networks: networkArray
  }

  const [loggedIn, setLoggedIn] = useState(false)
  const [djangoData, setDjangoData] = useState({user})
  const [accessToken, setAccessToken] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3OTk1Njg3LCJpYXQiOjE2NTc5OTUzODcsImp0aSI6IjkyMTc5YWMxZjhhMDRiZGNiN2ExZjhmYTE4NzQ3NDNmIiwidXNlcl9pZCI6MX0.Q0RXSBgV5eO_tg_gy2u-jaVw5ajAgwUBLi567l_ktcs")

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'users/')
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])


  console.log(djangoData)

  return (
    <div className = "app">
      <Header />
      <div className = 'mainContent'>
        <Sidebar user={user} />
        <div className = 'routes'>
          <Routes>
            {!loggedIn ? <Route path="/" element={<LandingPage />} /> : <Route path="/" element={<ProfileIndex userData={user} />} />}
            <Route path='/networks' element={<NetworkIndex headline = "My Networks"/>} />
            <Route path='/conversations' element={<ConversationIndex />} />
            <Route path='/events' element={<EventIndex accessToken={accessToken}/>} />

            <Route path='/conversations/life' element = {
              <PostList 
                topic={'Life'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/life/:postId' element = {
              <PostDetail
                topic={'Life'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path ='/conversations/life/:postId/comments' element = {
              <CommentList
                topic={'Life'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/life/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Life'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/partytime' element = {
              <PostList
                topic={'Party Time'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/partytime/:postId' element = {
              <PostDetail
                topic={'Party Time'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path ='/conversations/partytime/:postId/comments' element = {
              <CommentList
                topic={'Party Time'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/partytime/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Party Time'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/industry' element = {
              <PostList
                topic={'Industry'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/industry/:postId' element = {
              <PostDetail
                topic={'Industry'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path ='/conversations/industry/:postId/comments' element = {
              <CommentList
                topic={'Industry'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/industry/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Industry'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/cryingroom' element = {
              <PostList
                topic={'Crying Room'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/cryingroom/:postId' element = {
              <PostDetail
                topic={'Crying Room'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path ='/conversations/cryingroom/:postId/comments' element = {
              <CommentList
                topic={'Crying Room'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            <Route path='/conversations/cryingroom/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Crying Room'}
                userData={djangoData}
                loggedIn={loggedIn}
                accessToken={accessToken}
              />
            }/>
            
            <Route path='/addnetwork' element={<NetworkForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addpost' element={<PostForm />} />
            <Route path='/addcomment' element = {<CommentForm accessToken={accessToken}/>} />
      
          </Routes>  
        </div>
      </div>
    </div>
  );
}

export default App;
