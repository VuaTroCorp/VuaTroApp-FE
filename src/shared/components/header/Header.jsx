import logo from "assets/images/logo.png";
import locationIcon from "assets/icons/location1.png";
import downIcon from "assets/icons/down.png";
import heartIcon from "assets/icons/heart.png";
import accountIcon from "assets/icons/account.png";

import "./Header.scss";

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [showLocation, setShowLocation] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const locationRef = useRef(null);
  const avatarRef = useRef(null);

  // 👉 Click ngoài dropdown thì đóng
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (locationRef.current && !locationRef.current.contains(e.target)) {
        setShowLocation(false);
      }

      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setShowAvatar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header__left">
        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        {/* LOCATION */}
        <div className="location" ref={locationRef}>
          <div
            className="location-box"
            onClick={() => setShowLocation(!showLocation)}
          >
            <img src={locationIcon} alt="location" />
            <span>Ninh Thuận</span>
            <img src={downIcon} alt="down" />
          </div>

          {showLocation && (
            <div className="location-list">
              <div className="location-item">Ninh Thuận</div>
              <div className="location-item">Khánh Hòa</div>
              <div className="location-item">TP HCM</div>
            </div>
          )}
        </div>

        {/* SEARCH */}
        <div className="search">
          <input placeholder="Tìm Bất Động Sản..." />
          <button className="search__btn">🔍</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <img src={heartIcon} alt="heart" className="favourite" />

        <span className="notification">🔔</span>

        {/* LOGIN */}
        <button
          className="btn btn-login"
          onClick={() => navigate("/login")}
        >
          Đăng nhập
        </button>

        {/* POST */}
        <button className="btn btn-postnew">Đăng tin</button>

        {/* AVATAR */}
        <div className="avatar-menu" ref={avatarRef}>
          <div
            className="avatar-trigger"
            onClick={() => setShowAvatar(!showAvatar)}
          >
            <img src={accountIcon} alt="avatar" className="avatar-img" />
            <img src={downIcon} alt="down" className="arrow" />
          </div>

          {showAvatar && (
            <div className="avatar-dropdown">
              <div className="dropdown-item">Thông Tin Người Dùng</div>
              <div className="dropdown-item">Nâng Cấp Tài Khoản</div>
              <div className="dropdown-item">Bài Đăng Của Tôi</div>
              <div className="dropdown-item logout">Đăng Xuất</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
