import React, { useState, useEffect } from 'react'
import '../css/NetworkForm.css'

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
  
    <div className = 'networkForm'>

      <h1>[Request a Network]</h1>
      <p>Don't see your network? Request a new network with the form below:</p>

      <form onSubmit={handleSubmit}>
        <label>Network Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <br /><br />

        <label>Network Location:</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={formState.password}
        />
        <br /><br />

      <label>Logo (URL):</label>
        <input
          id="logo"
          type="url"
          onChange={handleChange}
          value={formState.logo}
        />
        <br /><br />

        {/* <label htmlFor="logo">Logo:</label>
        <input
          id="logo" 
          type="file"
          onChange={handleChange}
          value={formState.logo}
        /><br /> */}

        Would you like to be the main contact for this network?
        <br />
        
        
        <input
          id="adminYes"
          type="radio"
          onChange={handleChange}
          value={formState.admin}
        />
        <label>Yes</label>
        
        <input
          id="adminNo"
          type="radio"
          onChange={handleChange}
          value={formState.admin}
        />
        <label>No</label>
        <br /><br />


        <label htmlFor="yourName">Your Name:</label>
        <input
          id="yourName"
          type="text"
          onChange={handleChange}
          value={formState.yourName}
        />
        <br /><br />

        <label htmlFor="email">Your Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={formState.email}
        />
        <br /><br />

        
        <button type="submit">Submit</button>
      </form>
    </div>
    )
}

export default NetworkForm