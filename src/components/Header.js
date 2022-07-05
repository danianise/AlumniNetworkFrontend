import React from 'react'

function Header() {
  return (
    <div>
      <h1>
        <img src="/profileicon.png"/>
        [theAlumniNetwork]
      </h1>
      <nav>
        <a href="http://localhost:3000">HOME</a> | <a href="">CHANGE NETWORK</a> | <a href="">REQUEST A NETWORK</a> | <a href="">REGISTER</a> | <a href="">LOGIN</a>
      </nav>
    </div>
  )
}

export default Header