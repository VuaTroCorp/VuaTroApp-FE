import React, { useState } from "react";
import "./admin-infor.scss";
import avt from "assets/images/avt.png";
import { Pen } from "lucide-react";

const AdminInfor = () => {
  const [edit, setEdit] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");

  const [nameEdit, setNameEdit] = useState("");
  const [phoneEdit, setPhoneEdit] = useState("");
  const [passEdit, setPassEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");

  const [editButton, setEditButton] = useState(false);

  return (
    <div className="admin-right-container">
      {/* Header */}
      <div className="admin-header">
        <b className="header-title">Thông Tin Cá Nhân</b>
      </div>
      <hr className="header-divider" />

      <div>
        {/* Section Avatar */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            <img className="avatar-img" src={avt} alt="ảnh đại diện" />
          </div>
          <div>
            <button className="btn-change-avatar">Đổi ảnh đại diện</button>
          </div>
        </div>

        {/* Section Form Infor */}
        <div className="form-section">
          {/* Lưới Grid Container để chia cột thẳng tắp */}
          <div className="form-grid-container">
            <div className="form-group">
              <p><b>Họ và Tên</b></p>
              <input
                onChange={(e) => setName(e.target.value)}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="text"
                value={name}
                readOnly={!edit}
              />
            </div>
            
            <div className="form-group">
              <p><b>Số điện thoại</b></p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="text"
                value={phone}
                readOnly={!edit}
              />
            </div>

            <div className="form-group">
              <p><b>Mật khẩu</b></p>
              <input
                onChange={(e) => setPass(e.target.value)}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="password"
                value={pass}
                readOnly={!edit}
              />
            </div>

            <div className="form-group email-group">
              <p><b>Email</b></p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="email"
                value={email}
                readOnly={!edit}
              />
            </div>
          </div>

          {/* Section Buttons */}
          {!editButton ? (
            <div className="action-buttons">
              <div className="pen-icon-wrapper">
                <Pen size={20} color="#fff" />
              </div>
              <button
                onClick={() => {
                  setEditButton(true);
                  setEdit(true);
                }}
                className="button-edit"
              >
                Cập Nhật Thông Tin
              </button>
            </div>
          ) : (
            <div className="action-group">
              <button
                onClick={() => {
                  setEditButton(false);
                  setEdit(false);
                }}
                className="button-confirm btn-cancel"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setEditButton(false);
                  setEdit(false);
                }}
                className="button-confirm btn-save"
              >
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInfor;