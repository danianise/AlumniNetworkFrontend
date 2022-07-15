import React from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'

import '../css/ProfileIndex.css'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIndex(props) {

  console.log(props)

  return (
    <div className='profileIndex'>
        <h1>
            [welcome, {props.userData.name}]
        </h1>
        <div className = 'profileInfoContainer'>
            <div className='profileInfo'>
            <Link to=''>Edit Profile</Link>
                <div className='profilePhoto'>
                        <img src={props.userData.photo ? props.userData.photo : './profileicon.png'} alt='User Profile Picture'/><br />
                    </div>
                <p className='nameLocation'>
                    [{props.userData.name}]<br />
                    {props.userData.location}
                </p>
            </div>
            <ul>
                <li>
                    <a href=''>
                        <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.userData.linkedin}>
                        <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.userData.github}>
                        <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.userData.facebook}>
                        <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.userData.twitter}>
                        <img className='contactIcons' src='/TwitterLogo.png' alt='Twitter Icon'/>
                    </a>
                </li>
                <li>
                    <a href={props.userData.instagram}>
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