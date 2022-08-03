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

  return (<>

    <h1>[Request a Network]</h1>
    <p>Don't see your network? Request a new network with the form below:</p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Network Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      /><br />

      <label htmlFor="password">Network Location:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      /><br />

    <label htmlFor="logo">Logo (URL):</label>
      <input
        id="logo"
        type="url"
        onChange={handleChange}
        value={formState.logo}
      /><br />

      {/* <label htmlFor="logo">Logo:</label>
      <input
        id="logo" 
        type="file"
        onChange={handleChange}
        value={formState.logo}
      /><br /> */}

      Would you like to be the main contact for this network?<br />
      
      <input
        id="adminYes"
        type="radio"
        onChange={handleChange}
        value={formState.admin}
      />
      <label htmlFor='adminYes'>Yes</label><br />
      
      <input
        id="adminNo"
        type="radio"
        onChange={handleChange}
        value={formState.admin}
      />
      <label htmlFor='adminNo'>No</label><br />


      <label htmlFor="yourName">Your Name:</label>
      <input
        id="yourName"
        type="text"
        onChange={handleChange}
        value={formState.yourName}
      /><br />

      <label htmlFor="email">Your Email:</label>
      <input
        id="email"
        type="email"
        onChange={handleChange}
        value={formState.email}
      /><br />

      
      <button type="submit">Submit</button>
    </form>
    </>)
}

export default NetworkForm