import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Pen, CheckCircle } from "lucide-react";
import { authAPI } from "lib/apiService";
import { useAuth } from "hooks/useAuth";
import { toast } from "react-toastify";
import Avatar from "components/shared/common/Avatar";
import "./Profile.scss";

const Profile = () => {
  const {refreshUser} = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const fileInputRef = useRef(null);

  const [userInfor, setUserInfor] = useState({
    avatar: "",
    username: "",
    email: "",
    phone: "",
  });

  const [tempInfor, setTempInfor] = useState({});

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      const res = await authAPI.getProfile();
      const data = res.data;

      const mappedInfor = {
        avatar: data.avatar || "",
        username: data.username || "",
        email: data.email || "",
        phone: data.phone || "",
        role: data.role || "",
        id: data.id || null,
      }

      setUserInfor(mappedInfor);
      setTempInfor(mappedInfor);
    } catch (err) {
      toast.error("Không thể tải thông tin cá nhân");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const otpParam = searchParams.get("otp");

    if (emailParam && otpParam) {
      const autoVerify = async () => {
        const id = toast.loading("Đang xác thực email mới...");
        try {
          await authAPI.verifyOtp(emailParam, otpParam);

          toast.update(id, {
            render: "Xác thực thành công! Email đã được cập nhật.",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });

          setSearchParams({});
          fetchProfile();
        } catch (err) {
          toast.update(id, {
            render:
              err.response?.data || "Mã xác thực không hợp lệ hoặc hết hạn",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          setSearchParams({});
          fetchProfile();
        }
      };
      autoVerify();
    }
  }, [searchParams, fetchProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempInfor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setUpdating(true);
      const payload = {
        username: tempInfor.username,
        email: tempInfor.email,
        phone: tempInfor.phone,
      };

      const res = await authAPI.sendOtp(payload);

      // Context take latest data
      await refreshUser();

      const message = res.data?.message || res.data || "Cập nhật thành công";

      if (typeof message === 'string' && message.includes("OTP")) {
        toast.warning(message);
      } else {
        toast.success(message);
      }
      setEdit(false);
      fetchProfile();
    } catch (err) {
      const errorData = err.response?.data;
      toast.error(errorData?.message || errorData || "Không thể cập nhật thông tin");
    } finally {
      setUpdating(false);
    }
  };

  const handleCancel = () => {
    setTempInfor(userInfor);
    setEdit(false);
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Đang tải dữ liệu...</p>
      </div>
    );

  return (
    <div className="admin-right-container">
      <div className="admin-top-header">
        <b className="header-title">Thông Tin Cá Nhân</b>
      </div>
      <hr className="header-divider" />

      <div className="profile-content">
        {/* Section Avatar */}
        <div className="profile-section">
          <div className="avatar-wrapper">
            <Avatar
              className="avatar-img"
              src={tempInfor.avatar}
              alt="ảnh đại diện"
              />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setTempInfor(prev => ({ ...prev, avatar: URL.createObjectURL(file) }));
                  setEdit(true);
                }
              }}
            />
            <button 
              className="btn-change-avatar"
              onClick={() => fileInputRef.current.click()}
            >
              Đổi ảnh đại diện
            </button>
          </div>
        </div>

        {/* Section Form Infor */}
        <div className="form-section">
          <div className="form-grid-container">
            <div className="form-group">
              <label>Tên tài khoản</label>
              <input
                name="username"
                onChange={handleChange}
                className={`input-field ${!edit ? "readonly" : ""}`}
                type="text"
                value={tempInfor.username || ""}
                readOnly={!edit}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                name="phone"
                onChange={handleChange}
                className={`input-field ${!edit ? "readonly" : ""}`}
                type="text"
                value={tempInfor.phone || ""}
                readOnly={!edit}
              />
            </div>

            <div className="form-group email-group">
              <label>Email</label>
              <div className="input-wrapper" style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  name="email"
                  onChange={handleChange}
                  className={`input-field ${!edit ? "readonly" : ""}`}
                  type="email"
                  value={tempInfor.email || ""}
                  readOnly={!edit}
                  style={{ paddingRight: !edit && userInfor.email ? "110px" : "15px" }} // Chừa chỗ trống bên phải để text không đè lên badge
                />
                {!edit && userInfor.email && (
                  <span className="verified-badge">
                    <CheckCircle size={14} /> Đã xác thực
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Section Buttons */}
          <div className="button-area">
            {!edit ? (
              <div className="action-buttons">
                <div className="pen-icon-wrapper">
                  <Pen size={18} color="#fff" />
                </div>
                <button onClick={() => setEdit(true)} className="button-edit">
                  Cập Nhật Thông Tin
                </button>
              </div>
            ) : (
              <div className="action-group">
                <button
                  onClick={handleCancel}
                  className="button-confirm btn-cancel"
                  disabled={updating}
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleSave}
                  className="button-confirm btn-save"
                  disabled={updating}
                >
                  {updating ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
