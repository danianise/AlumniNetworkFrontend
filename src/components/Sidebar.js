import React, { useState, useEffect } from 'react'
import UserInfo from './UserInfo'
import Login from './Login'
import { Link, NavLink } from 'react-router-dom'

import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'

import { Avatar } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EventIcon from '@mui/icons-material/Event';
import CommentIcon from '@mui/icons-material/Comment';
import TelegramIcon from '@mui/icons-material/Telegram';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


function Sidebar(props) {

  const [djangoData, setDjangoData] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)
  const [currentNetwork, setCurrentNetwork] = useState("General Assembly")
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'users/')
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])

  // console.log(djangoData[0])

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (<div className='sidebar'>
  {!djangoData
    ? <h1>LOADING...</h1>
    : <>
      {loggedIn 
      ? 
      <>
        {/* <UserInfo user={props.user} /> */}

        <SidebarRow 
          title={props.user.name}
          src={props.user.photo ? props.user.photo : './profileicon.png'}
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

        <div className={isActive ? 'hide' : ''} onClick={handleClick}>
          <SidebarRow
            title={"Conversations"}
            Icon={CommentIcon}
          />

          <div className=" topics tab">
            <Link to='/conversations/life'>
            <SidebarRow
              title={"Life"}
              Icon={TelegramIcon}
            />
            </Link>

            <Link to='/conversations/partytime'>
            <SidebarRow
              title={"Party Time"}
              Icon={CelebrationIcon}
            />
            </Link>

            <Link to='/conversations/industry'>
            <SidebarRow
              title={"Industry"}
              Icon={CodeOffIcon}
            />
            </Link>

            <Link to='/conversations/cryingroom'>
                <SidebarRow
                  title={"Crying Room"}
                  Icon={SentimentVeryDissatisfiedIcon}
                />
              
            </Link>
          </div>  
        </div>
        
      </>
      : 
      <>
        <Login />
      </>
      }
    </>
  }
  </div>
  )
}

export default Sidebar