import React from "react";
import "./UserDropdown.scss";
import {
  UserCog,
  History,
  Bookmark,
  CircleFadingArrowUp,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserDropdown = ({
  setShowLogout,
  setOpenDrop,
  setDropArrow,
}) => {
  const navigate = useNavigate();

  const closeDropdown = () => {
    setOpenDrop(false);
    setDropArrow(false);
  };

return (
    <div className="dropdown-user-main-container">
      <div
        onClick={() => {
          closeDropdown();
          navigate("/user/profile");
        }}
        className="option-dropdown-navbar"
      >
        <span><UserCog size={24} /></span>
        <span className="content-option-dropdown">Thông Tin Cá Nhân</span>
      </div>
      
      <div onClick={closeDropdown} className="option-dropdown-navbar">
        <span><History size={24} /></span>
        <span className="content-option-dropdown">Lịch Sử Tìm Kiếm</span>
      </div>
      
      <div onClick={closeDropdown} className="option-dropdown-navbar">
        <span><Bookmark size={24} /></span>
        <span className="content-option-dropdown">Bài Đăng Yêu Thích</span>
      </div>
      
      <div onClick={closeDropdown} className="option-dropdown-navbar">
        <span><CircleFadingArrowUp size={24} /></span>
        <span className="content-option-dropdown">Nâng Cấp Tài Khoản</span>
      </div>
      
      <div
        onClick={() => {
          closeDropdown();
          setShowLogout(true);
        }}
        className="option-dropdown-navbar logout-btn"
      >
        <span><LogOut size={24} /></span>
        <span className="content-option-dropdown">Đăng xuất</span>
      </div>
    </div>
  );
};

export default UserDropdown;
