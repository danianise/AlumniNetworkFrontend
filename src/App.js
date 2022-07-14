import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import ProfileIndex from './components/ProfileIndex';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ConversationIndex from './components/ConversationIndex'
import NetworkIndex from './components/NetworkIndex';
import EventIndex from './components/EventIndex';

function App() {
  
  // fetch('https://radiant-tundra-28877.herokuapp.com')
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  const [loggedIn, setLoggedIn] = useState(true)
  const [djangoData, setDjangoData] = useState(null)

  useEffect(() => {
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3MjE3MjI3LCJpYXQiOjE2NTcyMTY5MjcsImp0aSI6IjQyNTZiMWRlZDk4YzQwYjM5MzMwOTE4NDIwNWY5NTU3IiwidXNlcl9pZCI6MX0.A2y2x4t9TwwTKX_L4GRhqN_llrcOHmWWoKZOyurcLOQ"
    const url = process.env.REACT_APP_API_URL + 'users/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])

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

  // console.log(djangoData)

  return (
    <div className = "app">
      <Header />
      <div className = 'mainContent'>
        <Sidebar user={user} />
        <div className = 'routes'>
          <Routes>
            {!loggedIn ? <Route path="/" element={<LandingPage />} /> : <Route path="/" element={<ProfileIndex user={user} />} />}
            {/* <Route path='/posts' element={<PostList />} /> */}
            <Route path='/newpost' element={<PostForm />} />
            <Route path='/conversations' element={<ConversationIndex />} />
            <Route path='/conversations/life' element = {<PostList topic={'Life'} userData={djangoData} />} />
            <Route path='/conversations/partytime' element = {<PostList topic={'Party Time'} userData={djangoData} />} />
            <Route path='/conversations/industry' element = {<PostList topic={'Industry'} userData={djangoData} />} />
            <Route path='/conversations/cryingroom' element = {<PostList topic={'Crying Room'} userData={djangoData} />} />
            <Route path='/networks' element={<NetworkIndex headline = "My Networks"/>} />
            <Route path='/events' element={<EventIndex />} />
          </Routes>  
        </div>
      </div>
    </div>
  );
}

export default App;
