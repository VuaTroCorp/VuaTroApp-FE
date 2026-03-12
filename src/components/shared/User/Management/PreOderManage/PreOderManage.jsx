import React from "react";
import "./PreOderManage.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  CalendarDays,
  User,
  CircleX,
  CircleCheck,
  Phone,
  Search,
} from "lucide-react";

const PreOderManage = () => {
  return (
    <div className="main-container-order-manage">
      {/* --- Header --- */}
      <div className="order-header">
        <div className="header-left">
          <b className="title">Quản Lý Đặt Trước</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>10</span> bài đăng đặt trước
          </p>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm theo tên, địa chỉ..." />
            <Search className="search-icon" size={16} />
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* --- List Content --- */}
      <div className="order-list">
        {/* ITEM 1: TRẠNG THÁI CHƯA XÁC NHẬN (CÓ 2 NÚT) */}
        <div className="item-order">
          <div className="img-box">
            <img src={demo} alt="room" />
          </div>
          <div className="info-box">
            <div className="room-title">
              <b>Phòng trọ sinh viên giá rẻ sốc</b>
            </div>
            <div className="address-box">
              <MapPin size={20} color="#e1a730" />
              <span>Phan Rang - Tháp Chàm, Ninh Thuận</span>
            </div>
            <div className="customer-label">
              <b>Thông tin người đặt:</b>
            </div>
            <div className="customer-info">
              <div className="customer-name">
                <User size={20} color="#E6AC28" />
                <p>Lê Hoàng Tuyển</p>
              </div>
              <div className="customer-contact">
                <div className="contact-item">
                  <Phone color="#E6AC28" size={20} />
                  <span>0334171139</span>
                </div>
                <div className="contact-item">
                  <CalendarDays color="#E6AC28" size={20} />
                  <span>12/12/2026 - 15:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="action-box">
            <div className="price-display">
              <p className="price-numb">2.590.000</p>
              <p className="price-unit">VND/tháng</p>
            </div>
            <div className="btn-group-column">
              <button className="btn-action btn-confirm">
                <CircleCheck size={18} />
                <span>Xác nhận</span>
              </button>
              <button className="btn-action btn-reject">
                <CircleX size={18} />
                <span>Từ chối</span>
              </button>
            </div>
          </div>
        </div>

        {/* ITEM 2: TRẠNG THÁI ĐÃ TỪ CHỐI */}
        <div className="item-order">
          <div className="img-box">
            <img src={demo} alt="room" />
          </div>
          <div className="info-box">
            <div className="room-title">
              <b>Phòng trọ sinh viên giá rẻ sốc</b>
            </div>
            <div className="address-box">
              <MapPin size={20} color="#e1a730" />
              <span>Phan Rang - Tháp Chàm, Ninh Thuận</span>
            </div>
            <div className="customer-label">
              <b>Thông tin người đặt:</b>
            </div>
            <div className="customer-info">
              <div className="customer-name">
                <User size={20} color="#E6AC28" />
                <p>Lê Hoàng Tuyển</p>
              </div>
              <div className="customer-contact">
                <div className="contact-item">
                  <Phone color="#E6AC28" size={20} />
                  <span>0334171139</span>
                </div>
                <div className="contact-item">
                  <CalendarDays color="#E6AC28" size={20} />
                  <span>12/12/2026 - 15:30</span>
                </div>
              </div>
            </div>
          </div>
          <div className="action-box">
            <div className="price-display">
              <p className="price-numb">2.590.000</p>
              <p className="price-unit">VND/tháng</p>
            </div>
            <div className="status-only">
              <button className="btn-status status-rejected" disabled>
                <CircleX size={18} />
                <span>Đã từ chối</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOderManage;
