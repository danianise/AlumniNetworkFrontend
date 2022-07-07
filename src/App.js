import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import ProfileIndex from './components/ProfileIndex';
import NetworkIndex from './components/NetworkIndex';
import ConversationIndex from './components/ConversationIndex';

function App() {
  
  // fetch('https://radiant-tundra-28877.herokuapp.com')
  //   .then(res => res.json())
  //   .then(data => console.log(data))

  const networkArray = [
    {
      name: 'General Assembly',
      location: 'Boston, MA',
      logo: 'https://i.imgur.com/mTuKYLr.png'
    },
    {
      name: "Miss Hall's School",
      location: 'Pittsfield, MA',
      logo: 'https://i.imgur.com/VQR5BL1.png'
    }
  ]


  return (
    <div>
      <Header />
      <Sidebar />
      <LandingPage networks={networkArray} />
      {/* <LoggedInLandingPage name='Danielle Hoey' networks={networkArray}/> */}
      {/* <ProfileIndex /> */}
      {/* <NetworkIndex networks={networkArray} /> */}
      {/* <ConversationIndex /> */}
    </div>
  );
}

export default App;
