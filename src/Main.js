import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';


const Main = () => {
  return (
    <Router>
      <Routes>
        {/* The Routes decides which component to show based on the current URL. */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      
      </Routes>
    </Router>
  );
};

export default Main;