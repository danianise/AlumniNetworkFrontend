import React from 'react'

function UserInfo() {
  return (
    <div className = 'userInfo'>
      <h5>
      Logged in as
      </h5>
      <img className='profilePic' src='/DHoey.jpg' alt='User Profile Picture'/>
      <p>**userName**</p>
      <button>LOGOUT</button><hr />
    </div>
  )
}

export default UserInfo