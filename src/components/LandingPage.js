import React, { useEffect, useState} from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'

function LandingPage(props) {


  return (
    <div className='landingPage'>
        <h1>
            [welcome to theAlumniNetwork]
        </h1>
        <p>
            <b style={{color:'#89cff0'}}>[FOR A SITE DEMO]</b> please log in with<br /> <b>email:</b> user@thealumninetwork.com <br /><b>password:</b> password
        </p>
        <p>
            theAlumniNetwork is a social media site that connects people who have attended
            the same school or completed the same course(s).<br /> Stay connected, strengthen your network.
        </p>
        <h4>
            <a href='/register'>[REGISTER HERE]</a> to get started.
        </h4>
            <NetworkIndex />
        <p>
            Don't see your network? <Link to='/addnetwork'>[REQUEST A NETWORK]</Link>
        </p>
    </div>
  )
}

export default LandingPage