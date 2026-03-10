import React, { useState } from "react";
import "./AdminListManage.scss";
import demo from "assets/images/demo.jpg";
import {
  MapPin,
  Eye,
  CalendarDays,
  Pencil,
  EyeOff,
  Trash2,
  Search
} from "lucide-react";
import { MOCK_ROOMS } from "../../constant/constant-list-manage.js";

const AdminListManage = () => {
  const specialNumb = 5;
  const [currentPage, setCurrentPage] = useState(1);
  
  const pages = Math.ceil(MOCK_ROOMS.length / specialNumb);
  const buttonPage = Array.from({ length: pages }, (_, index) => index + 1);
  
  const ArrayRender = MOCK_ROOMS.slice(
    (currentPage - 1) * specialNumb,
    (currentPage - 1) * specialNumb + specialNumb
  );

  return (
    <div className="main-container-list-manage">
      {/* --- Header Section --- */}
      <div className="list-manage-header">
        <div className="header-left">
          <b className="title">Danh Sách Bài Đăng</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>{MOCK_ROOMS.length}</span> bài đăng
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
      <div className="list-content-wrapper">
        <div className="items-list">
          {ArrayRender.map((item, index) => (
            <div key={index} className="item-room">
              {/* Cột 1: Ảnh */}
              <div className="image-container">
                <img src={demo} alt="room-demo" />
              </div>

              {/* Cột 2: Thông tin chi tiết */}
              <div className="info-container">
                <div className="info-title">
                  <b>{item.title}</b>
                </div>
                
                <div className="info-address">
                  <MapPin size={20} color="#e1a730" />
                  <span>{item.address}</span>
                </div>

                <div className="info-price">
                  <b>{item.price}</b>
                  <span className="currency">VND/ tháng</span>
                </div>

                <div className="info-stats">
                  <div className="stat-item">
                    <Eye color="#424242" size={22} />
                    <span>{item.views}</span>
                  </div>
                  <div className="stat-item">
                    <CalendarDays color="#424242" size={20} />
                    <span>12/12/2026</span>
                  </div>
                </div>
              </div>

              {/* Cột 3: Các nút hành động */}
              <div className="action-container">
                <button className="btn-action btn-edit">
                  <Pencil size={18} />
                  <span>Sửa</span>
                </button>

                <button className="btn-action btn-hide">
                  <EyeOff size={18} />
                  <span>Ẩn</span>
                </button>

                <button className="btn-action btn-delete">
                  <Trash2 size={18} />
                  <span>Xóa</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination Section --- */}
        <div className="pagination-wrapper">
          {buttonPage.map((item) => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`page-btn ${currentPage === item ? "active" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminListManage;