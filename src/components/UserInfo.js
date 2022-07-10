import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function UserInfo(props) {
  
  // console.log(props)
  const [djangoData, setDjangoData] = useState([])
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'users/')
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])

  console.log(djangoData[0])

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