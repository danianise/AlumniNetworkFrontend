import React, { useState } from 'react'
import '../css/Login.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';

function Login() {

  const initialState = { email: '', password: '' };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialState);
  };

  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"><EmailIcon /></label>
            <input 
                id="email"
                type="email"
                placeholder="email"
                onChange={handleChange}
                value={formState.email}
            />
            <br />
            <label for="password"><VpnKeyIcon /></label>
            <input 
                id="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={formState.password}
            />
            <br />
            <button type="submit">Login</button>
        </form>
        {/* <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p> */}
    </div>
  )
}

export default Login