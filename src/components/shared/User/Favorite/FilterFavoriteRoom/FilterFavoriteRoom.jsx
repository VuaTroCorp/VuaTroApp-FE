import React, { useState } from "react";
import { Search, Filter, BellRing } from "lucide-react";
import "./FilterFavoriteRoom.scss";

const FilterFavoriteRoom = ({ onApplyFilters }) => {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleApply = () => {
    // Lưu ý: Chuẩn hóa dữ liệu priceRange/district trước khi truyền lên BE nếu cần
    onApplyFilters({
      priceRange: selectedPrice,
      district: selectedDistrict
    });
  };

  const handleClear = () => {
    setSelectedPrice("");
    setSelectedDistrict("");
    onApplyFilters({}); 
  };

  return (
    <aside className="filter-sidebar">
      <div className="filter-box">
        <div className="filter-header">
          <h2>Bộ lọc</h2>
          <button className="btn-clear" onClick={handleClear}>Xóa lọc</button>
        </div>

        <div className="filter-group">
          <h3>Khoảng giá</h3>
          <div className="options">
            {["Dưới 3 triệu", "3 - 5 triệu", "5 - 10 triệu", "Trên 10 triệu"].map((price) => (
              <label key={price} className="radio-label group">
                <input 
                  type="radio" 
                  name="price" 
                  checked={selectedPrice === price}
                  onChange={() => setSelectedPrice(price)}
                />
                <span className={selectedPrice === price ? 'selected' : ''}>{price}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <h3>Quận / Huyện</h3>
          <div className="search-input-wrapper">
            <Search size={16} className="icon" />
            <input type="text" placeholder="Tìm quận huyện..." />
          </div>
          <div className="options scrollable">
            {["Bình Thạnh", "Quận 1", "Quận 7", "Quận 2", "Thủ Đức"].map((district) => (
              <label key={district} className="radio-label group">
                <input 
                  type="radio" 
                  name="district"
                  checked={selectedDistrict === district}
                  onChange={() => setSelectedDistrict(district)}
                />
                <span className={selectedDistrict === district ? 'selected' : ''}>{district}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn-apply" onClick={handleApply}>
          <Filter size={18} /> Áp dụng bộ lọc
        </button>
      </div>

      <div className="promo-banner group">
        <div className="promo-content">
          <h4>Tìm nhà nhanh hơn?</h4>
          <p>Đăng ký nhận thông báo khi có căn hộ mới phù hợp với bạn.</p>
          <button>Đăng ký ngay</button>
        </div>
        <BellRing className="promo-icon" size={120} />
      </div>
    </aside>
  );
};

export default FilterFavoriteRoom;