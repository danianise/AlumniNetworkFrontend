import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom" 

import {AuthProvider} from './context/AuthContext'

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import NetworkForm from './components/NetworkForm';
import RegisterForm from './components/RegisterForm';
import Login from './components/Login';
import LogOut from './components/LogOut';
import ProfileForm from './components/ProfileForm';

import LandingPage from './components/LandingPage';
import RegisterSuccess from './components/RegisterSuccess';
import ProfileIndex from './components/ProfileIndex';

import NetworkIndex from './components/NetworkIndex';
import EventIndex from './components/EventIndex';

import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

import CommentDetail from './components/CommentDetail';
import EditComment from './components/EditComment';
import EventForm from './components/EventForm';
import EditPost from './components/EditPost';
import EditProfile from './components/EditProfile';


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

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('user'))
  const [users, setUsers] = useState(null)
  const [currentUser, setCurrentUser] = useState({})

  const userId = localStorage.getItem('userId')

  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh_token'))

  const [networkData, setNetworkData] = useState([networkArray])
  const [profileData, setProfileData] = useState({})
  const [postData, setPostData] = useState([])
  const [commentData, setCommentData] = useState([])
  const [eventData, setEventData] = useState([])

  useEffect(() => {

    fetch(
      process.env.REACT_APP_API_URL + 'profile/',
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

    // fetch(
    //   process.env.REACT_APP_API_URL + 'users/', 
    //   {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    //   }
    // )
    // .then(res => res.json())
    // .then(data => {
    //     setUsers(data)
    //     console.log(users)
    // })

    fetch(
      process.env.REACT_APP_API_URL + `users/${userId}`, 
      {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
      }
    )
    .then(res => res.json())
    .then(data => setCurrentUser(data))

    
    fetch(
      process.env.REACT_APP_API_URL + 'networks/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    .then(res => res.json())
    .then(data => setNetworkData(data))

  }, [])

  // function getNetworks() {
  //   const url = process.env.REACT_APP_API_URL + 'networks/'
  //   const opts = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'Authorization': `Bearer ${accessToken}`
  //     }
  //   }
  //   fetch(url, opts)
  //   .then(res => res.json())
  //   .then(data => setNetworkData(data))
  // }

  // function getUsers() {
  //   const url = process.env.REACT_APP_API_URL + 'users/'
  //   const opts = {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${accessToken}`
  //     }
  //   }
  //   fetch(url, opts)
  //   .then(res => res.json())
  //   .then(data => setUsers(data))
  // }

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

  console.log(profileData)

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
    <AuthProvider>
      <Header loggedIn={loggedIn}/>
      <div className = 'mainContent'>
        <Sidebar
          currentUser={currentUser}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setAccessToken={setAccessToken}
        />
        <div className = 'routes'>
          <Routes>
            {!loggedIn 
              ? <Route path="/" element={<LandingPage />} />
              : <Route path="/" element={
                <ProfileIndex
                  networkData={networkData}
                  currentUser={currentUser}
                  accessToken={accessToken}
                />
              }/>
            }

            <Route 
              path='/register/success'
              element= {
                <RegisterSuccess />
              }
            />
            
            <Route path="/logout" element = {
              <LogOut
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setAccessToken={setAccessToken}
                setRefreshToken={setRefreshToken}
              />
            }/>
            
            

            <Route
              path='/networks'
              element={
                <NetworkIndex
                  networkData={networkData}
                  headline = "My Networks"
                />
              } 
            />
        
            <Route
              path='/events'
              element={
                <EventIndex
                  accessToken={accessToken}
                />
              }
            />

            <Route path='/conversations/life' element = {
              <PostList 
                topic={'Life'}
                profileData={profileData}
                currentUser={currentUser}
                accessToken={accessToken}
                refreshToken={refreshToken}
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
                currentUser={currentUser}
                profileData={profileData}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/life/:postId/edit' element = {
              <EditPost
                topic={'Life'}
                accessToken={accessToken} 
              /> 
            }/>
          
            <Route path='/conversations/life/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Life'}
                currentUser={currentUser}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                profileData={profileData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>
            <Route path='/conversations/life/:postId/comments/:commentId/edit' element = {
              <EditComment 
              topic={'Life'}
              accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/partytime' element = {
              <PostList
                topic={'Party Time'}
                profileData={profileData}
                currentUser={currentUser}
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
                currentUser={currentUser}
                profileData={profileData}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/partytime/:postId/edit' element = {
              <EditPost
                topic={'Party Time'}
                accessToken={accessToken} 
              /> 
            }/>
            
            <Route path='/conversations/partytime/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Party Time'}
                currentUser={currentUser}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                profileData={profileData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/partytime/:postId/comments/:commentId/edit' element = {
              <EditComment 
              topic={'Party Time'}
              accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/industry' element = {
              <PostList
                topic={'Industry'}
                currentUser={currentUser}
                profileData={profileData}
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
                currentUser={currentUser}
                profileData={profileData}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/industry/:postId/edit' element = {
              <EditPost
                topic={'Industry'}
                accessToken={accessToken} 
              /> 
            }/>
            
            <Route path='/conversations/industry/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Industry'}
                currentUser={currentUser}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                profileData={profileData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/industry/:postId/comments/:commentId/edit' element = {
              <EditComment 
              topic={'Industry'}
              accessToken={accessToken}
              />
            }/>

            <Route path='/conversations/cryingroom' element = {
              <PostList
                topic={'Crying Room'}
                currentUser={currentUser}
                profileData={profileData}
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
                currentUser={currentUser}
                profileData={profileData}
                // getUsers={getUsers}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                getPosts={getPosts}
                getComments={getComments}
              />
            }/>
            <Route path='/conversations/cryingroom/:postId/edit' element = {
              <EditPost
                topic={'Crying Room'}
                accessToken={accessToken} 
              /> 
            }/>
            
            <Route path='/conversations/cryingroom/:postId/comments/:commentId' element={
              <CommentDetail
                topic={'Crying Room'}
                currentUser={currentUser}
                userData={user}
                loggedIn={loggedIn}
                accessToken={accessToken}
                postData={postData}
                commentData={commentData}
                profileData={profileData}
                // getPosts={getPosts}
                // getComments={getComments}
              />
            }/>

            <Route path='/conversations/cryingroom/:postId/comments/:commentId/edit' element = {
              <EditComment 
              topic={'Crying Room'}
              accessToken={accessToken}
              />
            }/>
            
            <Route path='/addnetwork' element={<NetworkForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>} />
            <Route path='/profile' element={<ProfileForm accessToken={accessToken}/>}/>
            <Route path='/profile/:profileId/edit' element={<EditProfile accessToken={accessToken}/>}/>
            <Route path='/addevent' element = {
              <EventForm
                accessToken={accessToken} 
                getEvents={getEvents}
              />
            }/>
      
          </Routes>  
        </div>
      </div>
    </AuthProvider>
    </div>
  );
}

export default App;
