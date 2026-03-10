import React, { useState } from "react";
import logo from "assets/images/logo.png";
import "./Header.scss";
import {
  Heart,
  LogIn,
  ChevronUp,
  ChevronDown,
  Bell,
  Search,
} from "lucide-react";
import DropDownUserInf from "../dropdownUserInfor/DropDownUserInf";
// import {auth} from './lib/auth';

const Header = ({ setShowLogout }) => {

  const [openDrop, setOpenDrop] = useState(false);
  const isLogin = localStorage.token ? true : false;
  const [dropArrow, setDropArrow] = useState(false);

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
        {isLogin ? (
          <div style={{ position: "relative" }}>
            <span
              onClick={() => {
                setOpenDrop(!openDrop);
                setDropArrow(!dropArrow);
              }}
              className="user-infor"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 15px",
                width: "220px",
                justifyContent: "space-between",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              <span
                style={{
                  display: "block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                Lê Hoàng Tuyển
              </span>
              {dropArrow ? (
                <span style={{ display: "flex", alignItems: "end" }}>
                  <ChevronDown size={28} />
                </span>
              ) : (
                <span style={{ display: "flex", alignItems: "end" }}>
                  <ChevronUp size={28} />
                </span>
              )}
            </span>
            {openDrop && (
              <DropDownUserInf
                setOpenDrop={setOpenDrop}
                setShowLogout={setShowLogout}
                setDropArrow={setDropArrow}
              />
            )}
          </div>
        ) : (
          <span
            className="user-infor"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 15px",
              fontWeight: "500",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <LogIn size={18} />
            </span>
            <span>Đăng nhập</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;