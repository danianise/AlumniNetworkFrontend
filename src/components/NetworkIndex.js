import React from 'react'

function NetworkIndex(props) {
  return (
    <div className='networkIndex'>
      <h1>[My Networks]</h1>
      <ul>
          {props.networks.map(each => {
            return(
              <li>
                <a href = ''>
                  <img src = {each.logo} alt = "{each.name} Logo" />
                </a>
              </li>
            )
          })}
      </ul>
      <a href=''>[REQUEST A NETWORK]</a>
    </div>
  )
}

export default NetworkIndex