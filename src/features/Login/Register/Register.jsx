import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logo from "assets/images/logo.png";
import "./Register.scss"; // Nhớ import file SCSS mới nhé

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    identifier: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Xóa lỗi khi user bắt đầu gõ lại
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Vui lòng nhập họ và tên";
    if (!formData.identifier)
      newErrors.identifier = "Vui lòng nhập Email hoặc SĐT";
    if (!formData.password) newErrors.password = "Vui lòng nhập mật khẩu";
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "Bạn cần chấp nhận điều khoản";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Register successful", formData);
      // Xử lý API đăng ký ở đây
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Cột trái */}
        <div className="auth-sidebar">
          <img src={logo} alt="Vuatrovn" className="logo-img" />
        </div>

        {/* Cột phải */}
        <div className="auth-content">
          {/* Form đăng ký căn trái theo thiết kế */}
          <h2 className="register-title">Đăng Ký Tài Khoản Mới</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* 1. Tên Tài Khoản */}
            <div className="form-group">
              <label>Tên Tài Khoản</label>
              <input
                type="text"
                name="name"
                placeholder="Họ Và Tên"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              <div className="error-message-container">
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>
            </div>

            {/* 2. Email / SĐT */}
            <div className="form-group">
              <label>Email/Số Điện Thoại</label>
              <input
                type="text"
                name="identifier"
                placeholder="Nhập Vào Email/ Số Điện Thoại"
                value={formData.identifier}
                onChange={handleChange}
                className={errors.identifier ? "input-error" : ""}
              />
              <div className="error-message-container">
                {errors.identifier && (
                  <span className="error-text">{errors.identifier}</span>
                )}
              </div>
            </div>

            {/* 3. Mật Khẩu */}
            <div className="form-group">
              <label>Mật Khẩu</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Nhập Vào Mật Khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="error-message-container">
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>
            </div>

            {/* 4. Xác Nhận Mật Khẩu */}
            <div className="form-group">
              <label>Xác Nhận Mật Khẩu</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Nhập Lại Mật Khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "input-error" : ""}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>
              <div className="error-message-container">
                {errors.confirmPassword && (
                  <span className="error-text">{errors.confirmPassword}</span>
                )}
              </div>
            </div>

            {/* Chấp Nhận Điều Khoản & Link */}
            <div className="terms-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <span>Chấp Nhận Điều Khoản</span>
              </label>

              <span className="blue-link" onClick={() => navigate("/login")}>
                Tiếp Tục Đăng Nhập
              </span>
            </div>
            {/* Lỗi cho checkbox */}
            <div className="error-message-container checkbox-error">
              {errors.acceptTerms && (
                <span className="error-text">{errors.acceptTerms}</span>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
