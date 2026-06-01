import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

const Experience = () => {
  const [ref, isVisible] = useScrollReveal();
  const experiences = [
    {
      company: '김캐디',
      role: '리드 (운영팀)',
      period: '2025.06 – 2026.02 (9개월)',
      achievements: [
        '운영 자동화 기반 비용 최적화: IVR 기반 예약 자동화 도입을 통해 24시간 예약 체계 구축 및 연간 약 2억 원 운영 비용 절감',
        '고객·파트너 경험 개선: 오프라인 파트너(매장) VOC 분석 기반 예약 프로세스 개선 및 콜 응대율 10% → 80% 향상',
        '데이터 기반 문제 해결: 운영 데이터 분석을 통한 병목 구간 식별 및 개선 과제 도출',
        '운영 정책 및 프로세스 체계화: 신규 운영 정책 수립부터 시스템 적용까지 주도하며 운영 가이드라인 구축'
      ],
      roles: [
        '매장(파트너), 고객, 내부 조직 간 이슈 조율 및 정책 운영',
        '현장 VOC 구조화 및 데이터 기반 개선 과제 도출',
        '개발·PO·사업 조직 협업 기반 시스템 및 프로세스 개선',
        '운영 지표 대시보드 구축 및 모니터링 체계 운영'
      ],
      tools: '데이터 분석/시각화: SuperSet, Google Sheets | DBMS: Amazon Redshift | CS/CRM: 채널톡, 센터플로우'
    },
    {
      company: '중고나라',
      role: '매니저 (결제제휴사업팀)',
      period: '2022.03 – 2024.04 (2년 2개월)',
      achievements: [
        '데이터 기반 결제 퍼널 최적화: 거래 흐름(탐색–채팅–결제) 분석 및 병목 구간 개선을 통해 중고나라 페이 결제액 2.4배 성장 및 2023년 KPI 달성',
        '사용자 전환 구조 개선: 카페–앱 간 채팅 유도 구조 개선을 통해 고객–판매자 상호작용을 활성화하고 결제액 3.8백만 → 8.4억 증가',
        '카페–앱 연동 프로젝트: 사용자 유입 구조 개선을 통해 NRU 1.6배 증가, 상품 등록 수 2배 증가 및 KPI 140% 초과 달성',
        '리스크 탐지 정책 고도화: 사기 채팅 키워드 탐지 및 이상 징후 모니터링 적용을 통해 사기 피해 건수 60% 감소'
      ],
      roles: [
        '카페–앱–결제 전반의 사용자 흐름 분석 및 채팅 퍼널 내 병목 구간 정의',
        '노출 구조 및 유도 정책 개선을 통한 결제 전환율 최적화',
        '결제 이벤트 기획 및 성과 분석 기반 거래 활성화 전략 수립',
        '운영 데이터 및 로그 기반 모니터링 체계 구축 및 이슈 조기 탐지',
        '결제 및 운영 프로세스 자동화를 통한 업무 효율 및 대응 속도 개선'
      ],
      tools: '데이터 분석/시각화: Looker Studio, QuickSight | DBMS: MySQL, PostgreSQL, Amazon Redshift | CRM/분석 솔루션: GA4, AppsFlyer, Airbridge'
    },
    {
      company: '브랜즈컴퍼니(주)',
      role: '팀장 (마케팅기획)',
      period: '2021.05 – 2022.01 (9개월)',
      achievements: [
        '쿠팡 로켓배송 채널 총괄을 통해 월 평균 10% 이상의 매출 성장',
        '판매 데이터 기반 발주 전략 개선 및 재고 최적화를 통한 업무 효율 향상',
        '시장 수요 분석 기반 상품 라인업 37% 확장 및 안정적인 공급 체계 구축'
      ],
      roles: [
        '쿠팡 로켓배송 연계 입고·판매·재고 관리 및 채널 이슈 대응',
        '판매 데이터 분석 기반 수요 예측 및 발주 전략 수립',
        '신규 상품 판매성 검토 및 공급망 리스크 관리'
      ]
    },
    {
      company: '쿠팡(주)',
      role: 'L4 (Pricing Operation)',
      period: '2020.04 – 2020.08 (5개월)',
      achievements: [
        'KF·덴탈 마스크 가격 로직 설계를 통해 시장 이슈 상품에 대한 안정적인 가격 운영 체계 구축',
        '가격 비교 예외 케이스 분석 및 로직 개선을 통해 예외율 감소 및 가격 경쟁력 유지',
        '블랙셀러·화이트셀러 등 가격 비교 예외 기준 정립 및 운영 프로세스 체계화',
        'SQL 기반 데이터 추출 및 분석을 통해 운영 이슈 대응 및 업무 프로세스 효율 개선'
      ],
      roles: [
        '리테일 영업부서 프라이싱 채널 운영 및 가격 검수·조사 요청 대응',
        '카테고리별 가격 정책 설정·관리 및 운영 이슈 대응',
        'BM 및 Pricing Tech팀과 협업하여 가격 정책 및 운영 프로세스 개선'
      ]
    },
    {
      company: '(주)위메프',
      role: '사원 (판촉운영팀)',
      period: '2017.12 – 2020.03 (2년 4개월)',
      achievements: [
        '상위 20% TOP SKU 중심 상품 운영 전략을 통해 판촉 효율 및 ROI 개선',
        '가격 비교 기능 구축 프로젝트 참여를 통해 상품 노출 구조 및 구매 전환율 개선',
        '식품 카테고리 가격 경쟁력 강화를 통해 카테고리 1위 및 GMV·CM 목표 달성'
      ],
      roles: [
        '식품 카테고리 판매 데이터 분석 기반 상품 선정 및 운영 전략 수립',
        '가격 비교 채널(다나와·에누리·네이버쇼핑 등) 연계 상품 운영 및 가격 경쟁력 관리',
        '가격 비교 페이지 및 상품 노출 구조 개선을 통한 구매 전환율 최적화',
        '상품 성과 모니터링 기반 판촉 전략 수립 및 성과 개선'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className={`section experience-section reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
      <div className="experience-header">
        <h2 className="section-title">경력사항</h2>
        <span className="total-exp">총 경력 6년 5개월</span>
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
