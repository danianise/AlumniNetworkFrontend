import React, { useState, useEffect } from 'react'

function CommentForm(props) {

  console.log(props)
  const initialState = {
    post: props.post,
    author: '1',
    body: ''
  };

  const [formState, setFormState] = useState(initialState)


  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

  const handleSubmit = event => {
    // event.preventDefault()

    const url = process.env.REACT_APP_API_URL + 'comments/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.accessToken}`
      },
      body: JSON.stringify(formState)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">Comment:</label>
      <input
        id="body"
        type="text"
        onChange={handleChange}
        value={formState.body}
      />
      <input
        id="post"
        type="hidden"
        value={props.post}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm