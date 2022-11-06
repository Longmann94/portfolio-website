import './styles/style.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contacts from './components/Contacts';

//import react stuff
import { useState, useEffect } from 'react';

//import from react-router-dom
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";


function RouteSwitch() {

  const navigate = useNavigate();
  const handleClick = (e) => {

    let where = e.target.id;

    if(where === 'showcase'){
      navigate('/');
    }

    if(where === 'aboutme'){
      navigate('/aboutme');
    }

    if(where === 'skills'){
      navigate('/skills');
    }

    if(where === 'contacts'){
      navigate('/contacts');
    }
  }

  return (
    <div className="main-container">
      <Header handleClick={handleClick} />
      <Routes>
        <Route path='/' element={<Showcase />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default RouteSwitch;
