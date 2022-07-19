import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/NetworkIndex.css'

function NetworkIndex({headline}) {

  const [networkData, setNetworkData] = useState([])

  useEffect(() => {
  const url = process.env.REACT_APP_API_URL + 'networks/'
    const opts = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
      }
    }
    fetch(url, opts)
    .then(res => res.json())
    .then(data => setNetworkData(data))
  }, [])
  

  // console.log(networkData)

  return (
    <div className='networkIndex'>
      {headline
      ? <h1>[{headline}]</h1>
      : <></>
      }
      <ul>
          {networkData.map(function(each, index){
                return(
                    <img key={index} src={each.logo} alt = '{each.name} Logo' />
                )
            })}
      </ul>
    </div>
  )
}

export default NetworkIndex