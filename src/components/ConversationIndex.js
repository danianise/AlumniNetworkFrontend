import React from 'react'
import { Link } from 'react-router-dom'

import '../css/ConversationIndex.css'
import { Avatar } from '@mui/material'

function ConversationIndex() {

  return (
    <div className='conversationIndex'>

      <h1>[Conversations]</h1>

      <div className = 'conversationLinks'>

        <Link 
          to='/conversations/life'
          className='eachLink'
        >
          <Avatar
            className='avatar'
            sx={{
              bgcolor: 'white',
              // width: 56,
              // height: 56
            }}
          >
            <span className='emoji'>🥂</span>
          </Avatar>
          Life
        </Link>
      
        <Link
          to='/conversations/partytime'
          className='eachLink'
        >
          <Avatar
            className='avatar'
            sx={{
              bgcolor: 'white',
              // width: 56,
              // height: 56
            }}
          >
            <span className='emoji'>🎉</span>
          </Avatar>
          Party Time
        </Link>
      
        <Link
          to='/conversations/industry'
          className='eachLink'
        >
          <Avatar
            className='avatar'
            sx={{
              bgcolor: 'white',
              // width: 56,
              // height: 56
            }}
          >
            <span className='emoji'>💻</span>
          </Avatar>
          Industry
        </Link>

        <Link
          to='/conversations/cryingroom'
          className='eachLink'
        >
          <Avatar 
            className='avatar'
            sx={{ 
              bgcolor: 'white', 
            // width: 56, 
            // height: 56
            }}
          >
            <span className='emoji'>😭</span>
          </Avatar>
          Crying Room
        </Link>
      </div>

    </div>
  )
}

export default ConversationIndex