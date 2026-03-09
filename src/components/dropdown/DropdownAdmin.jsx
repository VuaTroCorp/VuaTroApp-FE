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

const DropdownAdmin = ({ setOption }) => {
  const [active, setActive] = useState("infor");
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  return (
    <div className="admin-left-container">
      <div className="drop-main-container">
        <div>
          <div className="avt-container">
            <img className="avt" src={avt} alt="" />
          </div>
        </div>

        <div className="admin-inf">
          <div>
            <p>
              <b>Đoàn Thàm Vĩnh Huân</b>
            </p>
          </div>
          <div className="role-container">
            <CircleCheck size={18} color="#21A3FF" />
            <p style={{ color: "#21A3FF" }} className="role">
              Chủ căn hộ
            </p>
          </div>
        </div>
      </div>

      <div className="option-main-container">
        <div
          style={{ cursor: "pointer" }}
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
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setActive("manage");
            setOpen(!open);
            setArrow(!arrow);
          }}
          className={`option-left ${active === "manage" ? "active" : ""}`}
        >
          <div>
            <CalendarDays />
          </div>
          <p>
            <b>Quản lý bài đăng</b>
          </p>
          {!arrow ? (
            <div className={`arrow ${arrow === true ? "arrow" : ""}`}>
              <ChevronRight />
            </div>
          ) : (
            <div>
              <div className={`arrow ${arrow === true ? "arrow" : ""}`}>
                <ChevronDown />
              </div>
            </div>
          )}
        </div>
        {open ? (
          <div className="option-left-list-container">
            <div
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
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
              style={{ cursor: "pointer" }}
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
        ) : (
          <></>
        )}

        <div
          style={{ cursor: "pointer" }}
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
        <div
          style={{ cursor: "pointer" }}
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
