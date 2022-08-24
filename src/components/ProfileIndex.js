import React, {useContext, useState, useEffect} from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


import '../css/ProfileIndex.css'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIndex({networkData, currentUser, accessToken}) {

    let currentUserName = currentUser.username
    let currentUserProfile = ""
    let mailToLink = `mailto:${currentUserName}?body=Hello from your AlumniNetwork connection!`
    

    let {profileData} = useContext(AuthContext)
    let linkToEditProfile = `profile/${currentUserProfile.id}/edit`
    
  return (
    <div className='profileIndex'>
       
        <div className = 'profileInfoContainer'>

            <div className='profileInfo'>
                <h1>
                    [welcome, {currentUser.first_name}]
                </h1>
                {!profileData
                ? <Link to="/profile">Set Up Profile</Link>
                : <Link to={linkToEditProfile}>Edit Profile</Link> }

                {profileData?.map((eachProfile) => {

                    if(eachProfile.user === currentUser.id){

                        currentUserProfile = eachProfile
                        console.log(currentUserProfile)
                        // let linkToEditProfile = `profile/${currentUserProfile.id}/edit`

                        return(
                            <div className='customProfile'>
                                <div className='verticalDisplay'>
                                
                                    <div className='profilePhoto'>
                                        <img
                                            src={
                                                eachProfile.photo
                                                    ? eachProfile.photo
                                                    : './profileicon.png'
                                                } 
                                            alt='User Profile Picture'
                                        />
                                    </div>

                                    <p className='nameLocation'>
                                        [{currentUser.first_name} {currentUser.last_name}]<br />
                                        {eachProfile.location}
                                    </p>
                                </div>
                
                    <ul>
                        <li>
                            <a href={mailToLink}>
                                <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={eachProfile.linkedin}>
                                <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={eachProfile.github}>
                                <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={eachProfile.facebook}>
                                <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={eachProfile.twitter}>
                                <img className='contactIcons' src='/twitter.png' alt='Twitter Icon'/>
                            </a>
                        </li>
                        <li>
                            <a href={eachProfile.instagram}>
                                <img className='contactIcons' src='/InstagramLogo.png' alt='Instagram Icon'/>
                            </a>
                        </li>
                    </ul>

                    <div className='networkInfo'>
                        <NetworkIndex networkData={networkData} headline="My Networks"/>
                    </div>
                </div>
                        )
                    } 
                   
                    
                })}

                


            </div>

            
            </div>
        
    </div>
  )
}

export default ProfileIndex