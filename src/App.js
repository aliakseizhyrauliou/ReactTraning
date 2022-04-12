import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header.jsx';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News';
import Profile from './components/Profile/Profile.jsx';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        {/* <Profile/> */}
        <div className="app-wrapper-content">
          <Routes>
            <Route element={<Dialogs/>} path="/dialogs"/>
            <Route element={<Profile/>} path="/profile"/>
            <Route element={<News/>} path="/news"/>
            <Route element={<Music/>} path="/music"/>
            <Route element={<Settings/>} path="/settings"/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
