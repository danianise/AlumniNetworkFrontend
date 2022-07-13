import React from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'

import '../css/ProfileIndex.css'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIndex(props) {
  return (
    <div className='profileIndex'>
        <h1>
            [welcome, {props.user.name}]
        </h1>
        <div className = 'profileInfoContainer'>
            <div className='profileInfo'>
            <Link to=''>Edit Profile</Link>
                {props.user.photo
                    ? <div className='profilePhoto'>
                        <img src='/DHoey.jpg' alt='User Profile Picture'/><br />
                    </div>
                    : <div className='profilePhoto'>
                        <img src={PersonIcon} /><br />
                    </div>}
                <p className='nameLocation'>
                    [{props.user.name}]<br />
                    {props.user.location}
                </p>
            </div>
            <ul>
                <li>
                    <a href=''>
                        <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.user.linkedin}>
                        <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.user.github}>
                        <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.user.facebook}>
                        <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.user.twitter}>
                        <img className='contactIcons' src='/TwitterLogo.png' alt='Twitter Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.user.instagram}>
                        <img className='contactIcons' src='/InstagramLogo.png' alt='Instagram Icon'/>
                    </a>
                </li>
            </ul>

            <div className='networkInfo'>
                <NetworkIndex headline="My Networks"/>
            </div>
        </div>
    </div>
  )
}

export default ProfileIndex