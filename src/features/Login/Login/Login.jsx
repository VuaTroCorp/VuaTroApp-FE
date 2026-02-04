import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "shared/components/footer/Footer";

import logo from "assets/images/logo.png";
import googleLogo from "assets/icons/google-logo.png";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    remember: false
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.identifier) {
      setError("Vui lòng nhập Email hoặc SĐT");
      return;
    }

    if (!formData.password) {
      setError("Vui lòng nhập mật khẩu");
      return;
    }

    // Demo login FE
    localStorage.setItem("token", "demo-token");

    alert("Đăng nhập thành công!");
    navigate("/");
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

          <h1>ĐĂNG NHẬP VUATROVN</h1>
          <p className="subtitle">Chào mừng bạn quay trở lại</p>

          <form onSubmit={handleSubmit} className="auth-form">

            {error && <div className="error-message">{error}</div>}

            {/* Email / Phone */}
            <div className="form-group">
              <label>Email hoặc SĐT</label>
              <input
                name="identifier"
                placeholder="Nhập email hoặc số điện thoại"
                value={formData.identifier}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
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

            {/* Remember */}
            <div className="form-group checkbox">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                id="remember"
              />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-login">
              Đăng nhập
            </button>

          </form>

          {/* Options */}
          <div className="auth-options">
            <span onClick={() => navigate("/register")}>
              Đăng ký tài khoản
            </span>

            <span className="forgot">Quên mật khẩu?</span>
          </div>

          {/* Google */}
          <div className="social-login">
            <p>Hoặc đăng nhập bằng</p>

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

export default Login;
