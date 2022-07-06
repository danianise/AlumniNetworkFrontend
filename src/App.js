import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LandingPage from './components/LandingPage';
import LoggedInLandingPage from './components/LoggedInLandingPage';
import ProfileIndex from './components/ProfileIndex';
import NetworkIndex from './components/NetworkIndex';
import ConversationIndex from './components/ConversationIndex';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <LandingPage />
      {/* <LoggedInLandingPage /> */}
      {/* <ProfileIndex /> */}
      {/* <NetworkIndex /> */}
      {/* <ConversationIndex /> */}
    </div>
  );
}

export default App;
