import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const [ref, isVisible] = useScrollReveal();
  const competencies = [
    {
      title: '데이터 기반 문제 해결',
      items: [
        'SQL 기반 데이터 분석 및 핵심 지표 설계',
        '운영 병목 및 비용 구조 분석을 통한 개선 과제 도출',
        '대시보드 구축 및 데이터 기반 의사결정 지원'
      ]
    },
    {
      title: '운영 프로세스 개선 및 자동화',
      items: [
        '반복 업무 자동화 및 운영 체계 구축',
        'IVR 자동화 시스템 도입을 통한 운영 비용 절감',
        '운영 효율과 서비스 안정성을 고려한 프로세스 개선'
      ]
    },
    {
      title: '사업 운영 및 성과 관리',
      items: [
        '결제·예약·정산 운영 프로세스 관리 및 개선',
        '운영 지표 모니터링 및 성과 개선',
        '문제 재발 방지를 위한 운영 정책 및 관리 체계 수립'
      ]
    },
    {
      title: '협업 및 실행',
      items: [
        '운영·개발·사업 조직 협업 기반 문제 해결',
        '다양한 이해관계자 조율 및 개선 과제 리딩',
        '가설 수립부터 검증·실행·성과 측정까지 End-to-End 수행'
      ]
    }
  ];

  return (
    <section id="about" ref={ref} className={`section about-section reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <h2 className="section-title">핵심 역량</h2>
      <div className="competencies-grid">
        {competencies.map((comp, index) => (
          <div key={index} className="competency-card">
            <h3 className="competency-title">{comp.title}</h3>
            <ul className="competency-list">
              {comp.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
