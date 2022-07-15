import React, { useState, useEffect } from 'react'

function NetworkForm() {
  
  const initialState = { username: '', password: '' }
  const [formState, setFormState] = useState(initialState)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

  const handleSubmit = event => {
    event.preventDefault()
    // do something with the data in the component state
    console.log(formState)
    // clear the form
    setFormState(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default NetworkForm