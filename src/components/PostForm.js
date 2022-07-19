import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function PostForm({topic, accessToken, getPosts, getComments}) {

  // useEffect(() => {
  //   fetch(process.env.REACT_APP_API_URL + 'users/')
  //   .then(res => res.json())
  //   .then(data => setDjangoData(data))
  // }, [])

  const navigate = useNavigate()

  const initialState = {
    topic: topic,
    body: '',
    author: '1',
    // user_string: 'simple_user'

  }

  let topicForRoute = topic.toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '') 
  // console.log(topicForRoute)

  const [formData, setFormData] = useState(initialState)

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
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(formData)
    }

    fetch(url, options)
      .then(res => {
        if(!res.ok){
          throw Error(res.status)
        }
        res.json()
      })
      .then(data => {
        getPosts()
        getComments()
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        navigate('/logout')
      })

    setFormData(initialState)
  }

  // console.log(djangoData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={formData.body}
          rows='10'
          cols='60'
          id='body'
          placeholder='Body'
          onChange={handleChange}
          type='text' 
        />
        <br />
        <button type='submit'>POST</button>
      </form>
    </div>
  )
}

export default PostForm