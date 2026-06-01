import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Motivation.css';

const Motivation = () => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section id="motivation" ref={ref} className={`section motivation-section reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <h2 className="section-title">지원 동기</h2>
      
      <div className="motivation-card">
        <h3 className="motivation-subtitle">
          <span className="quote-mark">“</span>
          기술과 데이터로 운영 구조를 혁신하는 방향성에 공감했습니다
        </h3>
        <p>
          쏘카는 단순한 차량 공유 서비스를 넘어 기술과 데이터를 기반으로 이동 경험을 혁신하고, 운영 효율과 사용자 경험을 지속적으로 개선해 나가는 기업이라고 생각합니다. 특히 공급, 운영, 비용 구조를 데이터 기반으로 관리하며 더 나은 이동 경험을 만들어가는 방식이 인상 깊었습니다.
        </p>
        <p>
          사업관리팀 공고를 보며 가장 공감했던 부분은 정해진 업무 범위보다 사업 전반의 문제를 발견하고 해결하는 역할에 집중한다는 점이었습니다. 문제를 찾고, 데이터를 통해 원인을 확인하고, 실행과 운영 체계 구축까지 연결하는 과정은 제가 다양한 회사에서 일하며 가장 중요하게 생각해온 업무 방식이기도 합니다.
        </p>
        <p>
          저는 커머스, 중고거래, O2O 플랫폼에서 결제, 운영, 예약, 정산, 고객 경험 등 다양한 영역의 문제를 해결해왔습니다. 하나의 기능이나 업무에 국한되지 않고 서비스 성장에 필요한 과제를 직접 발굴하고, 데이터 분석을 통해 원인을 파악한 뒤 실행과 개선까지 연결하는 경험을 쌓아왔습니다. 이러한 경험은 사업 전반을 넓게 바라보며 다양한 문제를 해결해야 하는 사업관리팀의 역할과 맞닿아 있다고 생각합니다.
        </p>
        <p>
          새로운 문제를 빠르게 이해하고 구조화하는 강점과 다양한 프로젝트 경험을 바탕으로, 쏘카에서도 사업 전반의 다양한 과제를 데이터 기반으로 해결하고, 지속 가능한 운영 체계와 성과를 만드는 데 기여하고 싶습니다.
        </p>
      </div>
    </section>
  );
};

export default Motivation;
