import React from 'react'
import { Link } from 'react-router-dom'

function UserInfo(props) {
  console.log(props.user.name)
  return (
    <div className = 'userInfo'>
      <h5>
      Logged in as
      </h5>
      <img className='profilePic' src={props.user.photo} alt='User Profile Picture'/><br />
      <Link to='/'>{props.user.name}</Link><br />
      <button>LOGOUT</button><hr />
    </div>
  )
}

export default UserInfo