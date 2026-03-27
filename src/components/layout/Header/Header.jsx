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
import { decodeBase64 } from "utils/decodeBase64";

const Header = ({ setShowLogout }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const isLogin = localStorage.authToken ? true : false;
  const [dropArrow, setDropArrow] = useState(false);
  const [userName, setUserName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const decodeName = decodeBase64(token);
    setUserName(decodeName.username);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/");
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="main-container">
      {/* --- Cụm bên trái: Logo & Search --- */}
      <div className="header-left">
        <div className="logo-box" onClick={() => navigate("/user/home ")}>
          <img className="logo-img" src={logo} alt="logo" />
        </div>

        <div className="search-container">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              placeholder="Tìm phòng trọ, căn hộ, chung cư..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearchKeyPress}
            />
          </div>
          <button className="search-btn" onClick={handleSearch}>
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
            onClick={() => navigate("/user/post-news")}
            className="upload-button"
          >
            Nâng cấp
          </button>

          <button
            onClick={() => navigate("/user/post-news")}
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
