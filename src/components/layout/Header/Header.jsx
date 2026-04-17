import React, { useState, useEffect } from "react";
import logo from "assets/images/logo.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import {
  Heart,
  LogIn,
  ChevronUp,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react";
import { useFavorite } from "contexts/FavoriteContext";
import UserDropdown from "components/layout/Header/UserDropdown/UserDropdown";
import "./Header.scss";

const Header = ({ setShowLogout }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [dropArrow, setDropArrow] = useState(false);
  const { favoriteCount } = useFavorite();
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");

  useEffect(() => {
    if (favoriteCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [favoriteCount]);

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/user/home?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/user/home");
    }
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <div className="main-container">
      {/* --- Logo & Search --- */}
      <div className="header-left">
        <div className="logo-box" onClick={() => navigate("/user/home")}>
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
              onKeyDown={handleSearchKeyPress}
            />
          </div>
          <button className="search-btn" onClick={handleSearch} type="button">
            <Search color="white" size={16} />
          </button>
        </div>
      </div>

      {/* --- Icons & Auth --- */}
      <div className="infor-container">
        <div 
          className={`icon-badge-wrapper ${isAnimating ? "heart-beat" : ""}`} 
          onClick={() => navigate("user/favorites")}
        >
          <Heart color="#E1A730" fill={favoriteCount > 0 ? "#E1A730" : "none"} />
          {favoriteCount > 0 && (
            <span className="badge-count">{favoriteCount}</span>
          )}
        </div>

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

        {isAuthenticated ? (
          <div className="user-wrapper">
            <span
              onClick={() => {
                setOpenDrop(!openDrop);
                setDropArrow(!dropArrow);
              }}
              className="user-infor logged-in"
            >
              <span className="user-name-text">{user?.username || "Khách"}</span>
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