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

  }

  let topicForRoute = (props.topic).toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '') 
  console.log(topicForRoute)

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
      },
      body: JSON.stringify(formData)
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  console.log(djangoData)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label>new post by [{djangoData[0].name}]</label><br /> */}
        {/* <select onChange={handleChange} id="topic">
          <option value="Life">Life</option>
          <option value="Party Time">Party Time</option>
          <option value="Industry">Industry</option>
          <option value="Crying Room">Crying Room</option>
        </select><br /> */}
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