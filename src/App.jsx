import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Motivation from './components/Motivation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <About />
        <Motivation />
        <Experience />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default App;
