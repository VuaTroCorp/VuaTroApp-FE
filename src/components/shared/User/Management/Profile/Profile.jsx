import React, { useState, useEffect } from "react";
import "./Profile.scss";
import avt from "assets/images/avt.png";
import { Pen} from "lucide-react";
import {authAPI} from "lib/apiService";
import {toast} from "react-toastify";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [userInfor, setUserInfor] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [tempInfor, setTempInfor] = useState({});
  
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await authAPI.getProfile();
      setUserInfor(res.data);
      setTempInfor(res.data);
    } catch (err) {
      toast.error("Không thể tải thông tin cá nhân");
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempInfor((prev) => ({ 
      ...prev, 
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setUpdating(true);
      await authAPI.updateProfile(tempInfor);
      setUserInfor(tempInfor);
      setEdit(false);
      toast.success("Cập nhật thông tin thành công!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Không thể cập nhật thông tin");
    } finally {
      setUpdating(false);
    }
  }

  const handleCancel = () => {
    setTempInfor(userInfor);
    setEdit(false);
  }

  if (loading) return <div className="loading-center">Đang tải dữ liệu...</div>;

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
                name="username"
                onChange={handleChange}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="text"
                value={tempInfor.username || ""}
                readOnly={!edit}
              />
            </div>

            <div className="form-group">
              <p><b>Số điện thoại</b></p>
              <input
                name="phone"
                onChange={handleChange}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="text"
                value={tempInfor.phone || ""}
                readOnly={!edit}
              />
            </div>

            <div className="form-group email-group">
              <p><b>Email</b></p>
              <input
                name="email"
                onChange={handleChange}
                className={`input-field ${!edit ? 'readonly' : ''}`}
                type="email"
                value={tempInfor.email || ""}
                readOnly={!edit}
              />
            </div>
          </div>

          {/* Section Buttons */}
          {!edit ? (
            <div className="action-buttons">
              <div className="pen-icon-wrapper">
                <Pen size={20} color="#fff" />
              </div>
              <button onClick={() => setEdit(true)} className="button-edit">
                Cập Nhật Thông Tin
              </button>
            </div>
          ) : (
            <div className="action-group">
              <button onClick={handleCancel} className="button-confirm btn-cancel" disabled={updating}>
                Hủy
              </button>
              <button onClick={handleSave} className="button-confirm btn-save" disabled={updating}>
                {updating ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;