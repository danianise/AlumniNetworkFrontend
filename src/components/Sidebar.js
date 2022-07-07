import React, { useState } from 'react'
import UserInfo from './UserInfo'

function Sidebar() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentNetwork, setCurrentNetwork] = useState("General Assembly")

  return (
    <div className='sidebar'>
      {loggedIn 
      ? 
      <>
        <UserInfo />
        <a href=''>[My Profile]</a> <br />
        <a href=''>[My Networks]</a> <br />
        <a href=''>[Events]</a> <br />
        <a href=''>[Conversations]</a> <br />
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
  
      </>
      }
    </div>
  )
}

export default Sidebar