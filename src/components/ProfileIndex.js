import React, {useContext, useState, useEffect} from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


import '../css/ProfileIndex.css'
import PersonIcon from '@mui/icons-material/Person';


function ProfileIndex({networkData, currentUser, accessToken}) {

    let currentUserName = currentUser.username
    let mailToLink = `mailto:${currentUserName}?body=Hello from your AlumniNetwork connection!`
    let currentUserProfile = null
    let linkToEditProfile = ""

    let {profileData} = useContext(AuthContext)
    console.log(currentUser)

    // useEffect(()=>{
    //     window.onload = function() {
    //         if(!window.location.hash) {
    //             window.location = window.location + '#loaded';
    //             window.location.reload();
    //         }
    //     }
    // },[])

    let reloadCount = sessionStorage.getItem('reloadCount')

    useEffect(() => {
        if(reloadCount < 2) {
          sessionStorage.setItem('reloadCount', String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem('reloadCount');
        }
        // fetch(
        //     // process.env.REACT_APP_API_URL + `users/${userId}`,
        //     `https://radiant-tundra-28877.herokuapp.com/users/${userId}/`, 
        //     {
        //       method: 'GET',
        //       headers: {
        //           'Content-Type': 'application/json',
        //       }
        //     }
        //   )
        //   .then(res => res.json())
        //   .then(data => setCurrentUser(data))
      }, []);
    
  return (
    <div className='profileIndex'>
       
        <div className = 'profileInfoContainer'>

            <div className='profileInfo'>
                <h1>
                    [welcome, {currentUser.first_name}]
                </h1>

                {profileData?.map((eachProfile) => {
                    if(eachProfile.user === currentUser.id){

                        currentUserProfile = eachProfile
                        console.log(currentUserProfile)
                        linkToEditProfile = `profile/${currentUserProfile.id}/edit`
                    }
                })}
                {!currentUserProfile 
                            ? <><Link to="/profile">Set Up Profile</Link></>
                            : <>
                            <Link to={linkToEditProfile}>Edit Profile</Link>
                            <div className='customProfile'>
                                <div className='verticalDisplay'>
                                    <div className='profilePhoto'>
                                        <img
                                            src={
                                                currentUserProfile.photo
                                                    ? currentUserProfile.photo
                                                    : './profileicon.png'
                                                } 
                                            alt='User Profile Picture'
                                        />
                                    </div>

                                    <p className='nameLocation'>
                                        [{currentUser.first_name} {currentUser.last_name}]<br />
                                        {currentUserProfile.location}
                                    </p>
                                </div>
                
                                <ul>
                                    <li>
                                        <a href={mailToLink}>
                                            <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={currentUserProfile.linkedin}>
                                            <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={currentUserProfile.github}>
                                            <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={currentUserProfile.facebook}>
                                            <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={currentUserProfile.twitter}>
                                            <img className='contactIcons' src='/twitter.png' alt='Twitter Icon'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={currentUserProfile.instagram}>
                                            <img className='contactIcons' src='/InstagramLogo.png' alt='Instagram Icon'/>
                                        </a>
                                    </li>
                                </ul>

                                <div className='networkInfo'>
                                    <NetworkIndex networkData={networkData} headline="My Networks"/>
                                </div>
                            </div>
                            <div className='networkInfoMedia'>
                                    <NetworkIndex networkData={networkData} headline="My Networks"/>
                            </div>
                            </>
                        }
            </div>            
        </div>    
    </div>
  )
}

export default ProfileIndex