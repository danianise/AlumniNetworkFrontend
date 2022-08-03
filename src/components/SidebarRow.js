import React from 'react'
import '../css/Sidebar.css'
import { Avatar } from '@mui/material'

function SidebarRow({ src, Icon, title}) {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h5>
            {title}
        </h5>
    </div>
  )
}

export default SidebarRow