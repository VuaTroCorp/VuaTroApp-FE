import React from "react";
import logo from "assets/images/logo.png";
import "./Navbar.scss";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          gap: "50px",
          height: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <img className="logo-container" src={logo} alt="logo" />
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

      <div className="infor-container">
        <Heart color="#E1A730" />
        <Bell color="#E1A730" />
        <button className="upload-button">Đăng tin</button>
        <span className="user-infor">Đoàn Thàm Vĩnh Huân</span>
      </div>
    </div>
  );
};

export default Navbar;
