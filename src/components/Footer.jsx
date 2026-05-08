import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-notice">
          본 이력서에 기재된 사항은 모두 사실과 다름없음을 확인합니다.
        </p>
        <p className="footer-copyright">
          &copy; 2026 HA YUNTAEK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
