import React from "react";
import "./PostExpire.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  RotateCw,
  TriangleAlert,
  Trash2,
  CircleCheck,
  Search
} from "lucide-react";

const PostExpire = () => {
  return (
    <div className="main-container-expired-manage">
      {/* --- Header Section --- */}
      <div className="expired-manage-header">
        <div className="header-left">
          <b className="title">Bài Đăng Hết Hạn</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>10</span> bài đăng hết hạn
          </p>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm theo tên, địa chỉ..." />
            <Search className="search-icon" size={16} />
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* --- Content Section --- */}
      <div className="expired-content-wrapper">
        
        {/* Item 1: Trạng thái Đã hết hạn */}
        <div className="item-expired">
          <div className="image-container">
            <img src={demo} alt="room" />
          </div>

          <div className="info-container">
            <div className="info-title"><b>Phòng trọ sinh viên giá rẻ sốc</b></div>
            <div className="info-address">
              <MapPin size={20} color="#e1a730" />
              <span>Phan Rang - Tháp Chàm, Ninh Thuận</span>
            </div>
            <div className="info-price"><b>3.600.000</b></div>
            <div className="info-stats-row">
              <div className="currency">VND/ tháng</div>
              <div className="stats">
                <div className="stat-item"><Eye size={22} color="#424242" /> <span>1,234</span></div>
                <div className="stat-item"><CalendarDays size={20} color="#424242" /> <span>12/12/2026</span></div>
              </div>
            </div>
          </div>

          <div className="action-container">
            <div className="status-box status-expired">
              <TriangleAlert color="#925400" size={22} />
              <p><b>ĐÃ HẾT HẠN</b></p>
            </div>
            <div className="btn-group">
              <button className="btn-action btn-renew">
                <RotateCw size={18} /> <span>Gia hạn</span>
              </button>
              <button className="btn-action btn-delete">
                <Trash2 size={18} /> <span>Xóa</span>
              </button>
            </div>
          </div>
        </div>

        {/* Item 2: Trạng thái Gia hạn thành công */}
        <div className="item-expired">
          <div className="image-container">
            <img src={demo} alt="room" />
          </div>
          <div className="info-container">
             <div className="info-title"><b>Phòng trọ sinh viên giá rẻ sốc</b></div>
            <div className="info-address">
              <MapPin size={20} color="#e1a730" />
              <span>Phan Rang - Tháp Chàm, Ninh Thuận</span>
            </div>
            <div className="info-price"><b>3.600.000</b></div>
            <div className="info-stats-row">
              <div className="currency">VND/ tháng</div>
              <div className="stats">
                <div className="stat-item"><Eye size={22} color="#424242" /> <span>1,234</span></div>
                <div className="stat-item"><CalendarDays size={20} color="#424242" /> <span>12/12/2026</span></div>
              </div>
            </div>
          </div>

          <div className="action-container">
            <div className="status-box status-success">
              <CircleCheck color="#436F00" size={22} />
              <p><b>GIA HẠN THÀNH CÔNG</b></p>
            </div>
            <div className="btn-group">
               {/* Nút bấm tương tự */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PostExpire;