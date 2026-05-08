import React from 'react';
import './About.css';

const About = () => {
  const competencies = [
    {
      title: '데이터 기반 운영 구조 개선 및 자동화',
      items: [
        'SQL 기반 데이터 분석 및 운영 지표 설계를 통한 운영 병목 및 비효율 개선',
        'IVR 자동화 시스템 도입을 통한 24시간 운영 체계 구축 및 연간 약 2억 원 비용 절감',
        '운영 성과 대시보드 구축 및 데이터 기반 의사결정 지원'
      ]
    },
    {
      title: '현장 중심 운영 정책 및 프로세스 설계',
      items: [
        '오프라인 파트너(매장) 운영 환경 분석 기반 운영 정책 및 프로세스 개선',
        '예약, 장애, CS 등 운영 이슈 대응 프로세스 구조화 및 운영 가이드 수립',
        '서비스 안정성과 운영 효율을 고려한 운영 구조 개선 수행'
      ]
    },
    {
      title: '협력사 운영 및 조직 간 협업',
      items: [
        '오프라인 파트너 인터뷰 및 현장 검증 기반 운영 정책 수립',
        '운영·개발·사업 조직 간 협업을 통한 시스템 및 기능 개선 리딩',
        '다양한 이해관계자와의 협업 기반 운영 안정화 경험 보유'
      ]
    },
    {
      title: 'O2O 및 플랫폼 운영 경험',
      items: [
        '커머스 및 예약 플랫폼 환경에서 운영 효율 및 사용자 경험 개선 프로젝트 수행',
        '퍼널 분석 기반 사용자 이탈 구간 개선 및 거래 전환율 향상 경험 보유',
        '데이터 분석 결과를 실제 운영 정책과 서비스 개선에 반영한 경험 보유'
      ]
    },
    {
      title: 'AI 및 업무 자동화 활용 역량',
      items: [
        'GPT, Gemini 등 AI 도구를 활용한 운영 생산성 및 업무 자동화 경험 보유',
        'Jira, Confluence, SQL 등 협업 및 데이터 분석 도구 활용 경험 보유',
        '현장 이슈에 대한 빠른 판단과 실행 중심의 문제 해결 역량 보유'
      ]
    }
  ];

  return (
    <section className="section about-section fade-in">
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
