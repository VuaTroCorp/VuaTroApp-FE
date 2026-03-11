import React, { useEffect, useState } from "react";
import logo from "assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import {
  Heart,
  LogIn,
  ChevronUp,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react";
import UserDropdown from "components/layout/Header/UserDropdown/UserDropdown";

const Header = ({ setShowLogout }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const isLogin = localStorage.authToken ? true : false;
  const [dropArrow, setDropArrow] = useState(false);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) return null;
    else {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      );
      const name = JSON.parse(jsonPayload);
      setUserName((name.username))
    }
  }, []);

  return (
    <div className="main-container">
      {/* --- Cụm bên trái: Logo & Search --- */}
      <div className="header-left">
        <div className="logo-box" onClick={() => navigate("/")}>
          <img className="logo-img" src={logo} alt="logo" />
        </div>

        <div className="search-container">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm phòng trọ, căn hộ, chung cư..."
            />
          </div>
          <button className="search-btn">
            <Search color="white" size={16} />
          </button>
        </div>
      </div>

      {/* --- Cụm bên phải: Icons & Auth --- */}
      <div className="infor-container">
        <Heart color="#E1A730" />
        <Bell color="#E1A730" />

        <div className="button-header-container">
          <button
            onClick={() => navigate("/post-news")}
            className="upload-button"
          >
            Nâng cấp
          </button>

          <button
            onClick={() => navigate("/post-news")}
            className="upload-button"
          >
            Đăng tin
          </button>
        </div>

        {isLogin ? (
          <div className="user-wrapper">
            <span
              onClick={() => {
                setOpenDrop(!openDrop);
                setDropArrow(!dropArrow);
              }}
              className="user-infor logged-in"
            >
              <span className="user-name-text">{userName}</span>
              <span className="arrow-icon">
                {dropArrow ? (
                  <ChevronDown size={28} />
                ) : (
                  <ChevronUp size={28} />
                )}
              </span>
            </span>

            {openDrop && (
              <UserDropdown
                setOpenDrop={setOpenDrop}
                setShowLogout={setShowLogout}
                setDropArrow={setDropArrow}
              />
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="user-infor login-btn"
          >
            <span className="icon-login">
              <LogIn size={18} />
            </span>
            <span>Đăng nhập</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
