import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom" 
import { useNavigate } from 'react-router-dom'

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import NetworkForm from './components/NetworkForm';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import LogOut from './components/LogOut';

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
import EventForm from './components/EventForm';


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

  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('user'))
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))
  const [networkData, setNetworkData] = useState([])
  const [userData, setUserData] = useState({user})
  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    // getNetworks()
    // getUsers()
    // getPosts()
    // getComments()
    // getEvents()
  }, [])

  function getNetworks() {
    const url = process.env.REACT_APP_API_URL + 'networks/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setNetworkData(data))
  }

  function getUsers() {
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
    .then(data => setUserData(data))
  }

  function getPosts() {
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
  }

  function getComments() {
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
  }

  function getEvents() {
    const url = process.env.REACT_APP_API_URL + 'events/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setEventData(data))
  }

  return (
    <div className = "app">
      <Header loggedIn={loggedIn}/>
      <div className = 'mainContent'>
        <Sidebar
          // userData={userData}
          userData={user}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setAccessToken={setAccessToken}
          // accessToken={accessToken}
        />
        <div className = 'routes'>
          <Routes>
            {!loggedIn 
              ? <Route path="/" element={<LandingPage />} />
              : <Route path="/" element={
                <ProfileIndex
                  networkData={networkData}
                  userData={user}
                  // getNetworks={getNetworks}
                  // getUsers={getUsers} 
                />
              }/>
            }
            
            <Route path="/logout" element = {
              <LogOut
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setAccessToken={setAccessToken}
              />
            }/>
            

            <Route path='/networks' element={<NetworkIndex networkData={networkData} headline = "My Networks"/>} />
            {/* <Route path='/conversations' element={<ConversationIndex />} /> */}
            <Route path='/events' element={<EventIndex accessToken={accessToken} />} />

            <Route path='/conversations/life' element = {
              <PostList 
                topic={'Life'}
                loggedIn={loggedIn}
                accessToken={accessToken}
                userData={user}
                postData={postData}
                commentData={commentData}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/life/:postId' element = {
              <PostDetail
                topic={'Life'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path ='/conversations/life/:postId/comments' element = {
              <CommentList
                topic={'Life'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            <Route path='/conversations/life/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Life'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/partytime' element = {
              <PostList
                topic={'Party Time'}
                loggedIn={loggedIn}
                accessToken={accessToken}
                userData={user}
                postData={postData}
                commentData={commentData}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/partytime/:postId' element = {
              <PostDetail
                topic={'Party Time'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path ='/conversations/partytime/:postId/comments' element = {
              <CommentList
                topic={'Party Time'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            <Route path='/conversations/partytime/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Party Time'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/industry' element = {
              <PostList
                topic={'Industry'}
                loggedIn={loggedIn}
                accessToken={accessToken}
                userData={user}
                postData={postData}
                commentData={commentData}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/industry/:postId' element = {
              <PostDetail
                topic={'Industry'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path ='/conversations/industry/:postId/comments' element = {
              <CommentList
                topic={'Industry'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            <Route path='/conversations/industry/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Industry'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/cryingroom' element = {
              <PostList
                topic={'Crying Room'}
                loggedIn={loggedIn}
                accessToken={accessToken}
                userData={user}
                postData={postData}
                commentData={commentData}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/cryingroom/:postId' element = {
              <PostDetail
                topic={'Crying Room'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path ='/conversations/cryingroom/:postId/comments' element = {
              <CommentList
                topic={'Crying Room'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            <Route path='/conversations/cryingroom/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Crying Room'}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            
            <Route path='/addnetwork' element={<NetworkForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>} />
            {/* <Route path='/addpost' element={
              <PostForm
                accessToken={accessToken}
                getUsers={getUsers}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/> */}
            {/* <Route path='/addcomment' element = {
              <CommentForm 
                accessToken={accessToken}
                getUsers={getUsers}
                getPosts={getPosts}
                getComments={getComments}
                />
            }/> */}
            <Route path='/addevent' element = {
              <EventForm
                accessToken={accessToken} 
                getEvents={getEvents}
              />
            }/>
      
          </Routes>  
        </div>
      </div>
    </div>
  );
}

export default App;
