import React, { useState } from 'react'
import UserInfo from './UserInfo'
import Login from './Login'
import { Link } from 'react-router-dom'

function Sidebar(props) {

  const [loggedIn, setLoggedIn] = useState(true)
  const [currentNetwork, setCurrentNetwork] = useState("General Assembly")
  console.log(props.user.name)

  return (
    <div className='sidebar'>
      {loggedIn 
      ? 
      <>
        <UserInfo user={props.user} />
        <Link to='/'>[My Profile]</Link> <br />
        <Link to=''>[My Networks]</Link> <br />
        <Link to=''>[Events]</Link> <br />
        <Link to='/conversations'>[Conversations]</Link> <br />
          {currentNetwork === 'General Assembly'
          ?
          <>
            <a className='tab' href=''>Life</a><br />
            <a className='tab' href=''>Party Time</a><br />
            <a className='tab' href=''>Industry</a><br />
            <a className='tab' href=''>Crying Room</a><br />
          </>
          :
          <>
            <a className='tab' href=''>Life</a><br />
            <a className='tab' href=''>Just For Fun</a><br />
            <a className='tab' href=''>News</a><br />
          </>}
      </>
      : 
      <>
        {/* <Login /> */}
      </>
      }
    </div>
  )
}

export default Sidebar