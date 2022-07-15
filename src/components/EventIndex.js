import React, { useEffect, useState } from 'react'

import '../css/EventIndex.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function EventIndex() {

  const [djangoData, setDjangoData] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + 'events/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setDjangoData(data))
  }, [])

  console.log(djangoData)

  return (
    <div className='eventIndex'>
      <h1>[Events]</h1>
      {djangoData.map((each) => {
        let dateTime = each.dateTime
        let date = dateTime.slice(0, 10)
        let year = date.slice(0, 4)
        let month = date.slice(5, 7)
        let months = ["None", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let day = date.slice(8, 10)
        let time = dateTime.slice(11, 16)
        let hour = time.slice(0, 2)
        let minutes = time.slice(3, 5)
        let amPM = "AM"
        if(month.slice(0,1) == 0){
          month = month.slice(1,2)
        }
        if (hour > 12){
          hour = hour-12
          amPM = "PM"
        } 

        // console.log(month)

        return (
        <>
          <div className="event-container">
            <div className="event">
                <div className="event-left">
                    <div className="event-date">
                        <div className="date">
                            {day}
                        </div>
                        <div className="month">
                            {months[month]}
                        </div>
                        <div className="year">
                          {year}
                        </div>
                    </div>
                </div>
                <div className="event-right">
                  <h3 className="event-title">{each.name}</h3>
                  <div className="event-description">
                    {each.description}
                  </div>
                  <div className="event-timing">
                    <AccessTimeIcon className = "timeIcon"/>
                    {hour}:{minutes} {amPM} EST
                  </div>
                </div>
            </div>
          </div>
        </>
        )
      })}
      
    </div>
  )
}

export default EventIndex