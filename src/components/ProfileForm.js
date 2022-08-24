import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PublicIcon from '@mui/icons-material/Public';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function ProfileForm({accessToken}) {

  console.log(accessToken)
  let userId = localStorage.getItem('userId')
  console.log(userId)

  let navigate=useNavigate()

  const initialState = { 
    photo: '',
    location: '',
    linkedin: '',
    github: '',
    facebook: '',
    twitter: '',
    instagram: '',
    user: userId
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // const url = process.env.REACT_APP_API_URL + 'profile/'
    const url = 'https://radiant-tundra-28877.herokuapp.com/profile/'
    const options = {
      method: 'POST',
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
    setFormState(initialState)
  };
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <form className='profileForm' onSubmit={handleSubmit}>
      <input
        id="user"
        type="hidden"
        value={userId}
      />
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
  );
}


export default ProfileForm