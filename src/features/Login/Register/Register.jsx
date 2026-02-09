import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "shared/components/footer/Footer";

import logo from "assets/images/logo.png";
import googleLogo from "assets/icons/google-logo.png";

import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    identifier: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
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

    // clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên";
    }

    if (!formData.identifier.trim()) {
      newErrors.identifier = "Vui lòng nhập email hoặc SĐT";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu tối thiểu 6 ký tự";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý điều khoản";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    alert("Đăng ký thành công!");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* LEFT */}
        <div className="auth-left">
          <div className="brand">
            <img src={logo} alt="logo" className="logo" />
            <p className="slogan">Tìm nhà trọ tốt - Uy tín nhất!</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="auth-right">
          <h1>ĐĂNG KÝ VUATROVN</h1>
          <p className="subtitle">Tạo tài khoản mới</p>

          <form onSubmit={handleSubmit} className="auth-form">
            {/* FULL NAME */}
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? "input-error shake" : ""}
                placeholder="Nhập họ và tên"
              />
              {errors.fullName && (
                <span className="field-error">{errors.fullName}</span>
              )}
            </div>

            {/* EMAIL / PHONE */}
            <div className="form-group">
              <label>Email hoặc SĐT</label>
              <input
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                className={errors.identifier ? "input-error shake" : ""}
                placeholder="Nhập email hoặc số điện thoại"
              />
              {errors.identifier && (
                <span className="field-error">{errors.identifier}</span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="form-group password-group">
              <label>Mật khẩu</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error shake" : ""}
                placeholder="••••••••"
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
              {errors.password && (
                <span className="field-error">{errors.password}</span>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group password-group">
              <label>Xác nhận mật khẩu</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "input-error shake" : ""}
                placeholder="••••••••"
              />
              <span
                className="toggle-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
              {errors.confirmPassword && (
                <span className="field-error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* TERMS */}
            {/* TERMS */}
            <div className="remember-row">
              <input
                type="checkbox"
                name="agreeTerms"
                id="terms"
                checked={formData.agreeTerms}
                onChange={handleChange}
              />
              <label htmlFor="terms">Tôi đồng ý điều khoản sử dụng</label>
            </div>

            {errors.agreeTerms && (
              <span className="field-error">{errors.agreeTerms}</span>
            )}

            {/* SUBMIT */}
            <button type="submit" className="btn-register">
              Đăng ký
            </button>
          </form>

          <div className="auth-options">
            <span onClick={() => navigate("/login")}>
              Đã có tài khoản? Đăng nhập
            </span>
          </div>

          <div className="social-login">
            <p>Hoặc đăng ký bằng</p>
            <button className="google-btn">
              <img src={googleLogo} alt="google" />
              Tiếp tục với Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
