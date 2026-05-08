import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Stats.css';

const Stats = () => {
  const [ref, isVisible] = useScrollReveal();

  const stats = [
    { number: '7', suffix: '년', text: '데이터 기반 운영 기획 총 경력' },
    { number: '2.4', suffix: '배', text: '중고나라 페이 결제액 증가 수치' },
    { number: '2', suffix: '억', text: '예약 운영 인건비 연 절감' },
  ];

  return (
    <section className="section stats-section" ref={ref}>
      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className={`stat-item ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${idx * 0.2}s` }}>
            <div className="stat-number-wrapper">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>
            <p className="stat-text">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
