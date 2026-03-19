import React, { useEffect, useState } from "react";
import avt from "assets/images/avt.png";
import "./SideBar.scss";
import { decodeBase64 } from "../../../../../utils/decodeBase64";
import {
  FileClock,
  Rows4,
  User,
  CalendarDays,
  CircleCheck,
} from "lucide-react";
import { set } from "../../../../../../node_modules/yaml/dist/schema/yaml-1.1/set";
import { NavLink } from "../../../../../../node_modules/react-router-dom/dist/index";

const SideBar = ({ setOption }) => {
  const [active, setActive] = useState("infor");
  const [open, setOpen] = useState(true);
  const [arrow, setArrow] = useState(false);
  const [name, setName] = useState("");
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const decodeName = decodeBase64(token);
    setName(decodeName.username);
  }, []);

  return (
    <div className="admin-left-container">
      {/* Khối Profile phía trên */}
      <div className="drop-main-container">
        <div className="avt-wrapper">
          <div className="avt-container">
            <img className="avt" src={avt} alt="" />
          </div>
        </div>

        <div className="admin-inf">
          <div>
            <p>
              <b>{name}</b>
            </p>
          </div>
          <div className="role-container">
            <CircleCheck size={18} color="#21A3FF" />
            <p className="role">Chủ căn hộ</p>
          </div>
        </div>
      </div>

      {/* Khối Option Menu phía dưới */}
      <div className="option-main-container">
        {/* Thông tin cá nhân */}

        <NavLink to="/user/profile" className="navlink">
          <div className={`option-left active-top`}>
            <User />
            <p>
              <b>Thông tin cá nhân</b>
            </p>
          </div>
        </NavLink>

        {/* Quản lý bài đăng (Có mũi tên xổ xuống) */}
        <NavLink to='/user/manage-post' className='navlink'>
          <div
            onClick={() => {
              setActive("manage");
              setOpen(!open);
              setArrow(!arrow);
            }}
            className={`option-left drop`}
          >
            <div className="left-drop-item">
              <div>
                <CalendarDays />
              </div>
              <p className="item-options">
                <b>Quản lý bài đăng</b>
              </p>
            </div>
          </div>
        </NavLink>

        {/* Danh sách con khi 'open' là true */}
        {/* {open && (
          <div className="option-left-list-container">
            <NavLink to="/user/post-list" className="navlink">
              {({ isActive }) => (
                <div className={`option-left list ${isActive ? "active" : ""}`}>
                  <List />
                  <p>
                    <b>Danh Sách Bài Đăng</b>
                  </p>
                </div>
              )}
            </NavLink>

            <div
              onClick={() => {
                setActive("approve");
                // setOption("wait-upload");
              }}
              className={`option-left list ${active === "approve" ? "active" : ""}`}
            >
              <ListTodo />
              <p>
                <b>Bài Đăng Chờ Duyệt</b>
              </p>
            </div>
            <div
              onClick={() => {
                setActive("refuse");
                // setOption("cancel-upload");
              }}
              className={`option-left list ${active === "refuse" ? "active" : ""}`}
            >
              <ListX />
              <p>
                <b>Bài Đăng Bị Từ Chối</b>
              </p>
            </div>
            <div
              onClick={() => {
                setActive("exp");
                // setOption("exp-upload");
              }}
              className={`option-left list ${active === "exp" ? "active" : ""}`}
            >
              <Ban />
              <p>
                <b>Bài Đăng Hết Hạn</b>
              </p>
            </div>
          </div>
        )} */}

        {/* Quản lý đặt trước */}
        <NavLink to="/user/pre-order" className="navlink">
          <div className={`option-left`}>
            <Rows4 />
            <p>
              <b>Quản lý đặt trước</b>
            </p>
          </div>
        </NavLink>

        {/* Lịch sử giao dịch */}
        <NavLink to="/user/history-transaction" className="navlink">
          <div className={`option-left active-bottom`}>
            <FileClock />
            <p>
              <b>Lịch sử giao dịch</b>
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
