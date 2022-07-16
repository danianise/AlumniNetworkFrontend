import React, { useState } from 'react'
import '../css/Login.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';

function Login({setLoggedIn, setAccessToken}) {

  const loginEndpoint = 'api/token/'

  const initialState = { username: '', password: '' };
  const [formInfo, setFormInfo] = useState(initialState);
  const [networkErrMsg, setNetworkErrMsg] = useState(null)
  const [clientErrMsg, setClientErrMsg] = useState(null)

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
        
      const url = process.env.REACT_APP_API_URL
        
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

            setLoggedIn("ANsuperuser")
            setAccessToken(data.access)
            // add tokens to localstorage here
            localStorage.setItem('access_token', data.access)
            localStorage.setItem('user', 'ANsuperuser')
            // redirect here
          }
        })
  };

  return (
    // <div className='login'>
    //     <form onSubmit={handleLogin}>
    //         <label htmlFor="username"><EmailIcon /></label>
    //         <input 
    //             id="username"
    //             type="text"
    //             placeholder="username"
    //             onChange={handleChange}
    //             // value={formState.username}
    //         />
    //         <br />
    //         <label htmlFor="password"><VpnKeyIcon /></label>
    //         <input 
    //             id="password"
    //             type="password"
    //             placeholder="password"
    //             onChange={handleChange}
    //             // value={formState.password}
    //         />
    //         <br />
    //         <button type="submit">Login</button>
    //     </form>
    //     <p>{networkErrMsg}</p>
    //     <p>{clientErrMsg}</p>
    // </div>
    <div>
    <h3>Login</h3>
      <form onSubmit={handleLogin}>
          <label>username:</label>
          <input id="username" name="username" type="text" onChange={handleChange}/>
          <label>password:</label>
          <input id="password" name="username" type="text" onChange={handleChange}/>
          <button type="submit">Login</button>
      </form>
      <p>{networkErrMsg}</p>
      <p>{clientErrMsg}</p>
  </div>

  )
}

export default Login