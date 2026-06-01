import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Header.css';

const Header = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <header className="header section" ref={ref}>
      <div className="container">
        <div className={`header-content reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
          <div className="header-info">
            <h1 className="name">하윤택</h1>
            <p className="role">Business Operations 매니저</p>
            
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
                저는 커머스, 중고거래, O2O 플랫폼에서 운영 과정에서 발생하는 문제를 데이터 기반으로 분석하고, 프로세스 개선과 자동화를 통해 지속 가능한 운영 구조를 만들어온 운영 전문가입니다.
              </p>
              <p>
                운영·결제·예약 영역의 다양한 문제를 해결하며 서비스 성과와 운영 효율을 개선해왔으며, 단순히 발생한 이슈를 대응하는 데 그치지 않고 문제의 원인을 파악하고 구조적으로 해결하는 데 집중해왔습니다.
              </p>
              <p>
                중고나라에서는 결제 퍼널 분석을 통해 주요 이탈 구간을 개선하여 결제액을 2배 이상 성장시켰고, 김캐디에서는 인력 중심의 예약 운영 프로세스를 IVR 기반 자동화 체계로 전환하여 24시간 운영 환경을 구축하고 연간 약 2억 원의 운영 비용을 절감했습니다. 또한 운영 지표와 대시보드를 구축하여 개선 결과를 지속적으로 추적하고 의사결정에 활용할 수 있는 체계를 만들었습니다.
              </p>
              <p>
                SQL 기반 데이터 분석을 통해 문제를 발견하고 가설을 검증하며, 개발·PO·사업 조직과 협업하여 실제 서비스에 적용 가능한 개선안을 실행해왔습니다. 앞으로도 데이터로 문제의 근본 원인을 파악하고 반복되는 비효율을 구조적으로 개선하여, 지속 가능한 운영 체계와 성과를 만드는 데 기여하고 싶습니다.
              </p>
            </div>

            <div className="action-buttons">
              <a href="/resume_yuntaekha.pdf" download="하윤택_이력서.pdf" className="btn btn-primary">
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
