import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero-section">
      <div 
        className="container hero-container"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          opacity: Math.max(1 - scrollY / 500, 0)
        }}
      >
        <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
          <span className="line">데이터 기반으로</span>
          <br />
          <span className="line highlight">운영 문제를 해결하는 하윤택입니다.</span>
        </h1>
        <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
          운영 과정의 비효율을 찾아내고 시스템화하여<br />서비스의 안정성과 성장을 동시에 견인합니다.
        </p>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
