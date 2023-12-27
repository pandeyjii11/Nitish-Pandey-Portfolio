import React, { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Project from './Componets/Projects';
import Contact from './Componets/Contact';
import About from './Componets/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
