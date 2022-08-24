import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function EditPost({topic, accessToken}) {


    const [formState, setFormState] = useState([])

    const params = useParams()
    const navigate = useNavigate()
    let postId = params.postId
    // console.log('params', params)

    useEffect(() => {

        fetch(
            // process.env.REACT_APP_API_URL + `posts/${postId}`,
            `https://radiant-tundra-28877.herokuapp.com/posts/${postId}/`,
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
            // process.env.REACT_APP_API_URL + `posts/${postId}/`,
            `https://radiant-tundra-28877.herokuapp.com/posts/${postId}/`,
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
        
        navigate(`/conversations/${topicForRoute}`)
        // setFormData(initialState)
    }

  return (
    <div className='editPost'>
        <h5>...edit your post</h5>
        <form 
            onSubmit={handleSubmit}
        >
        {/* <input
            id="author"
            type="hidden"
            value={formState.author}
        /> */}
            <textarea
            value={formState.body}
            rows='10'
            cols='60'
            id='body'
            // placeholder={postPlaceholder}
            onChange={handleChange}
            type='text' 
            />
            <br />
            <div className="imageURL">
            <PhotoCameraIcon/>
            <input 
                value={formState.imageURL}
                id='imageURL'
                placeholder='Add a Photo (URL)'
                onChange={handleChange}
            />
            </div>
            <br />
            <button type='submit'>UPDATE</button>
        </form>
    </div>
  )
}

export default EditPost