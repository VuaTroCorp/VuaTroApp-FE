import React from "react";
import "./LogOut.scss";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clearAuth } from "../../lib/auth";

const Logout = ({ setShowLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="logout-overlay">
      <div className="logout-modal modal-animation">
        {/* Phần nội dung phía trên */}
        <div className="modal-content">
          <div className="icon-wrapper">
            <LogOut color="#8C161F" />
          </div>
          <div className="modal-title">
            Xác nhận đăng xuất
          </div>
          <div className="modal-description">
            Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không? Các phiên làm
            việc hiện tại sẽ bị kết thúc.
          </div>
        </div>

        <hr className="modal-divider" />

        {/* Phần nút bấm phía dưới */}
        <div className="modal-footer">
          <button
            className="button-logout btn-cancel"
            onClick={() => setShowLogout(false)}
          >
            Hủy
          </button>

          <button
            className="button-logout btn-confirm"
            onClick={() => {
              navigate("/login");
              clearAuth();
              setShowLogout(false);
            }}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;