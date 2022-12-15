import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function EditComment({topic, accessToken}) {


    const [formState, setFormState] = useState([])

    const params = useParams()
    const navigate = useNavigate()
    let commentId = params.commentId
    let postId = params.postId
    console.log('params', params)

    useEffect(() => {

        fetch(
            process.env.REACT_APP_API_URL + `comments/${commentId}/`,
            // `https://radiant-tundra-28877.herokuapp.com/comments/${commentId}/`,
            {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`
                }
              }
        )
        .then(res => res.json())
        .then(data => setFormState(data))

    }, [])
    

    let topicForRoute = topic.toLowerCase()
    topicForRoute = topicForRoute.replace(/\s/g, '') 
    // console.log(topicForRoute)

    let updatePost= async () => {

        await fetch(
            process.env.REACT_APP_API_URL + `comments/${commentId}/`,
            // `https://radiant-tundra-28877.herokuapp.com/comments/${commentId}/`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(formState)
            }
        )
        // .then(res => {
        //     if(!res.ok){
        //     throw Error(res.status)
        //     }
        //     res.json()
        // })
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        console.log(formState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        updatePost()
        
        navigate(`/conversations/${topicForRoute}/${postId}`)
        // setFormData(initialState)
    }

  return (
    <div className='editPost'>
        <h5>...edit your comment</h5>
        <form onSubmit={handleSubmit}>
            <input
                id="body"
                type="text"
                onChange={handleChange}
                value={formState.body}
            />
            {/* <input
                id="post"
                type="hidden"
                value={post}
            /> */}
            <button type="submit">Update</button>
    </form>
    </div>
  )
}

export default EditComment