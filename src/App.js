import './styles/style.css';

//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Showcase from './components/Showcase';

//import react stuff
import { useState, useEffect } from 'react';


function App() {

  return (
    <div className="main-container">
     <Header />
      <Showcase />
     <Footer />
    </div>
  );
}

export default App;
