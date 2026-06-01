import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, isVisible] = useScrollReveal();

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const projects = [
    {
      period: '25.07.29 ~ 25.09.21',
      title: '예약 담당자 IVR 대체',
      summary: [
        '미운영 시간대 예약 성공률 50% → 70%로 개선',
        '인건비 연 약 2억 원 → 월 200만 원 수준으로 대폭 절감',
        '예약 성공률·운영 시간대별 성과 지표 대시보드 구축'
      ],
      details: {
        problem: '예약 담당자 미운영 시간대에는 전화 예약 대응이 불가하여, 고객 예약 실패·매출 손실·운영 리소스 비효율이 동시에 발생하는 문제 확인',
        hypothesis: 'IVR 기반 예약 프로세스를 도입하면 24시간 예약 커버가 가능해지고, 운영 비용 절감과 함께 예약 성공률 및 플랫폼 운영 효율이 개선될 것이라는 가설 설정',
        action: '미운영 시간대 예약 성공률 분석, IVR 통화 방식에 대한 사용자 거부감 사전 조사, 도입 전·후 예약 성과 및 운영 비용 비교를 통한 효과 검증',
        result: '미운영 시간대 예약 성공률 50% → 70%로 개선, 인건비 연 약 2억 원 → 월 200만 원 수준(IVR 통화료)으로 운영 비용 대폭 절감',
        contribution: '예약 성공률·운영 시간대별 성과 지표 대시보드 구축, 예약 담당자 운영 기여도 및 결제 영향 분석, IVR 도입 효과에 대한 비용·효율성 검증을 통해 운영 자동화 체계 구축에 기여',
        story: [
          "기존 프리랜서 형태의 '예약 담당자' 전화 응대 구조는 새벽 시간대 예약 실패, 근무자 이탈 리스크, 높은 비용 부담 등 플랫폼 운영의 큰 비효율을 낳고 있었습니다. 실제 데이터를 분석한 결과 담당자들의 거래액 기여도는 1% 미만이었던 반면, 미운영 시간대 예약의 약 50%가 실패하고 있음을 확인하여 IVR 기반의 24시간 자동화 프로세스로의 전환 가설을 수립했습니다.",
          "매장 이탈과 매출 하락에 대한 내부 우려를 정량적 분석과 파일럿 테스트 인터뷰를 통해 설득하며 해소하였습니다. 배포 시에는 리스크를 예방하기 위해 주 단위 점진적 배포 전략을 적용하였고, '수락/거절' 시나리오 설계 중 발견한 잘못된 예약 확정 리스크(오작동 복구 불가)를 보완하기 위해 이중 확인 절차를 추가하여 시나리오의 안정성을 확보했습니다.",
          "도입 과정에서 발생한 일부 매장 내 IVR 미동작 이슈를 해결하기 위해 내부 시스템 로그 점검, 매장 개별 환경 정보 수집 및 현장 방문 테스트를 병행하며 원인이 외부 솔루션사 서버 처리 과정에 있음을 특정하고 함께 안정화했습니다. 또한 솔루션사 작업 중단으로 인한 일시적인 공백 상황에서도 운영팀의 대체 대응 체계를 마련해 예약 누락을 성공적으로 방어했습니다.",
          "최종 배포 및 안정화 결과, 미운영 시간대 예약 성공률이 50%에서 70%로 향상되었고, 연 2억 원의 인건비를 월 200만 원 수준으로 최적화하여 99%의 비용을 절감했습니다. 프로젝트를 통해 기획부터 시나리오 설계, 개발 협업, 파일럿 검증 및 성과 분석까지 End-to-End로 리딩하며, 예외 상황에 대처하고 비즈니스 운영 구조를 자동화로 끝까지 완결시키는 역량을 키웠습니다."
        ]
      }
    },
    {
      period: '23.04.07 ~ 23.12.31',
      title: '중고나라 페이 결제 2배 증가',
      summary: [
        '결제액 2.4배 상승 및 2023년 최고 결제액 달성',
        '결제 퍼널(탐색-채팅-결제) 이탈률 분석 및 카페 채팅 유도 기능 개발',
        '상위 거래자 세그먼트 추출 및 VIP 관리로 거래액 20% 상승 효과'
      ],
      details: {
        problem: '결제액 저조 문제 해결을 위해 사용자 행동 데이터를 분석하여 결제 퍼널의 이탈률 개선 필요 확인',
        hypothesis: '결제 퍼널 중 이탈률이 발생하는 구간을 개선하고, 세그먼트 분석 및 이벤트 실행이 결제액 상승에 기여할 것이라는 가설 설정',
        action: 'SQL을 활용한 결제 퍼널 분석 및 이탈률 개선, 세그먼트 분석 및 타겟팅 이벤트 실행',
        result: '결제액 2.4배 상승, 2023년 최고 결제액 달성',
        contribution: '대시보드 생성, 퍼널 분석, 이탈률 개선, 이벤트 기획 및 타당성 분석, 상위 결제자 관리',
        story: [
          "2023년 중고나라 페이 결제액 상승 목표 달성을 위해 결제제휴사업팀이 신설되었습니다. 저는 본 목적 조직 내에서 데이터 분석, 대시보드 구축 및 데일리 푸시 효율 분석, 타겟 고객 분류 등 운영 기획 및 데이터 분석 업무를 주도했습니다.",
          "결제 퍼널 데이터를 세분화하여 분석한 결과, 판매자가 앱 내 크롤링 된 카페 상품에 대한 채팅 응답을 제때 확인하지 않아 채팅 구간에서 가장 많은 이탈이 발생함을 발견했습니다. 이를 해결하고자 채팅 발생 시 판매자의 카페 게시글에 자동 댓글을 남겨 앱 유입을 유도하는 '카페 채팅 앱 유도' 기능을 구현하여 이탈을 최소화했습니다.",
          "거래 기여도가 높은 핵심 거래자 상위 10%(약 300명)를 SQL로 추출하여 밀착 관리(빠른 정산, 리워드 혜택)를 적용해 해당 그룹의 거래액을 20% 상승시켰습니다. 또한 결제 효율을 분석하여 결제가 가장 저조한 시간대를 타겟으로 수수료를 감면해주는 '중요일' 이벤트를 기획하여 결제 감소를 방지하고 복귀를 이끌어냈습니다.",
          "23년 12월 이벤트 기준 역대 최고 결제액을 달성했으며, 연간 결제액 2.4배 성장을 견인하며 팀 KPI를 달성했습니다. SQL 분석을 통한 퍼널 개선, VIP 타겟 세그먼트 관리, 타당성 분석에 기반한 이벤트 기획 등 데이터 기반 비즈니스 운영 프로세스를 리딩한 경험입니다."
        ]
      }
    },
    {
      period: '22.03.15 ~ 22.12.31',
      title: '중고나라 카페-앱 연동',
      summary: [
        '회원수 1.6배 증가, 상품 등록수 2배 증가',
        '1,900만 카페 회원 대비 앱 활성화(MAU 증대)',
        '효율적인 유도 프로세스 및 상품 등록 게임화 이벤트 연계'
      ],
      details: {
        problem: '중고나라 앱 활성화 및 MAU 증대를 위해 회원수 및 상품 등록수 증가 필요성 확인',
        hypothesis: '네이버 카페(중고나라)와 중고나라 앱의 연동을 통해, 기존 카페 회원의 앱 유입 증가 및 상품 등록 활성화가 가능할 것이라는 가설 설정',
        action: 'LTV 분석, 회원 활동 지표 추출, 카페-앱 연동 기능 개발, 회원수 및 상품 등록수 모니터링을 통해 효율성 검증',
        result: '회원수 1.6배 증가, 상품 등록수 2배 증가, LTV 상승 및 회원 활동 지표 개선',
        contribution: '카페to앱 연동 기획, 데이터 분석 및 수치 증대, 연동 신청 기능 자동화, 이벤트 기획&실행',
        story: [
          "1,900만 회원 규모의 네이버 카페 인프라를 활용해 저비용 고효율의 앱 MAU 성장을 기획했습니다. 기존의 비효율적인 수기 연동 프로세스를 개선하고자 연동 신청 페이지 자동화를 기획해 도입하고, 시스템 구축 전 구글 폼을 이용한 수기 모객 효율도 프로세스 최적화를 통해 리스크를 차단했습니다.",
          "연동 모객을 부스팅하기 위해 사전 사용자 반응 조사를 실시하여 '스타벅스 커피 리워드' 이벤트를 기획했습니다. 이를 통해 일평균 70명에 불과하던 가입 연동 수가 일 900명대로 급증하였고, 연동된 회원의 활동 지표가 일반 회원 대비 20% 높음을 LTV 및 이탈률 분석으로 검증하여 비즈니스 가치를 입증했습니다.",
          "유입 유저의 잔존률과 상품 등록 수를 증대시키기 위해 단계적 마일리지 이벤트를 설계했습니다. 단순 적립에서 '구간별 마일리지 획득 참여형 게임 구조'로 전환 기획한 결과, 연동 회원의 일평균 상품 등록 수가 5,500건에서 10,400건으로 2배 증가하였고 앱 전체 등록 상품의 60%를 연동 회원이 차지하며 플랫폼 내 핵심 상품 공급 채널로 안착시켰습니다.",
          "결과적으로 회원수 1.6배 및 상품 등록수 2배 증가를 달성했습니다. 플랫폼 간의 유기적인 연동 전략을 수립하고, 정량적인 성과 측정과 게임화 설계를 결합하여 서비스의 유기적 성장을 입증해 낸 비즈니스 운영 기획 경험입니다."
        ]
      }
    }
  ];

  return (
    <section id="projects" ref={ref} className={`section projects-section reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-header">
              <span className="project-period">{project.period}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <ul className="project-summary-list">
              {project.summary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="project-card-footer">
              <button className="view-details-btn" onClick={() => setSelectedProject(project)}>
                자세히 보기 &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && createPortal(
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-header">
              <span className="modal-period">{selectedProject.period}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
            </div>
            
            <div className="modal-body">
              <div className="modal-section-group">
                <h4>문제 정의 및 실행 결과</h4>
                
                <div className="modal-subsection">
                  <h5 className="label problem">문제 정의</h5>
                  <p>{selectedProject.details.problem}</p>
                </div>
                
                <div className="modal-subsection">
                  <h5 className="label hypothesis">가설 설정</h5>
                  <p>{selectedProject.details.hypothesis}</p>
                </div>
                
                <div className="modal-subsection">
                  <h5 className="label validation">실험 설계 및 검증</h5>
                  <p>{selectedProject.details.action}</p>
                </div>
                
                <div className="modal-subsection">
                  <h5 className="label result">결과</h5>
                  <p>{selectedProject.details.result}</p>
                </div>

                <div className="modal-subsection">
                  <h5 className="label contribution">기여 내용</h5>
                  <p>{selectedProject.details.contribution}</p>
                </div>
              </div>

              <div className="modal-section story-section">
                <h4>상세 내용</h4>
                {selectedProject.details.story.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Projects;
