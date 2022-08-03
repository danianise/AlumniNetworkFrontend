import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function LogOut({loggedIn, setLoggedIn, setAccessToken, setRefreshToken}) {

  const navigate=useNavigate()

    const [userName, setUserName] = useState(loggedIn)

    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('userId')
        setLoggedIn(null)
        setAccessToken(null)
        setRefreshToken(null)
        navigate('/')
    }, [])
  return (
    <>
    </>
  )
}

export default LogOut