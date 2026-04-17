import React, { useEffect } from "react";
import "./LogoutModal.scss";
import { LogOut } from "lucide-react";
import { clearAuth } from "lib/auth";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ setShowLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal-content modal-animation">
        
        <div className="modal-header">
          <div className="icon-wrapper">
            <LogOut color="#8C161F" size={28} />
          </div>
          <div className="modal-title">Xác nhận đăng xuất</div>
          <div className="modal-desc">
            Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không? Các phiên làm
            việc hiện tại sẽ bị kết thúc.
          </div>
        </div>

        <hr className="modal-divider" />
        
        <div className="modal-actions">
          <button
            className="btn-cancel"
            onClick={() => setShowLogout(false)}
          >
            Hủy
          </button>

          <button
            className="btn-confirm"
            onClick={() => {
              clearAuth();
              navigate("/");
              setShowLogout(false);
              window.location.href = "/";
            }}
          >
            Đăng xuất
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default LogoutModal;