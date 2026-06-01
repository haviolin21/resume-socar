import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const Education = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="education" ref={ref} className={`section education-section reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <h2 className="section-title">학력 및 교육</h2>
      
      <div className="edu-block">
        <h3 className="edu-type">학력</h3>
        <div className="edu-item">
          <div className="edu-header">
            <h4 className="edu-title">상명대학교(천안)</h4>
            <span className="edu-period">2010.03 ~ 2016.08</span>
          </div>
          <p className="edu-details">금융경영학과 | 학사</p>
        </div>
      </div>

      <div className="edu-block">
        <h3 className="edu-type">교육</h3>
        
        <div className="edu-item">
          <div className="edu-header">
            <h4 className="edu-title">빅데이터 분석</h4>
            <span className="edu-period">2025.02 ~ 2025.03</span>
          </div>
          <p className="edu-details">코드잇(Codeit)</p>
          <ul className="edu-desc">
            <li>Python 기반 데이터 분석 과정 수료</li>
            <li>Pandas 기반 데이터 전처리 및 분석</li>
            <li>데이터 시각화 및 분석 리포트 작성</li>
          </ul>
        </div>

        <div className="edu-item">
          <div className="edu-header">
            <h4 className="edu-title">Software Engineering</h4>
            <span className="edu-period">2020.12 ~ 2021.04</span>
          </div>
          <p className="edu-details">코드스테이츠(Code States)</p>
          <ul className="edu-desc">
            <li>JavaScript 기반 Full-Stack 과정 수료</li>
            <li>React, Node.js, MySQL 기반 웹 서비스 개발 학습</li>
            <li>DB Schema 설계 및 API 기반 서비스 구조 이해</li>
            <li>Git 기반 협업 및 프로젝트 수행</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
