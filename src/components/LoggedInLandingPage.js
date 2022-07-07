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
        {props.networks.map(function(each, index){
          return(
            <li key={index}>
              <img src={each.logo} alt = '{each.name} Logo' />
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default LoggedInLandingPage