import React from "react";
import "./WaitUpload.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  Clock,
  X,
  Search
} from "lucide-react";

const WaitUpload = () => {
  return (
    <div className="main-container-waiting">
      {/* --- Header Section --- */}
      <div className="waiting-header">
        <div className="header-left">
          <b className="title">Bài Đăng Chờ Duyệt</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>10</span> bài đăng chờ duyệt
          </p>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm theo tên, địa chỉ..." />
            <Search className="search-icon" size={16} />
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* --- Content Section --- */}
      <div className="waiting-content-wrapper">
        <div className="item-waiting">
          {/* Cột 1: Ảnh */}
          <div className="image-container">
            <img src={demo} alt="room-waiting" />
          </div>

          {/* Cột 2: Thông tin chi tiết */}
          <div className="info-container">
            <div className="info-title">
              <b>Phòng trọ sinh viên giá rẻ sốc</b>
            </div>
            
            <div className="info-address">
              <MapPin size={20} color="#e1a730" />
              <span>Phan Rang - Tháp Chàm, Ninh Thuận</span>
            </div>

            <div className="info-price">
              <b>3.600.000</b>
              <span className="currency">VND/ tháng</span>
            </div>

            <div className="info-stats">
              <div className="stat-item">
                <Eye color="#424242" size={22} />
                <span>1,234</span>
              </div>
              <div className="stat-item">
                <CalendarDays color="#424242" size={20} />
                <span>12/12/2026</span>
              </div>
            </div>
          </div>

          {/* Cột 3: Các nút hành động */}
          <div className="action-container">
            <button className="btn-action btn-detail">
              <Eye size={18} />
              <span>Xem chi tiết</span>
            </button>

            <button className="btn-action btn-repost">
              <Clock size={17} />
              <span>Đăng lại</span>
            </button>

            <button className="btn-action btn-cancel">
              <X size={18} />
              <span>Hủy yêu cầu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitUpload;