import React from 'react'

function LoggedInLandingPage() {
  return (
    <div className='loggedInLandingPage'>
      <h1>[welcome, **userName**]</h1>
      <div className='profileInfo'>
        <img className='profilePic profilePicLarge' src='/DHoey.jpg' alt='User Profile Picture'/><br />
        <a href=''>Edit Profile</a>
      </div>
      <div className='networkInfo'>
        <h3>My Networks</h3>
        <img src='/GALogo.png' alt='General Assembly Logo'/><br />
        <img src='/MHSLogo.png' alt="Miss Hall's School Logo"/>
      </div>
    </div>
  )
}

export default LoggedInLandingPage