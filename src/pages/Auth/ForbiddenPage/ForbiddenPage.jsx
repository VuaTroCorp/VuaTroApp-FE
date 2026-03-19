import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ChevronLeft, Headphones } from 'lucide-react';
import './ForbiddenPage.scss';

const ForbiddenPage = () => {
  const navigate = useNavigate();

  return (
    <div className="forbidden-page">
      {/* Background Orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="content-wrapper">
        {/* Robot Illustration Area */}
        <div className="illustration-container">
          <div className="robot-floating floating">
            <div className="robot-body">
              {/* Robot Face */}
              <div className="robot-face">
                <div className="eye"></div>
                <div className="eye"></div>
                <div className="blush left"></div>
                <div className="blush right"></div>
              </div>

              {/* Status Lights */}
              <div className="status-lights">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>

              {/* Chat Bubble */}
              <div className="chat-bubble">
                <p>"Hic! Chỗ này riêng tư lắm, tôi không cho qua được đâu..."</p>
                <div className="arrow"></div>
              </div>

              {/* Error Badge - Dùng Lucide ShieldAlert */}
              <div className="error-badge">
                <ShieldAlert size={32} strokeWidth={3} className="icon-alert" />
                <span className="badge-text">403: Khu Vực Hạn Chế</span>
              </div>
            </div>

            {/* Robot Details */}
            <div className="arm left"></div>
            <div className="arm right"></div>
            <div className="antenna">
              <div className="line"></div>
              <div className="tip"></div>
            </div>
          </div>
          
          {/* Decorative Rings */}
          <div className="ring ring-inner"></div>
          <div className="ring ring-outer"></div>
        </div>

        {/* Text Content */}
        <div className="text-section">
          <h1 className="title">Úi chà! Bạn đi lạc rồi.</h1>
          <p className="description">
            Chú robot bảo vệ của chúng tôi đang làm nhiệm vụ và hiện tại trang này đang bị khóa. 
            Đừng lo lắng, hãy để chú ấy hướng dẫn bạn quay lại con đường cũ nhé!
          </p>
        </div>

        <div className="action-group">
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            <ChevronLeft size={20} className="icon-btn" />
            Quay lại trang chủ
          </button>
          
          <button className="btn btn-secondary">
            <Headphones size={20} className="icon-btn" />
            Cần trợ giúp?
          </button>
        </div>

        <div className="footer-info">
          <p>Lỗi 403 - Quyền truy cập bị từ chối</p>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;