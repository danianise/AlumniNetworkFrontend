import React, {useState, useEffect} from 'react'


function LogOut({loggedIn, setLoggedIn, setAccessToken}) {

    const [userName, setUserName] = useState(loggedIn)

    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        setLoggedIn(null)
        setAccessToken(null)
    }, [])
  return (
    <>
    </>
  )
}

export default LogOut