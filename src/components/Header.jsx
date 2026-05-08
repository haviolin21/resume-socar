import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header section">
      <div className="container">
        <div className="header-content fade-in">
          <div className="header-info">
            <h1 className="name">하윤택</h1>
            <p className="role">운영 전문가</p>
            
            <div className="contact-info">
              <a href="tel:010-4795-3330" className="contact-item">
                📞 010-4795-3330
              </a>
              <a href="mailto:yuntaek.ha@gmail.com" className="contact-item">
                ✉️ yuntaek.ha@gmail.com
              </a>
            </div>

            <div className="summary">
              <p>
                저는 온·오프라인이 결합된 플랫폼 환경에서 운영 과정에서 발생하는 문제를 데이터 기반으로 분석하고, 
                운영 구조와 프로세스를 개선해 서비스 안정성과 운영 효율을 높여온 운영 기획 담당자입니다.
              </p>
              <p>
                커머스 및 O2O 플랫폼에서 고객, 오프라인 파트너(매장), 내부 조직 간의 다양한 운영 이슈를 해결하며 
                운영 비용 절감, 전환율 개선, 서비스 품질 향상을 만들어 왔습니다. 특히 인력 중심으로 운영되던 예약 프로세스를 
                IVR 기반 자동화 구조로 전환하여 24시간 운영 체계를 구축하고, 연간 약 2억 원의 운영 비용 절감과 예약 성공률 개선을 이끌었습니다.
              </p>
              <p>
                또한 SQL 기반 데이터 분석과 운영 지표 설계를 통해 운영 병목과 비효율을 개선해 왔으며, 
                운영·개발·사업 조직과의 협업을 통해 실제 현장에 적용 가능한 운영 정책과 시스템 개선을 수행해왔습니다.
              </p>
              <p>
                앞으로도 데이터와 운영을 연결하는 관점으로 현장 운영 과정에서 발생하는 다양한 문제를 해결하고, 
                고객 경험과 운영 효율을 함께 개선하는 역할을 수행하고 싶습니다.
              </p>
            </div>

            <div className="action-buttons">
              <a href="/resume_yuntaek.pdf" download="하윤택_이력서.pdf" className="btn btn-primary">
                📄 이력서 다운로드
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
