import React from "react";
import "./CancelUpload.scss";
import demo from "assets/images/demo.jpg";
import { 
  MapPin, 
  Eye, 
  CalendarDays, 
  Pencil, 
  Trash2, 
  CircleAlert, 
  Search 
} from "lucide-react";

const CancelUpload = () => {
  return (
    <div className="main-container-cancel-manage">
      {/* --- Header Section --- */}
      <div className="cancel-manage-header">
        <div className="header-left">
          <b className="title">Bài Đăng Bị Từ Chối</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>10</span> bài đăng bị từ chối
          </p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên, địa chỉ..."
            />
            <Search className="search-icon" size={16} />
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* --- Content Section --- */}
      <div className="cancel-content-wrapper">
        <div className="item-cancel">
          {/* Cột 1: Ảnh */}
          <div className="image-container">
            <img src={demo} alt="room-rejected" />
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

          {/* Cột 3: Lý do từ chối & Hành động */}
          <div className="action-container">
            {/* Box thông báo lỗi */}
            <div className="error-alert-box">
              <div className="alert-icon">
                <CircleAlert color="#8C161F" size={20} />
              </div>
              <p className="alert-text">
                Thông tin địa chỉ không chính xác trên bản đồ. Vui lòng cập nhật lại vị trí chính xác.
              </p>
            </div>

            {/* Cụm nút bấm */}
            <div className="btn-group">
              <button className="btn-action btn-edit">
                <Pencil size={18} />
                <span>Sửa</span>
              </button>
              <button className="btn-action btn-delete">
                <Trash2 size={18} />
                <span>Xóa</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelUpload;