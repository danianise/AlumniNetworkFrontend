import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import Login from './Login'
import { Link } from 'react-router-dom'

import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'

import { Avatar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventIcon from '@mui/icons-material/Event';
import CommentIcon from '@mui/icons-material/Comment';

function Sidebar(props) {

  const [djangoData, setDjangoData] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)
  const [currentNetwork, setCurrentNetwork] = useState("General Assembly")

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'users/')
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])

  console.log(djangoData[0])

  return (<>
  {!djangoData
    ? <h1>LOADING...</h1>
    : <div className='sidebar'>
      {loggedIn 
      ? 
      <>
        {/* <UserInfo user={props.user} /> */}

        <SidebarRow 
          title={props.user.name}
          src={props.user.photo}
        />

        <Link to='/'>
          <SidebarRow 
            title={"My Profile"}
            Icon={PersonIcon}
            src=""
          />
        </Link>

        <Link to='/networks'>
          <SidebarRow
            title={"My Networks"}
            Icon={PeopleAltIcon}
            src="" 
          />
        </Link>

        <Link to='/events'>
          <SidebarRow
            title={"Events"}
            Icon={EventIcon}
            src=""
          />
        </Link>

        <Link to='/conversations'>
          <SidebarRow
            title={"Conversations"}
            Icon={CommentIcon}
            src=""
          />
        </Link>

        {/* <Link to='/'>My Profile</Link> <br />
        <Link to=''>My Networks</Link> <br />
        <Link to=''>Events</Link> <br />
        <Link to='/conversations'>Conversations</Link> <br />
          {currentNetwork === 'General Assembly'
          ?
          <>
            <Link className='tab' to='/conversations/life'>Life</Link><br />
            <Link className='tab' to='/conversations/partytime'>Party Time</Link><br />
            <Link className='tab' to='/conversations/industry'>Industry</Link><br />
            <Link className='tab' to='/conversations/cryingroom'>Crying Room</Link><br />
          </>
          :
          <>
            <a className='tab' href=''>Life</a><br />
            <a className='tab' href=''>Just For Fun</a><br />
            <a className='tab' href=''>News</a><br />
          </>} */}
      </>
      : 
      <>
        <Login />
      </>
      }
    </div>
  }
  </>
  )
}

export default Sidebar