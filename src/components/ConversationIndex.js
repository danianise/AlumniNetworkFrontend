import React from 'react'
import { Link } from 'react-router-dom'

function ConversationIndex() {
  return (
    <div className='conversationIndex'>
      <h1>[Conversations]</h1>
      <ul>
        <li>
          <Link to='/conversations/life'><span className='emoji'>🥂</span>Life</Link>
        </li>
        <li>
          <Link to='/conversations/partytime'><span className='emoji'>🎉</span>Party Time</Link>
        </li>
        <li>
          <Link to='/conversations/industry'><span className='emoji'>💻</span>Industry</Link>
        </li>
        <li>
          <Link to='/conversations/cryingroom'><span className='emoji'>😭</span>Crying Room</Link>
        </li>
      </ul>
    </div>
  )
}

export default ConversationIndex