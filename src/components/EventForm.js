import React, { useState } from 'react'

function EventForm({accessToken}) {

  const initialState = { 
    name: '',
    location: '',
    dateTime: '',
    description: '',
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const url = process.env.REACT_APP_API_URL + 'events/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(formState)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
  };
  
  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      /><br />

      <label htmlFor="location">Location: </label>
      <input
        id="location"
        type="text"
        onChange={handleChange}
        value={formState.location}
      /><br />

      <label htmlFor="dateTime">Date/Time: </label>
      <input
        id="dateTime"
        type="datetime-local"
        onChange={handleChange}
        value={formState.dateTime}
      /><br />

      <label htmlFor="description">Description: </label>
      <textarea
        rows='10'
        cols='60'
        id='description'
        onChange={handleChange}
        type='text'>
      </textarea><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm