import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/NetworkIndex.css'

function NetworkIndex({networkData, headline}) {

  return (
    <div className='networkIndex'>
      {headline
      ? <h1>[{headline}]</h1>
      : <></>
      }
      <ul>
          {networkData?.map(function(each, index){
                return(
                    <img key={index} src={each.logo} alt = '{each.name} Logo' />
                )
            })}
      </ul>
    </div>
  )
}

export default NetworkIndex