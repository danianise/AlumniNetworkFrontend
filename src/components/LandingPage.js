import React from 'react'

function LandingPage() {
  return (
    <div className='landingPage'>
        <h1>
            [welcome to theAlumniNetwork]
        </h1>
        <p>
            theAlumniNetwork is a social media site that connects peope who have attended
            the same school or completed the same course(s).<br /> Stay connected, strengthen your network.
        </p>
        <h4>
            To get started, choose a Network to connect to.
        </h4>
        <a href=''>
            <img src='/GALogo.png'/> 
        </a>
        <a href=''>
            <img src='MHSLogo.png'/>
        </a>
        <p>
            Don't see your network? <a href=''>[REQUEST A NETWORK]</a>
        </p>
    </div>
  )
}

export default LandingPage