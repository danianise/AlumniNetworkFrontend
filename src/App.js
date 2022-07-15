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

  const [loggedIn, setLoggedIn] = useState(true)
  const [djangoData, setDjangoData] = useState({user})

  useEffect(() => {
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjE3MjI3LCJpYXQiOjE2NTcyMTY5MjcsImp0aSI6IjQyNTZiMWRlZDk4YzQwYjM5MzMwOTE4NDIwNWY5NTU3IiwidXNlcl9pZCI6MX0.A2y2x4t9TwwTKX_L4GRhqN_llrcOHmWWoKZOyurcLOQ"
    // const url = process.env.REACT_APP_API_URL + 'users/'
    // const opts = {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${accessToken}`
    //   }
    // }
    // fetch(url, opts)
    // .then(res => res.json())
    // .then(data => setDjangoData(data))

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
            <Route path='/events' element={<EventIndex />} />

            <Route path='/conversations/life' element = {<PostList topic={'Life'} userData={djangoData} />} />
            <Route path='/conversations/life/:postId' element = {<PostDetail topic={'Life'} userData={djangoData} />} />
            <Route path ='/conversations/life/:postId/comments' element = {<CommentList topic={'Life'} userData={djangoData} />} />
            <Route path='/conversations/life/:postId/comments/:commentId' element={<CommentDetail topic={'Life'} userData={djangoData} />} />

            <Route path='/conversations/partytime' element = {<PostList topic={'Party Time'} title={'partytime'} userData={djangoData} />} />
            <Route path='/conversations/partytime/:postId' element = {<PostDetail topic={'Party Time'} userData={djangoData} />} />
            <Route path ='/conversations/partytime/:postId/comments' element = {<CommentList topic={'Party Time'} userData={djangoData} />} />
            <Route path='/conversations/partytime/:postId/comments/:commentId' element={<CommentDetail topic={'Party Time'} userData={djangoData} />} />

            <Route path='/conversations/industry' element = {<PostList topic={'Industry'} userData={djangoData} />} />
            <Route path='/conversations/industry/:postId' element = {<PostDetail topic={'Industry'} userData={djangoData} />} />
            <Route path ='/conversations/industry/:postId/comments' element = {<CommentList topic={'Industry'} userData={djangoData} />} />
            <Route path='/conversations/industry/:postId/comments/:commentId' element={<CommentDetail topic={'Industry'} userData={djangoData} />} />

            <Route path='/conversations/cryingroom' element = {<PostList topic={'Crying Room'} userData={djangoData} />} />
            <Route path='/conversations/cryingroom/:postId' element = {<PostDetail topic={'Crying Room'} userData={djangoData} />} />
            <Route path ='/conversations/cryingroom/:postId/comments' element = {<CommentList topic={'Crying Room'} userData={djangoData} />} />
            <Route path='/conversations/cryingroom/:postId/comments/:commentId' element={<CommentDetail topic={'Crying Room'} userData={djangoData} />} />
            
            <Route path='/addnetwork' element={<NetworkForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addpost' element={<PostForm />} />
            <Route path='/addcomment' element = {<CommentForm />} />
      
          </Routes>  
        </div>
      </div>
    </div>
  );
}

export default App;
