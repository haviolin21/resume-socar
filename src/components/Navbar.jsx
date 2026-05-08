import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src="/favicon.svg" alt="Logo" className="nav-icon" />
          <span className="nav-title">하윤택 | 운영 전문가</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollTo('about')}>핵심 역량</button>
          <button onClick={() => scrollTo('motivation')}>지원 동기</button>
          <button onClick={() => scrollTo('experience')}>경력사항</button>
          <button onClick={() => scrollTo('projects')}>프로젝트</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
