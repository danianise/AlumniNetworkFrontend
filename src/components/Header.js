import React, { useState } from 'react'
import Login from './Login'
import { NavLink } from 'react-router-dom'

import "../css/Header.css"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';

function Header({loggedIn}) {

  return (
    <div className = "header">
      <div className = "header__left">
        <img src="/profileicon.png" alt='Gender Neutral Silhouette'/>
      </div>

      <div className = "header__right__center">

        <div className = "header__center">
          <h1>
            [theAlumniNetwork]
          </h1>
        </div>
        <div className = "header__right">
          <nav>
            <div className = "header__option">

              <NavLink 
                to ="/"
              >
                <HomeIcon />
                <span className = "header__text">
                  HOME
                </span>
              </NavLink> 

              <NavLink
                to="/networks"
              >
                <PeopleAltIcon />
                <span className = "header__text">
                  CHANGE NETWORK
                </span>
              </NavLink> 

              <NavLink
                to="/addnetwork"
              >
                <GroupAddIcon />
                <span className = "header__text">
                  REQUEST A NETWORK
                </span>
              </NavLink> 

              <NavLink
                to="/register"
              >
                <AppRegistrationIcon />
                <span className = "header__text">
                  REGISTER
                </span>
              </NavLink> 

              {!loggedIn 
                ? <></> 
                : <NavLink 
                    to="/logout"
                  >
                    <LogoutIcon />
                    <span className = "header__text header__logout">
                      LOGOUT
                    </span>
                  </NavLink>
              }

            </div>
          </nav>
        </div>

      </div>
    </div>
  )
}

export default Header