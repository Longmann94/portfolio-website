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


function App() {

  const [showCaseArr, setShowCaseArr ] = useState([
    {
      title: 'overwatch clips sharing website',
      feature1: 'Log in/register using Firebase authentication',
      feature2: 'Read/Write data to/from Firebase Firestore database',
      feature3: 'search feature, comment section and ability to like clips',
      feature4: 'logged in user can upload own clips'
    }
  ]);

  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path='/' element={<Showcase showCaseArr={showCaseArr} />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
