import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Avatar } from "@mui/material"

function PostForm({topic, currentUser, accessToken}) {

  let postPlaceholder = `What's on your mind, ${currentUser.first_name}?`


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

  const [formData, setFormData] = useState(initialState)

  let topicForRoute = topic.toLowerCase()
  topicForRoute = topicForRoute.replace(/\s/g, '') 
  // console.log(topicForRoute)

  const handleChange = (event) => {
    setFormData({...formData, [event.target.id]: event.target.value})
    console.log(formData)
  }

  const handleSubmit = (event) => {
    // event.preventDefault()

    const url = process.env.REACT_APP_API_URL + 'posts/'
    // const url = 'https://radiant-tundra-28877.herokuapp.com/posts/'
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
      
      <form className='form' onSubmit={handleSubmit}>
      <input
        id="author"
        type="hidden"
        value={authorId}
      />
        <textarea
          value={formData.body}
          // rows='10'
          // cols='60'
          id='body'
          placeholder={postPlaceholder}
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