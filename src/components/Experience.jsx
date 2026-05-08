import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: '김캐디',
      role: '리드 (운영팀)',
      period: '2025.06 – 2026.02 (9개월)',
      achievements: [
        '운영 자동화 기반 비용 최적화: IVR 기반 예약 자동화 도입을 통해 24시간 운영 체계 구축 및 연간 약 2억 원 운영 비용 절감',
        '현장 운영 프로세스 개선: 오프라인 파트너(매장) VOC 분석 기반 운영 프로세스 개선 및 콜 응대율 10% → 80% 향상',
        '데이터 기반 운영 개선: 운영 데이터 분석을 통한 병목 구간 및 개선 과제 정의로 운영 리소스 절감 및 고객 경험 개선',
        '운영 표준화 리딩: 신규 운영 정책 및 프로세스 수립부터 시스템 적용까지 주도하며 운영 가이드라인 구축'
      ],
      roles: [
        '매장(파트너), 고객, 내부 조직 간 운영 이슈 조율 및 정책 대응',
        '현장 VOC 구조화 및 데이터 기반 운영 개선 과제 도출',
        '운영·개발·제품 조직 협업 기반 시스템 및 프로세스 개선',
        '운영 지표 대시보드 구축 및 실시간 모니터링 체계 운영'
      ],
      tools: 'SuperSet, Google Sheets, Amazon Redshift, 채널톡, 센터플로우'
    },
    {
      company: '중고나라',
      role: '매니저 (결제제휴사업팀)',
      period: '2022.03 – 2024.04 (2년 2개월)',
      achievements: [
        '데이터 기반 결제 퍼널 최적화: 유저 행동 데이터(탐색–채팅–결제) 분석 기반 병목 구간 개선 및 세그먼트 전략 수립을 통해 중고나라 페이 결제액 2.4배 성장',
        '플랫폼 간 운영 구조 개선: 카페–앱 간 채팅 흐름 최적화를 통해 결제액 증대 및 NRU 1.6배 증가, 상품 등록 수 2배 증가',
        '리스크 탐지 및 운영 정책 고도화: 사기 의심 채팅 키워드 탐지 및 이상 징후 모니터링 적용을 통해 사기 피해 건수 60% 감소',
        '운영 프로세스 자동화: 결제 모니터링 및 대응 프로세스 자동화를 통한 운영 효율 및 이슈 대응 속도 개선'
      ],
      roles: [
        '카페, 앱, 결제 시스템 연계 운영 프로세스 설계 및 제휴 관리',
        '사용자 행동 데이터 분석 기반 전환 병목 구간 정의 및 개선 과제 도출',
        '고객–판매자 간 커뮤니케이션 흐름 분석 기반 이탈 방지 구조 개선',
        '서비스 운영 이슈 모니터링 및 데이터 기반 운영 안정성 개선'
      ],
      tools: 'Looker Studio, QuickSight, MySQL, PostgreSQL, Amazon Redshift, GA4, AppsFlyer, Airbridge'
    },
    {
      company: '브랜즈컴퍼니(주)',
      role: '팀장 (마케팅기획)',
      period: '2021.05 – 2022.01 (9개월)',
      achievements: [
        '쿠팡 로켓배송 채널 운영 총괄을 통해 월 평균 10% 이상의 매출 성장',
        '판매 데이터 기반 발주 전략 개선 및 재고 운영 최적화를 통한 운영 효율 향상',
        '시장 수요 및 운영 역량을 고려한 상품 라인업 37% 확장 및 안정적인 채널 운영 체계 구축'
      ],
      roles: [
        '쿠팡 로켓배송 연계 입고·판매·재고 관리 등 채널 운영 프로세스 관리 및 이슈 대응',
        '판매 데이터 분석 기반 수요 예측 및 재고 운영 전략 수립',
        '신규 상품 운영 리스크 검토 및 안정적인 공급망 운영 프로세스 구축'
      ]
    },
    {
      company: '쿠팡(주)',
      role: 'L4 (Pricing Operation)',
      period: '2020.04 – 2020.08 (5개월)',
      achievements: [
        '마스크 등 수급 불안정 상품 대상 가격 정책 운영 및 시장 상황 기반 가격 안정성 관리',
        '가격 비교 예외 케이스 대응 및 로직 개선을 통한 예외율 감소 및 운영 안정성 향상',
        '블랙셀러/화이트셀러 대응 기준 정립을 통한 가격 정책 운영 일관성 확보',
        'SQL 기반 운영 데이터 분석을 통한 업무 프로세스 효율 개선'
      ],
      roles: [
        '시장 가격 모니터링 및 카테고리별 가격 이슈 대응',
        'BM 및 유관 부서 협업 기반 가격 정책 운영 지원',
        '가격 검수 및 예외 케이스 대응 프로세스 운영'
      ]
    },
    {
      company: '(주)위메프',
      role: '사원 (판촉운영팀)',
      period: '2017.12 – 2020.03 (2년 4개월)',
      achievements: [
        '상위 20% TOP SKU 중심 판촉 전략 운영을 통한 운영 효율 및 ROI 개선',
        '가격 비교 시스템 구축 프로젝트 참여를 통한 상품 노출 및 구매 전환 개선',
        '식품 카테고리 판촉 운영 기반 GMV 및 운영 효율 향상 기여'
      ],
      roles: [
        '식품 카테고리 판촉 운영 및 성과 분석',
        '판매 데이터 기반 판촉 상품 선정 및 운영 전략 실행',
        '가격 비교 페이지 노출 구조 개선 및 운영 관리'
      ]
    }
  ];

  return (
    <section className="section experience-section fade-in">
      <div className="experience-header">
        <h2 className="section-title">경력사항</h2>
        <span className="total-exp">총 경력 7년</span>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="exp-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="exp-role">{exp.role}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              
              <div className="exp-details">
                <div className="detail-group">
                  <h4>주요 성과</h4>
                  <ul>
                    {exp.achievements.map((item, idx) => (
                      <li key={idx}>
                        <span className="highlight-text">{item.split(':')[0]}</span>
                        {item.includes(':') && `:${item.split(':')[1]}`}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="detail-group">
                  <h4>주요 역할</h4>
                  <ul>
                    {exp.roles.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {exp.tools && (
                  <div className="detail-group tools-group">
                    <h4>사용 툴</h4>
                    <p>{exp.tools}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
