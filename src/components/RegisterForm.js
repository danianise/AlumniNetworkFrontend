import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import '../css/RegisterForm.css'

function RegisterForm() {

    const signUpEndpoint = 'api/auth/signup/'

    const [formInfo, setFromInfo] = useState({username:'', password:''})
    const [networkErrMsg, setNetworkErrMsg] = useState(null)
    const [clientErrMsg, setClientErrMsg] = useState(null)
    const [passwordErrMsg, setPasswordErrMsg] = useState(null)

    const navigate = useNavigate()

    const statusCodeToErr = (responseObj) => {
        const statusCode = responseObj.status
        let errorText = ''
        responseObj.text().then(text => {
            errorText = text
            if (statusCode === 400){
                setNetworkErrMsg('Error: an account for this email already exists')
            }else {
                setNetworkErrMsg(`Network Error of code: ${statusCode}`)
            }
        })
    }

    const clientFormValidation = (formInfo) => {
        const blankFields = Object.entries(formInfo)
                                  .filter(kv => kv[1] === '')
        if (blankFields.length > 0) {
            setClientErrMsg(`Error: all fields required`)
            return false
        }
        setClientErrMsg(null)
        return true
    }

    const handleChange = (e) => {
        setFromInfo({...formInfo, [e.target.id]: e.target.value})
    }
  
    const handleSubmit = (e) => {
        if (formInfo.password !== formInfo.confirmPassword){
            e.preventDefault()
            setPasswordErrMsg('Passwords must match')
        } else {
            e.preventDefault()

            const submitFormInfo = {...formInfo, email:`${formInfo.username}`}
            console.log(submitFormInfo)

            setNetworkErrMsg(null)
            if (!clientFormValidation(formInfo)) {
                return
            }
            
            // const apiUrl = 'https://alumninetworkbackend-production.up.railway.app/'
            const apiUrl = process.env.REACT_APP_API_URL

            fetch( apiUrl + signUpEndpoint, 
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json',
                        },
                        body: JSON.stringify(submitFormInfo)
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
                        navigate('/register/success')
                    }
                })
        }
    }

    return (
    <div className='registerForm'>
      <h1>[Sign Up]</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input id="username" name="username" type="text" onChange={handleChange}/>
            <br /><br />
            <label>Password:</label>
            <input id="password" name="password" type="password" onChange={handleChange}/>
            <br /><p className='errMsg'>{passwordErrMsg}</p>
            <label>Confirm Password:</label>
            <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange}/>
            <br /><br />
            <label>First Name:</label>
            <input id="first_name" name="first_name" type="text" onChange={handleChange}/>
            <br /><br />
            <label>Last Name:</label>
            <input id="last_name" name="last_name" type="text" onChange={handleChange}/><br />
            <button className='registerButton' type="submit">Sign Up</button>
        </form>
        <p className='errMsg'>{networkErrMsg}</p>
        <p className='errMsg'>{clientErrMsg}</p>
    </div>
    );
}

export default RegisterForm;