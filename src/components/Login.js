import React, { useState, useEffect } from 'react'
import '../css/Login.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import {useNavigate} from 'react-router-dom'

function Login({setLoggedIn, setAccessToken}) {

  const loginEndpoint = 'api/token/'
  const navigate = useNavigate()

  const initialState = { username: '', password: '' };
  const [formInfo, setFormInfo] = useState(initialState);
  const [networkErrMsg, setNetworkErrMsg] = useState(null)
  const [clientErrMsg, setClientErrMsg] = useState(null)
  const [users, setUsers] = useState(null)
  
  useEffect(() => {
    // const url = process.env.REACT_APP_API_URL + 'users/'
    const url = 'https://radiant-tundra-28877.herokuapp.com/users/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const statusCodeToErr = (responseObj) => {
    setNetworkErrMsg(`Network Error of code: ${responseObj.status}`)
  }

  const clientFormValidation = (formInfo) => {
    const blankFields = Object.entries(formInfo)
                              .filter(kv => kv[1] === '')
    if (blankFields.length > 0) {
        setClientErrMsg(`${blankFields[0][0]} can not be blank`)
        return false
    }
    setClientErrMsg(null)
    return true
  }

  const handleChange = event => {
    setFormInfo({ ...formInfo, [event.target.id]: event.target.value });
  };

  const handleLogin = event => {
    event.preventDefault();
    
    setNetworkErrMsg(null)

      if (!clientFormValidation(formInfo)) {
          return
      }
        
      // const url = process.env.REACT_APP_API_URL
      const url = 'https://radiant-tundra-28877.herokuapp.com/'
        
        fetch(url + loginEndpoint, 
          {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify(formInfo)
          }
        )
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            statusCodeToErr(res)
            return Promise.resolve(null)
          }
        })
        .then(data => {
          if (!data) {
            console.log(`problem with network request: ${networkErrMsg}`)
          } else {              
            console.log(data)
            
            setLoggedIn(formInfo.username)
            setAccessToken(data.access)
            
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('refresh_token', data.refresh)
            localStorage.setItem('user', formInfo.username)
          }
        })
        .then(() =>
            {users?.map((eachUser) => {
              console.log(eachUser)
              if(localStorage.getItem('user') === eachUser.username){
                localStorage.setItem('userId', eachUser.id)
              }
            })
            navigate('/')
            }
        )
        // .then(
        //   fetch(process.env.REACT_APP_API_URL + 'users/', {
        //     method: 'GET',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     }
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //     data?.map((eachUser)=>{
        //       console.log(eachUser)
        //       console.log(localStorage.getItem('user'))
        //       if(localStorage.getItem('user') === eachUser.username){
        //         localStorage.setItem('userId', eachUser.id)
        //       }
        //     })
        //     setUsers(data)
        //   }
        //   )
        // )
  };

  return (
    <div className='login'>
        <form onSubmit={handleLogin}>
            <label htmlFor="username"><EmailIcon /></label>
            <input 
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="password"><VpnKeyIcon /></label>
            <input 
                id="password"
                name="username"
                type="password" 
                onChange={handleChange}
            />
            <br />
            <button type="submit">Login</button>
        </form>
        <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p>
    </div>

  )
}

export default Login