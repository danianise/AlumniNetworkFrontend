import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function EditProfile({accessToken}) {

  const params = useParams()
  console.log('params', params)
  let profileId = params.profileId
  let navigate=useNavigate()

  const [formState, setFormState] = useState([]);

  useEffect(() => {
    fetch(
        process.env.REACT_APP_API_URL + `profile/${profileId}/`, 
        // `https://radiant-tundra-28877.herokuapp.com/profile/${profileId}/`,
        {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
          }
        }
      )
      .then(res => res.json())
      .then(data => {
          setFormState(data)
          
      })
  }, [])

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const url = process.env.REACT_APP_API_URL + `profile/${profileId}/`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(formState)
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
      navigate('/')
    // setFormState(initialState)
  };
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (<>
    <h5>...edit your profile</h5>
    <form className='profileForm' onSubmit={handleSubmit}>
      <label htmlFor="photo"><CameraAltIcon/></label>
      <input
        id="photo"
        type="text"
        onChange={handleChange}
        value={formState.photo}
        placeholder="Photo (URL)"
      />
      <br /><br />
      <label htmlFor="location"><PublicIcon/></label>
      <input
        id="location"
        type="text"
        onChange={handleChange}
        value={formState.location}
        placeholder='Location (City, State)'
      />
      <br /><br />
      <label htmlFor="linkedin"><LinkedInIcon/></label>
      <input
        id="linkedin"
        type="text"
        onChange={handleChange}
        value={formState.linkedin}
        placeholder='LinkedIn (URL)'
      />
      <br /><br />
      <label htmlFor="github"><GitHubIcon/></label>
      <input
        id="github"
        type="text"
        onChange={handleChange}
        value={formState.github}
        placeholder='GitHub (URL)'
      />
      <br /><br />
      <label htmlFor="facebook"><FacebookIcon/></label>
      <input
        id="facebook"
        type="text"
        onChange={handleChange}
        value={formState.facebook}
        placeholder='Facebook (URL)'
      />
      <br /><br />
      <label htmlFor="twitter"><TwitterIcon/></label>
      <input
        id="twitter"
        type="text"
        onChange={handleChange}
        value={formState.twitter}
        placeholder='Twitter (URL)'
      />
      <br /><br />
      <label htmlFor="instagram"><InstagramIcon/></label>
      <input
        id="instagram"
        type="text"
        onChange={handleChange}
        value={formState.instagram}
        placeholder='Instagram (URL)'
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
    </>);
}


export default EditProfile