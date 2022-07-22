import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Avatar } from "@mui/material"

function PostForm({topic, currentUser, accessToken, getPosts, getComments}) {

  console.log(currentUser)
  let authorId = localStorage.getItem('userId')
  console.log(authorId)

  const navigate = useNavigate()

  const initialState = {
    topic: topic,
    body: '',
    author: authorId,
    imageURL: ''
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
        // getPosts()
        // getComments()
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
      navigate(`/conversations/${topicForRoute}`)
    setFormData(initialState)
  }

  return (
    <div className="postForm">
      <Avatar />
      <form onSubmit={handleSubmit}>
      <input
        id="author"
        type="hidden"
        value={authorId}
      />
        <textarea
          value={formData.body}
          rows='10'
          cols='60'
          id='body'
          placeholder="What's on your mind?"
          onChange={handleChange}
          type='text' 
        />
        <br />
        <div className="imageURL">
          <PhotoCameraIcon/>
          <input 
            value={formData.imageURL}
            id='imageURL'
            placeholder='Add a Photo (URL)'
            onChange={handleChange}
          />
        </div>
        <br />
        <button type='submit'>POST</button>
      </form>
    </div>
  )
}

export default PostForm