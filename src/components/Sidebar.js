import React from 'react'
import UserInfo from './UserInfo'

function Sidebar() {
  return (
    <div className='sidebar'>
      <UserInfo />
      <a href=''>[My Profile]</a> <br />
      <a href=''>[My Networks]</a> <br />
      <a href=''>[Events]</a> <br />
      <a href=''>[Conversations]</a> <br />
      <a className='tab' href=''>Life</a><br />
      <a className='tab' href=''>Party Time</a><br />
      <a className='tab' href=''>Industry</a><br />
      <a className='tab' href=''>Crying Room</a><br />
    </div>
  )
}

export default Sidebar