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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "20px",
          height: "40px",
        }}
      >
        <b style={{ fontSize: "22px" }}>Thông Tin Cá Nhân</b>
      </div>
      <hr style={{ border: "1px solid #ddd" }} />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ height: "210px", display: "flex", alignItems: "end" }}>
            <img style={{ height: "90%" }} src={avt} alt="ảnh đại diện" />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#8C9AA3",
                color: "#fff",
                padding: "9px 12px",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Đổi ảnh đại diện
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "47px",
            gap: "30px",
          }}
        >
          <div style={{ display: "flex", gap: "128px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <p>
                <b>Họ và Tên</b>
              </p>
              <input
                onChange={(e) => setName(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  padding: "15px 25px 15px 12px",
                  border: "1px solid #ddd",
                  cursor: edit ? "" : "not-allowed",
                  backgroundColor: edit ? "#fff" : " #f5f5f5",
                }}
                type="text"
                value={name}
                readOnly={!edit}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <p>
                <b>Số điện thoại</b>
              </p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  padding: "15px 25px 15px 12px",
                  border: "1px solid #ddd",
                  cursor: edit ? "" : "not-allowed",
                  backgroundColor: edit ? "#fff" : " #f5f5f5",
                }}
                type="text"
                value={phone}
                readOnly={!edit}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                marginRight: "342px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <p>
                <b>Mật khẩu</b>
              </p>
              <input
                onChange={(e) => setPass(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  padding: "15px 25px 15px 12px",
                  border: "1px solid #ddd",
                  cursor: edit ? "" : "not-allowed",
                  backgroundColor: edit ? "#fff" : " #f5f5f5",
                }}
                type="password"
                value={pass}
                readOnly={!edit}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                marginRight: "342px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: "100%",
              }}
            >
              <p>
                <b>Email</b>
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  padding: "15px 25px 15px 12px",
                  width: "100%",
                  border: "1px solid #ddd",
                  cursor: edit ? "" : "not-allowed",
                  backgroundColor: edit ? "#fff" : " #f5f5f5",
                }}
                type="email"
                value={email}
                readOnly={!edit}
              />
            </div>
          </div>
          {!editButton ? (
            <div
              onClick={() => setEditButton(true)}
              style={{ position: "relative" }}
            >
              <div style={{ position: "absolute", top: "41px", left: "15px" }}>
                <Pen size={22} color="#fff" />
              </div>
              <button
                onClick={() => setEdit(true)}
                style={{
                  border: "none",
                  color: "#fff",
                  borderRadius: "15px",
                  marginTop: "30px",
                }}
                className="button-edit"
              >
                Cập Nhật Thông Tin
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap:'18px'}}>
              <div>
                <button
                  onClick={() => {
                    setEditButton(false);
                    setEdit(false);
                  }}
                  className="button-confirm"
                  style={{
                    backgroundColor: "#c61a09",
                    border: "none",
                    color: "#fff",
                    borderRadius: "15px",
                    marginTop: "30px",
                  }}
                >
                  Cancel
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    setEditButton(false);
                    setEdit(false);
                  }}
                  className="button-confirm"
                  style={{
                    backgroundColor: "#1d9c31",
                    border: "none",
                    color: "#fff",
                    borderRadius: "15px",
                    marginTop: "30px",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInfor;
