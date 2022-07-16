import React, { useEffect, useState} from 'react'
import NetworkIndex from './NetworkIndex'
import { Link } from 'react-router-dom'

function LandingPage(props) {

  // const [djangoData, setDjangoData] = useState([])

  // useEffect(() => {
  //   fetch('https://radiant-tundra-28877.herokuapp.com/networks')
  //   .then(res => res.json())
  //   // .then(data => console.log(data))
  //   .then(data => setDjangoData(data))
  // })

  return (
    <div className='landingPage'>
        <h1>
            [welcome to theAlumniNetwork]
        </h1>
        <p>
            theAlumniNetwork is a social media site that connects people who have attended
            the same school or completed the same course(s).<br /> Stay connected, strengthen your network.
        </p>
        <h4>
            <a href=''>[REGISTER HERE]</a> to get started.
        </h4>
            <NetworkIndex />
        <p>
            Don't see your network? <Link to='/addnetwork'>[REQUEST A NETWORK]</Link>
        </p>
    </div>
  )
}

export default LandingPage