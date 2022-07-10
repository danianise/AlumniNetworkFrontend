import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NetworkIndex() {

  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'networks/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  }, [])

  return (
    <div className='networkIndex'>
      <h1>[My Networks]</h1>
      <ul>
          {djangoData.map(function(each, index){
                return(
                    <img key={index} src={each.logo} alt = '{each.name} Logo' />
                )
            })}
      </ul>
      <Link to=''>[REQUEST A NETWORK]</Link>
    </div>
  )
}

export default NetworkIndex