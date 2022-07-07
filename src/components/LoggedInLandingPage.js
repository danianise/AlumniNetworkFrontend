import React from 'react'

function LoggedInLandingPage(props) {
  return (
    <div className='loggedInLandingPage'>
      <h1>[welcome, {props.name}]</h1>
      <div className='profileInfo'>
        <img className='profilePic profilePicLarge' src='/DHoey.jpg' alt='User Profile Picture'/><br />
        <a href=''>Edit Profile</a>
      </div>
      <div className='networkInfo'>
        <h3>My Networks</h3>
        {props.networks.map(each => {
          return (
            <img src = {each.logo} alt = "{each.name} Logo"/>
          )
        })}
      </div>
    </div>
  )
}

export default LoggedInLandingPage