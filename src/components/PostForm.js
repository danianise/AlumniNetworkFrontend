import React, { useEffect, useState } from 'react'

function PostForm(props) {

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'users/')
    .then(res => res.json())
    .then(data => setDjangoData(data))
  }, [])

  const initialState = {
    topic: props.topic,
    body: '',
    author: '1',
    // user_string: 'simple_user'

  }

  let topicForRoute = (props.topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '') 
  // console.log(topicForRoute)

  const [formData, setFormData] = useState(initialState)
  const [djangoData, setDjangoData] = useState([])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value})
    console.log(formData)
  }

  const handleSubmit = (event) => {
    // event.preventDefault()

    const url = process.env.REACT_APP_API_URL + 'posts/'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${props.accessToken}`
      },
      body: JSON.stringify(formData)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  // console.log(djangoData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
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