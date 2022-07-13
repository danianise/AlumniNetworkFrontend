import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/NetworkIndex.css'

function NetworkIndex(props) {

  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'networks/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  }, [])

  return (
    <div className='networkIndex'>
      {props.headline
      ? <h1>[{props.headline}]</h1>
      : <></>
      }
      <ul>
          {djangoData.map(function(each, index){
                return(
                    <img key={index} src={each.logo} alt = '{each.name} Logo' />
                )
            })}
      </ul>
    </div>
  )
}

export default NetworkIndex