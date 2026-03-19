import React, { useState } from "react";
import { CircleChevronRight } from "lucide-react";
import "./HomeFilterHeader.scss";

function HomeFilterHeader({
  count = 0,
  onProvinceChange,
  activeProvince,
  onSortChange,
}) {
  const LOCATIONS = ["Ninh Thuận", "Khánh Hòa", "Cam Ranh", "Phú Yên"];
  const [activeType, setActiveType] = useState("Đề xuất");

  const handleProvinceClick = (location) => {
    if (onProvinceChange) {
      onProvinceChange(location);
    }
  };

  const handleSortClick = (type) => {
    setActiveType(type);
    if (onSortChange) {
      const sortValue = type === "Mới đăng" ? "id,desc" : "id,asc";
      onSortChange(sortValue);
    }
  };

  return (
    <div className="home-filter-header">
      <h1 className="main-title">Kênh Thông Tin Phòng Trọ Số 1 Việt Nam</h1>
      <h4 className="sub-title">
        Có {count.toLocaleString()} Tin Đăng Cho Thuê
      </h4>

      <h3 className="section-label">TỈNH THÀNH</h3>
      <div className="area-container">
        {LOCATIONS.map((loc, index) => (
          <div
            className={`area-item ${activeProvince === loc ? "active" : ""}`}
            key={index}
            onClick={() => handleProvinceClick(loc)}
          >
            <span>Phòng trọ</span>
            <b>{loc}</b>
          </div>
        ))}

        {/* <div className="area-item all-btn">
          <span className="all-title">Tất cả</span>
          <CircleChevronRight size={20} className="all-icon" />
        </div> */}
      </div>

      <div className="type-selector">
        {["Đề xuất", "Mới đăng"].map((type) => (
          <div
            key={type}
            className={`type-item ${activeType === type ? "active" : ""}`}
            onClick={() => handleSortClick(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFilterHeader;
