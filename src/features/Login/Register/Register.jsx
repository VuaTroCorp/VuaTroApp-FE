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
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Vui lòng nhập họ tên");
      return;
    }

    if (!formData.identifier) {
      setError("Vui lòng nhập email hoặc SĐT");
      return;
    }

    if (formData.password.length < 6) {
      setError("Mật khẩu tối thiểu 6 ký tự");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu xác nhận không khớp");
      return;
    }

    if (!formData.agreeTerms) {
      setError("Bạn phải đồng ý điều khoản");
      return;
    }

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

            {error && <div className="error-message">{error}</div>}

            {/* FULL NAME */}
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* EMAIL / PHONE */}
            <div className="form-group">
              <label>Email hoặc SĐT</label>
              <input
                name="identifier"
                placeholder="Nhập email hoặc số điện thoại"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group password-group">
              <label>Mật khẩu</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />

              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group password-group">
              <label>Xác nhận mật khẩu</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <span
                className="toggle-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* TERMS */}
            <div className="form-group checkbox">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                id="terms"
              />
              <label htmlFor="terms">
                Tôi đồng ý điều khoản sử dụng
              </label>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="btn-register">
              Đăng ký
            </button>

          </form>

          {/* OPTIONS */}
          <div className="auth-options">
            <span onClick={() => navigate("/login")}>
              Đã có tài khoản? Đăng nhập
            </span>
          </div>

          {/* GOOGLE */}
          <div className="social-login">
            <p>Hoặc đăng ký bằng</p>

            <button className="google-btn">
              <img src={googleLogo} alt="google" />
              Tiếp tục với Google
            </button>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Register;
