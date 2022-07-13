import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../css/UserInfo.css'
import { Avatar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

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
      {props.user.photo
      ? <><Avatar src={props.user.photo} /><br /></>
      : <><Avatar src={PersonIcon} /></>}
      <Link to='/'>
        <h6>
          {props.user.name}
        </h6>
      </Link><br />
      <button>LOGOUT</button>
    </div>
  )
}

export default UserInfo