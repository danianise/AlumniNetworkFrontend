import React, { useEffect, useState } from 'react'
import PostForm from './PostForm'

function PostList(props) {const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'posts/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  }, [])

  console.log(djangoData)

  let emojis = [
    {topic: 'Life', emoji: '🥂'},
    {topic: 'Party Time', emoji: '🎉'},
    {topic: 'Industry', emoji: '💻'},
    {topic: 'Crying Room', emoji: '😭'}
  ]

  return (
    <div>
      {emojis.map((each) => {
        if (props.topic === each.topic){
          return(
            <h1>{each.emoji}[{props.topic}]</h1>
          )
        }
      })}
      {djangoData.map((each) => {
        if(props.topic === each.topic){
          console.log(each)
          return(
          <>
            <p>{each.body}</p>
            <h6>{each.timestamp}</h6>
            <h6>{each.author}</h6>
          </>
          )
        }
      })}
      <h5>...add to the conversation</h5>
      <PostForm topic={props.topic}/>
    </div>
  )
}

export default PostList