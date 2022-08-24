import { getPopoverUtilityClass } from '@mui/material';
import React, { useState, useEffect } from 'react'

function CommentForm({post, currentUser, accessToken, getPosts, getComments}) {

  console.log(currentUser)
  let authorId = localStorage.getItem('userId')
  console.log(authorId)

  const initialState = {
    post: post,
    author: authorId,
    body: ''
  };

  const [formState, setFormState] = useState(initialState)


  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

  const handleSubmit = event => {
    // event.preventDefault()

    // const url = process.env.REACT_APP_API_URL + 'comments/'
    const url = 'https://radiant-tundra-28877.herokuapp.com/comments/'
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
      .then(data => {
        // getPosts()
        // getComments()
        console.log(data)
      })
    
    setFormState(initialState)
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
        value={post}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm