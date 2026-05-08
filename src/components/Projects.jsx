import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: '예약 IVR 자동화 구축 (연간 운영비 2억 절감)',
      period: '25.07.29 ~ 25.09.21',
      problem: [
        '예약 담당자가 근무하지 않는 시간대에는 전화 예약 대응이 불가능해 예약 실패로 인해 실제 거래(결제)로 이어지지 않는 구조적 문제가 발생하고 있었습니다.',
        '또한 프리랜서 인력 중심 운영으로 인해 지속적인 비용 부담과 운영 리스크가 존재했습니다.'
      ],
      action: [
        '예약 담당자 운영 데이터를 분석한 결과, 해당 업무가 전체 결제액에서 차지하는 비중이 1% 미만임을 확인했습니다. 이를 기반으로 전화 예약 운영을 IVR 기반 자동화 구조로 전환하는 방안을 설계했습니다.',
        'IVR 예약 수락·거절 시나리오를 설계하고 파일럿 테스트 및 매장 인터뷰를 통해 사용자 반응을 검증했으며, 개발팀과 협업하여 IVR 시스템을 도입했습니다.',
        '또한 예약 성공률 및 운영 비용을 비교 분석할 수 있는 운영 대시보드를 구축했습니다.'
      ],
      result: [
        '미운영 시간대 예약 성공률 50% → 70% 개선',
        '연간 약 2억 원 인건비를 월 약 200만 원 수준의 IVR 비용 구조로 전환',
        '24시간 예약 대응 체계 구축 및 운영 리스크 감소',
        '예약 증가를 통한 전체 거래(결제) 성과 개선 기여'
      ]
    },
    {
      title: '퍼널 개선을 통한 중고나라 페이 결제액 2.4배 성장',
      period: '23.04.07 ~ 23.12.31',
      problem: [
        '중고나라 페이 결제액이 정체되고 있어 사용자 행동 데이터를 기반으로 결제 퍼널 내 이탈 구간을 분석하고 개선할 필요가 있었습니다.'
      ],
      action: [
        'SQL 기반으로 결제 퍼널(탐색–채팅–결제)을 분석한 결과, 채팅 단계에서 높은 이탈이 발생하고 있음을 확인했습니다. 특히 카페에서 크롤링된 상품의 경우 판매자가 앱 채팅을 확인하지 못해 거래가 중단되는 문제가 있었습니다.',
        '이를 해결하기 위해 카페 게시글 내 자동 댓글 기능을 도입하여 판매자의 앱 채팅 유입을 유도했으며, 개발팀과 협업하여 해당 기능을 구현했습니다.',
        '또한 거래액 상위 10%의 핵심 판매자·구매자 약 300명을 세그먼트로 관리하며 리워드 정책 및 운영 지원을 제공했습니다.'
      ],
      result: [
        '2023년 최고 결제액 달성 및 KPI 목표 초과 달성',
        '중고나라 페이 결제액 2.4배 성장',
        '상위 거래자 거래액 약 20% 증가'
      ]
    },
    {
      title: '카페–앱 연동 전략 구축 (회원 1.6배 성장)',
      period: '22.03.15 ~ 22.12.31',
      problem: [
        '중고나라 앱의 MAU 및 상품 등록 수 확대를 위해, 약 1,900만 명 규모의 네이버 카페 회원을 앱 사용자로 전환할 전략이 필요했습니다.'
      ],
      action: [
        '카페 회원의 앱 전환이 서비스 활성화에 기여할 것이라는 가설을 기반으로 카페–앱 계정 연동 기능을 기획했습니다.',
        '초기에는 Google Forms 기반으로 연동 신청 프로세스를 운영하며 사용자 흐름을 검증했고, 이후 개발팀과 협업하여 연동 신청 시스템을 구축 및 자동화했습니다.',
        '또한 연동 회원 증가 → 상품 등록 증가 → 결제 증가로 이어지는 단계별 이벤트를 설계하여 사용자 행동을 유도하고 서비스 활성화를 강화했습니다.'
      ],
      result: [
        '회원 수 1.6배 증가',
        '상품 등록 수 2배 증가',
        '연동 회원의 활동 지표 일반 회원 대비 약 20% 높게 발생',
        '기존 사용자 기반을 활용한 저비용 성장 구조 확보'
      ]
    }
  ];

  return (
    <section className="section projects-section fade-in">
      <h2 className="section-title">프로젝트</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            
            <div className="project-content">
              <div className="project-section">
                <h4 className="label problem">문제 정의</h4>
                {project.problem.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
              
              <div className="project-section">
                <h4 className="label action">실행</h4>
                {project.action.map((p, idx) => <p key={idx}>{p}</p>)}
              </div>
              
              <div className="project-section">
                <h4 className="label result">결과</h4>
                <ul className="result-list">
                  {project.result.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
