import React, { useState } from 'react'

function Header() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className = 'header'>
      <h1>
        <img src="/profileicon.png" alt='Gender Neutral Silhouette'/>
        [theAlumniNetwork]
      </h1>
      <nav>
        <a href="https://blooming-waters-28022.herokuapp.com/">HOME</a> 
        | <a href="">CHANGE NETWORK</a> 
        | <a href="">REQUEST A NETWORK</a> 
        | <a href="">REGISTER</a> 
        | {!loggedIn ? <a href="">LOGIN</a> : <a href="">LOGOUT</a>}
      </nav>
    </div>
  )
}

export default Header