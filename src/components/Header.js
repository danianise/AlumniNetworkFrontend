import React, { useState } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

function Header() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className = 'header'>
      <h1>
        <img src="/profileicon.png" alt='Gender Neutral Silhouette'/>
        [theAlumniNetwork]
      </h1>
      <nav>
        <Link to ="/">HOME</Link> 
        | <Link to="">CHANGE NETWORK</Link> 
        | <Link to="">REQUEST A NETWORK</Link> 
        | <Link to="">REGISTER</Link> 
        | {!loggedIn ? <><Login /></> : <a href="">LOGOUT</a>}
      </nav>
    </div>
  )
}

export default Header