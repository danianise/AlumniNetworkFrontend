import React, { useEffect, useState } from 'react'
import '../css/RegisterForm.css'

function RegisterForm() {

  const initialState = { 
    name: '',
    email: '',
    photo: '',
    location: '',
    linkedin: '',
    github: '',
    facebook: '',
    twitter: '',
    instagram: '',
    network: '',
    password: ''
  };
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
    <div className='registerForm'>
         <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      /><br />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        onChange={handleChange}
        value={formState.email}
      /><br />

      <label htmlFor="photo">Profile Photo (URL):</label>
      <input
        id="photo"
        type="url"
        onChange={handleChange}
        value={formState.photo}
      /><br />

      {/* <label htmlFor="photo">Profile Photo:</label>
      <input
        id="photo" 
        type="file"
        onChange={handleChange}
        value={formState.photo}
      /> */}

      <label htmlFor="location">Location:</label>
      <input
        id="location"
        type="text"
        onChange={handleChange}
        value={formState.location}
      /><br />

      <label htmlFor="linkedin">LinkedIn (URL):</label>
      <input
        id="linkedin"
        type="url"
        onChange={handleChange}
        value={formState.linkedin}
      /><br />

      <label htmlFor="github">GitHub (URL):</label>
      <input
        id="github"
        type="url"
        onChange={handleChange}
        value={formState.github}
      /><br />

      <label htmlFor="facebook">Facebook (URL):</label>
      <input
        id="facebook"
        type="url"
        onChange={handleChange}
        value={formState.facebook}
      /><br />

      <label htmlFor="twitter">Twitter (URL):</label>
      <input
        id="twitter"
        type="url"
        onChange={handleChange}
        value={formState.twitter}
      /><br />

      <label htmlFor="instagram">Instagram (URL):</label>
      <input
        id="instagram"
        type="url"
        onChange={handleChange}
        value={formState.instagram}
      /><br />

      <label htmlFor="network">Which Network would you like to join? </label>
      <select
        id="network"
        onChange={handleChange}
        value={formState.network}
      >
        <option value="General Assembly">General Assembly</option>
        <option value="Miss Hall's School">Miss Hall's School</option>
      </select><br />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      /><br />

      <label htmlFor="verify">Verify Password:</label>
      <input
        id="verify"
        type="password"
        onChange={handleChange}
        value={formState.password}
      /><br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default RegisterForm