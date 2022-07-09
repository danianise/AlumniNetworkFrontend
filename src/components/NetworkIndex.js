import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NetworkIndex(props) {

  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch('https://radiant-tundra-28877.herokuapp.com/networks')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  })

  return (
    <div className='networkIndex'>
      <h1>[My Networks]</h1>
      <ul>
          {/* {props.networks.map(each => {
            return(
              <li>
                <a href = ''>
                  <img src = {each.logo} alt = "{each.name} Logo" />
                </a>
              </li>
            )
          })} */}
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