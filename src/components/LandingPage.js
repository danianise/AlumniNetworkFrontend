import React, { useEffect, useState} from 'react'

function LandingPage(props) {

  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch('https://radiant-tundra-28877.herokuapp.com/networks')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  })

  return (
    <div className='landingPage'>
        <h1>
            [welcome to theAlumniNetwork]
        </h1>
        <p>
            theAlumniNetwork is a social media site that connects peope who have attended
            the same school or completed the same course(s).<br /> Stay connected, strengthen your network.
        </p>
        <h4>
            <a href=''>[REGISTER HERE]</a> to get started.
        </h4>
        {/* {props.networks.map(each => {
            return(
                <img src={each.logo} alt = '{each.name} Logo' />
            )
        })} */}
            {djangoData.map(function(each, index){
                return(
                    <img key={index} src={each.logo} alt = '{each.name} Logo' />
                )
            })}
        <p>
            Don't see your network? <a href=''>[REQUEST A NETWORK]</a>
        </p>
    </div>
  )
}

export default LandingPage