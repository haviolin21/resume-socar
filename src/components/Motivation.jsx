import React from 'react';
import './Motivation.css';

const Motivation = () => {
  return (
    <section className="section motivation-section fade-in">
      <h2 className="section-title">지원 동기</h2>
      
      <div className="motivation-card">
        <h3 className="motivation-subtitle">
          <span className="quote-mark">“</span>
          기술과 데이터로 이동 경험의 구조를 바꾸는 방향성에 공감했습니다
        </h3>
        <p>
          저는 기술과 데이터가 실제 현장의 운영 문제를 해결할 때 서비스의 진정한 확장이 이루어진다고 생각합니다. 
          쏘카는 단순한 차량 공유 서비스를 넘어, "모든 사람이 자유롭고 행복하게 이동하는 세상"이라는 미션 아래 
          이용자 중심으로 이동 경험 자체를 혁신해 나가고 있다고 느꼈습니다.
        </p>
        <p>
          특히 최근 자율주행 법인 ‘에이펙스 모빌리티’를 설립하며 카셰어링을 넘어 자율주행 기반 모빌리티로 
          확장해 나가는 방향이 인상 깊었습니다. 단순히 기술을 도입하는 것이 아니라, 오랜 기간 축적한 운영 데이터와 
          실제 이용자 경험을 기반으로 미래 모빌리티를 준비하고 있다는 점에서 쏘카가 지향하는 방향성과 맞닿아 있다고 느꼈습니다.
        </p>
      </div>

      <div className="motivation-card">
        <h3 className="motivation-subtitle">
          <span className="quote-mark">“</span>
          데이터와 운영을 연결해 안정적인 이동 경험을 만들고 싶습니다
        </h3>
        <p>
          그동안 커머스 및 O2O 플랫폼 환경에서 운영 과정에서 발생하는 병목과 비효율을 분석하고, 
          이를 실제 운영 정책과 시스템 개선으로 연결해 왔습니다. 또한 다양한 현장 이슈와 운영 변수를 
          구조적으로 관리하며 서비스 안정성과 운영 효율을 높이는 경험을 쌓아왔습니다.
        </p>
        <p>
          이러한 경험을 바탕으로 쏘카에서도 이용자 중심 관점에서 운영 과정의 불편과 비효율을 지속적으로 개선하고, 
          데이터 기반 의사결정을 통해 더 안정적이고 효율적인 이동 경험을 만드는 데 기여하고 싶습니다.
        </p>
      </div>
    </section>
  );
};

export default Motivation;
