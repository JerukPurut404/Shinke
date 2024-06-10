import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenape from './components/pages/Lenape';
import Game from './components/pages/Game';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />}></Route> 
          <Route path='/lenape' element={ <Lenape />}></Route>
          <Route path='/game' element={ <Game />}></Route>
          <Route path='/contact' element={ <Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;