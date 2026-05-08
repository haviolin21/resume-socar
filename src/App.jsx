import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Motivation from './components/Motivation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <div className="container">
        <About />
        <Motivation />
        <Experience />
        <Projects />
        <Education />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
