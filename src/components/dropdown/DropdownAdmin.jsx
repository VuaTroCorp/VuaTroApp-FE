import React, { useState } from "react";
import avt from "assets/images/avt.png";
import "./DropdownAdmin.scss";
import {
  Ban,
  ListTodo,
  List,
  FileClock,
  Rows4,
  User,
  CalendarDays,
  CircleCheck,
  ListX,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const DropdownAdmin = ({ setOption, userName }) => {
  const [active, setActive] = useState("infor");
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

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
              <b>{userName}</b>
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
        <div
          onClick={() => {
            setActive("infor");
            setOpen(false);
            setArrow(false);
            setOption("inf");
          }}
          className={`option-left ${active === "infor" ? "active-top" : ""}`}
        >
          <User />
          <p>
            <b>Thông tin cá nhân</b>
          </p>
        </div>

        {/* Quản lý bài đăng (Có mũi tên xổ xuống) */}
        <div
          onClick={() => {
            setActive("manage");
            setOpen(!open);
            setArrow(!arrow);
          }}
          className={`option-left drop ${active === "manage" ? "active" : ""}`}
        >
          <div className="left-drop-item">
            <div>
              <CalendarDays />
            </div>
            <p className="item-options">
              <b>Quản lý bài đăng</b>
            </p>
          </div>
          <div className="arrow-box">
            {!arrow ? <ChevronRight /> : <ChevronDown />}
          </div>
        </div>

        {/* Danh sách con khi 'open' là true */}
        {open && (
          <div className="option-left-list-container">
            <div
              onClick={() => {
                setActive("upload");
                setOption("list-upload");
              }}
              className={`option-left list ${active === "upload" ? "active" : ""}`}
            >
              <List />
              <p>
                <b>Danh Sách Bài Đăng</b>
              </p>
            </div>
            <div
              onClick={() => {
                setActive("approve");
                setOption("wait-upload");
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
                setOption("cancel-upload");
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
                setOption("exp-upload");
              }}
              className={`option-left list ${active === "exp" ? "active" : ""}`}
            >
              <Ban />
              <p>
                <b>Bài Đăng Hết Hạn</b>
              </p>
            </div>
          </div>
        )}

        {/* Quản lý đặt trước */}
        <div
          onClick={() => {
            setActive("order");
            setOpen(false);
            setArrow(false);
            setOption("order-manage");
          }}
          className={`option-left ${active === "order" ? "active" : ""}`}
        >
          <Rows4 />
          <p>
            <b>Quản lý đặt trước</b>
          </p>
        </div>

        {/* Lịch sử giao dịch */}
        <div
          onClick={() => {
            setActive("history");
            setOpen(false);
            setArrow(false);
            setOption("history");
          }}
          className={`option-left ${active === "history" ? "active-bottom" : ""}`}
        >
          <FileClock />
          <p>
            <b>Lịch sử giao dịch</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropdownAdmin;
