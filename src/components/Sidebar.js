import React, { useContext, useState} from 'react'
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
import MenuIcon from '@mui/icons-material/Menu';
import AuthContext from '../context/AuthContext'


function Sidebar({currentUser, loggedIn, setLoggedIn, setAccessToken}) {

  let {profileData} = useContext(AuthContext)


  const [isActive, setIsActive] = useState(false);
 
  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (

    <div>
      {loggedIn
      ? <>
        <div className='sidebar'>

          <div className="sidebarUser">
          {!profileData
            ? <>
                <Avatar src='profileicon.png' />
              </>
            : profileData?.map((eachProfile) => {
              if(eachProfile.user === currentUser.id){
                  return(<>
                    <Avatar src={eachProfile.photo ? eachProfile.photo : 'profileicon.png'} />
                  </>)
              }
            })
          }
            <h5>
                {currentUser.first_name} {currentUser.last_name}
            </h5>
          </div>

          <Link to='/'>
            <SidebarRow 
              title={"My Profile"}
              Icon={PersonIcon}
            />
          </Link>

          <Link to='/networks'>
            <SidebarRow
              title={"My Networks"}
              Icon={PeopleAltIcon}
            />
          </Link>

          <Link to='/events'>
            <SidebarRow
              title={"Events"}
              Icon={EventIcon}
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
          
        </div>
      </>
      : 
      <>
        <Login
          setLoggedIn={setLoggedIn}
          setAccessToken={setAccessToken}
          // setRefreshToken={setRefreshToken}  
        />
      </>
      }
    </div>
  )
}

export default Sidebar