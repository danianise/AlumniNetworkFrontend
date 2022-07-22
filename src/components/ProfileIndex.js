import React, {useState, useEffect} from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'

import '../css/ProfileIndex.css'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIndex({userData, networkData, currentUser}) {
    
  return (
    <div className='profileIndex'>
       
        <div className = 'profileInfoContainer'>

            <div className='profileInfo'>
                <h1>
                    [welcome, {currentUser && currentUser.first_name} {currentUser && currentUser.last_name}]
                </h1>

                <div className='customProfile'>
                    <div className='verticalDisplay'>
                        <Link to=''>Edit Profile</Link>

                        <div className='profilePhoto'>
                            <img
                                src={
                                    userData.photo
                                        ? userData.photo
                                        : './profileicon.png'
                                    } 
                                alt='User Profile Picture'
                            />
                            {/* <br /> */}
                        </div>

                        <p className='nameLocation'>
                            [{userData.name}]<br />
                            {userData.location}
                        </p>
                    </div>
                
                    <ul>
                        <li>
                            <a href=''>
                                <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={userData.linkedin}>
                                <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={userData.github}>
                                <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={userData.facebook}>
                                <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={userData.twitter}>
                                <img className='contactIcons' src='/TwitterLogo.png' alt='Twitter Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={userData.instagram}>
                                <img className='contactIcons' src='/InstagramLogo.png' alt='Instagram Icon'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='networkInfo'>
                <NetworkIndex networkData={networkData} headline="My Networks"/>
            </div>
            </div>
        
    </div>
  )
}

export default ProfileIndex