import React, { useState } from 'react'

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
            <label htmlFor="email">email:</label>
            <input 
                id="email"
                type="email"
                onChange={handleChange}
                value={formState.email}
            />
            <label for="password">password:</label>
            <input 
                id="password"
                type="password"
                onChange={handleChange}
                value={formState.password}
            />
            <button type="submit">Login</button>
        </form>
        {/* <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p> */}
    </div>
  )
}

export default Login