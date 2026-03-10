import React, { useState } from "react";
import avt from "assets/images/avt.png";
import "./DropDownUserInf.scss";
import {
  UserCog,
  History,
  Bookmark,
  CircleFadingArrowUp,
  LogOut,
} from "lucide-react";

const DropDownUserInf = ({
  setOption,
  setShowLogout,
  setOpenDrop,
  setDropArrow,
}) => {
  // Giữ lại các state khai báo ban đầu của bạn dù hiện tại chưa dùng tới trong UI này
  const [active, setActive] = useState("infor");
  const [open, setOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  return (
    <div className="dropdown-user-main-container">
      <div
        onClick={() => {
          setDropArrow(false);
          setOpenDrop(false);
        }}
        className="option-dropdown-navbar"
      >
        <span>
          <UserCog size={27} />
        </span>
        <span className="content-option-dropdown">Thông Tin Cá Nhân</span>
      </div>

      <div
        onClick={() => {
          setDropArrow(false);
          setOpenDrop(false);
        }}
        className="option-dropdown-navbar"
      >
        <span>
          <History size={27} />
        </span>
        <span className="content-option-dropdown">Lịch Sử Tìm Kiếm</span>
      </div>

      <div
        onClick={() => {
          setDropArrow(false);
          setOpenDrop(false);
        }}
        className="option-dropdown-navbar"
      >
        <span>
          <Bookmark size={27} />
        </span>
        <span className="content-option-dropdown">Bài Đăng Yêu Thích</span>
      </div>

      <div
        onClick={() => {
          setDropArrow(false);
          setOpenDrop(false);
        }}
        className="option-dropdown-navbar"
      >
        <span>
          <CircleFadingArrowUp size={27} />
        </span>
        <span className="content-option-dropdown">Nâng Cấp Tài Khoản</span>
      </div>

      <div
        onClick={() => {
          setShowLogout(true);
          setDropArrow(false);
          setOpenDrop(false);
        }}
        className="option-dropdown-navbar last-option"
      >
        <span>
          <LogOut size={27} />
        </span>
        <span className="content-option-dropdown">Đăng xuất</span>
      </div>
    </div>
  );
};

export default DropDownUserInf;