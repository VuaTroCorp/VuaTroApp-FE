import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
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
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.identifier)
      newErrors.identifier = "Vui lòng nhập Email hoặc SĐT";
    if (!formData.password) newErrors.password = "Vui lòng nhập mật khẩu";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Login successful");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-sidebar">
          <img src={logo} alt="Vuatrovn" className="logo-img" />
        </div>

        <div className="login-content">
          <h2 className="login-title">CHÀO MỪNG BẠN ĐẾN VỚI VUATROVN</h2>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email / Số Điện Thoại</label>
              <input
                type="text"
                name="identifier"
                placeholder="Email Hoặc Số Điện Thoại"
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

            <div className="form-group">
              <label>Mật Khẩu</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mật Khẩu"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="error-message-container">
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>
            </div>

            <div className="remember-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Ghi nhớ mật khẩu</span>
              </label>
            </div>

            <div className="link-row">
              <span
                className="blue-link"
                onClick={() => navigate("/forgot-password")}
              >
                Quên Mật Khẩu?
              </span>
              <span className="blue-link" onClick={() => navigate("/register")}>
                Đăng Ký Tài Khoản
              </span>
            </div>

            <button type="submit" className="submit-btn">
              Đăng Nhập
            </button>
          </form>

          <button className="google-login-btn">
            <img src={googleLogo} alt="G" />
            <span>Đăng nhập bằng Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
