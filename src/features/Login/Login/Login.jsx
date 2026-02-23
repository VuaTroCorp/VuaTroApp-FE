import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";
import googleLogo from "assets/icons/google-logo.png";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    // clear error khi user gõ lại
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.identifier.trim()) {
      newErrors.identifier = "Vui lòng nhập Email hoặc SĐT";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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

          <form className="auth-form" onSubmit={handleSubmit}>

            {/* Identifier */}
            <div className="form-group">
              <label>Email hoặc SĐT</label>
              <input
                name="identifier"
                placeholder="Nhập email hoặc số điện thoại"
                value={formData.identifier}
                onChange={handleChange}
                className={errors.identifier ? "input-error shake" : ""}
              />
              {errors.identifier && (
                <span className="field-error">{errors.identifier}</span>
              )}
            </div>

            {/* Password */}
            <div className="form-group password-group">
              <label>Mật khẩu</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error shake" : ""}
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

            <div className="remember-row">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <label htmlFor="remember">Ghi nhớ đăng nhập</label>
            </div>

            <button type="submit" className="btn-login">
              Đăng nhập
            </button>
          </form>

          <div className="auth-options">
            <span onClick={() => navigate("/register")}>
              Đăng ký tài khoản
            </span>
            <span onClick={() => navigate("/forgot-password")}>Quên mật khẩu?</span>
          </div>

          <div className="social-login">
            <p>Hoặc đăng nhập bằng</p>
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

export default Login;
