import logo from "assets/images/logo.png";
import location1 from "assets/icons/location1.png";
import down from "assets/icons/down.png";
import heart from "assets/icons/heart.png";
import "./Header.scss";
import account from "assets/icons/account.png";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const [showLocation, setShowLocation] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const locationRef = useRef(null);
  const avatarRef = useRef(null);

  const navigate = useNavigate();

  // CLICK RA NGOÀI → ĐÓNG DROPDOWN
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
      <div className="header__left">
        <img
          src={logo}
          alt="VuaTro"
          className="logo"
          onClick={() => navigate("/")}
        />


        {/* LOCATION */}
        <div className="location" ref={locationRef}>
          <div
            className="location-box"
            onClick={() => setShowLocation(!showLocation)}
          >
            <img src={location1} alt="location" />
            <span>Ninh Thuận</span>
            <img src={down} alt="down" />
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

      <div className="header__right">
        <img src={heart} alt="heart" className="favourite" />
        <span className="notification">🔔</span>

        <button className="btn btn-login">Đăng nhập</button>
        <button
          className="btn btn-postnew"
          onClick={() => navigate("/post-news")}
        >
          Đăng tin
        </button>

        {/* AVATAR */}
        <div className="avatar-menu" ref={avatarRef}>
          <div className="avatar-trigger" onClick={() => setShowAvatar(!showAvatar)}>
            <img src={account} alt="account" className="avatar-img" />
            <img src={down} alt="down" className="arrow" />
          </div>

          {showAvatar && (
            <div className="avatar-dropdown">
              <div className="dropdown-item">Thông Tin Người Dùng</div>
              <Link to="/upgrade-account" className="dropdown-item">
                Nâng Cấp Tài Khoản
              </Link>
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
