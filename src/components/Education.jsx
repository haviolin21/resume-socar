import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="section education-section fade-in">
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
            <h4 className="edu-title">Software Engineering</h4>
            <span className="edu-period">2020.12 ~ 2021.04</span>
          </div>
          <p className="edu-details">코드스테이츠(Code States)</p>
          <ul className="edu-desc">
            <li>웹 서비스 구조 및 데이터베이스 설계 기초 학습</li>
            <li>API 및 서버–클라이언트 구조 이해</li>
            <li>Git 기반 협업 및 팀 프로젝트 수행</li>
            <li>개발 조직과의 협업을 위한 기술 커뮤니케이션 역량 확보</li>
          </ul>
        </div>

        <div className="edu-item">
          <div className="edu-header">
            <h4 className="edu-title">빅데이터 분석</h4>
            <span className="edu-period">2025.02 ~ 2025.03</span>
          </div>
          <p className="edu-details">코드잇(Codeit)</p>
          <ul className="edu-desc">
            <li>Python(Pandas) 기반 데이터 전처리 및 EDA 수행</li>
            <li>Matplotlib 기반 데이터 시각화 및 분석 학습</li>
            <li>데이터 기반 가설 검증 및 운영 개선 리포트 작성 경험</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
