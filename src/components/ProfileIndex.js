import React from 'react'

function ProfileIndex() {
  return (
    <div className='profileIndex'>
        <h1>
            [My Profile]
        </h1>
        <img className='profilePicLarge' src='/DHoey.jpg' alt='User Profile Picture'/>
        <p className='nameLocation'>
            [Danielle Hoey]
            Lunenburg, MA
        </p>
        <ul>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/EmailLogo.png' alt='Email Icon'/>
                </a>
            </li>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/LinkedInLogo.png' alt='LinkedIn Icon'/>
                </a>
            </li>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/GitHubLogo.png' alt='GitHub Icon'/>
                </a>
            </li>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/FacebookLogo.png' alt='Facebook Icon'/>
                </a>
            </li>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/TwitterLogo.png' alt='Twitter Icon'/>
                </a>
            </li>
            <li>
                <a href=''>
                    <img className='contactIcons' src='/InstagramLogo.png' alt='Instagram Icon'/>
                </a>
            </li>
        </ul>
        <div className='networkInfo'>
        <h3>Networks</h3>
        <ul>
            <li>
                <img src='/GALogo.png' alt='General Assembly Logo'/><br />
            </li>
            <li>
                <img src='/MHSLogo.png' alt="Miss Hall's School Logo"/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileIndex