import React, { useState } from 'react'

function PostForm() {

  const initialState = {
    topic: '',
    body: '',
    author: '',

  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value})
    console.log(formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const url = process.env.REACT_APP_API_URL + 'posts/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} id="author">
          <option value="0">Choose a User</option>
          <option value="1">Danielle Hoey</option>
        </select><br />
        <select onChange={handleChange} id="topic">
          <option value="life">Life</option>
          <option value="partyTime">Party Time</option>
          <option value="industry">Industry</option>
          <option value="cryingRoom">Crying Room</option>
        </select><br />
        <textarea
          rows='10'
          cols='60'
          id='body'
          placeholder='Body'
          onChange={handleChange}
          type='text'>
        </textarea><br />
        <button type='submit'>POST</button>
      </form>
    </div>
  )
}

export default PostForm