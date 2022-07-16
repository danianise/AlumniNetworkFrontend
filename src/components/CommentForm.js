import React, { useState, useEffect } from 'react'

function CommentForm(props) {

  const initialState = {
    post: props.post.id,
    author: '1',
    body: ''
  };

  const [formState, setFormState] = useState(initialState)
  const [postData, setPostData] = useState([])

  useEffect(() => {
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3OTkyNDU4LCJpYXQiOjE2NTc5OTIxNTgsImp0aSI6IjU3MjY3YmZhODJjZDRjMWNhMGFjMmVmM2IxMDA2OTRkIiwidXNlcl9pZCI6MX0.cNJhd3ftMSCjMp5sUXnUbzicfqleZYzNdNBN6_6cOGo"
    const url = process.env.REACT_APP_API_URL + 'posts/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])

  // console.log(postData)

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  };

  const handleSubmit = event => {
    event.preventDefault()
    // do something with the data in the component state
    console.log(formState)
    // clear the form
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm