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
    fetch(process.env.REACT_APP_API_URL + 'posts/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setPostData(data))
  }, [])

  console.log(postData)

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