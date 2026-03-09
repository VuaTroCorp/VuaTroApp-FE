import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import logo from "assets/images/logo.png";
import googleLogo from "assets/icons/google-logo.png";
import { useAuth } from "hooks/useAuth";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await login({
          email: formData.email,
          password: formData.password,
        });

        // Đăng nhập thành công
        toast.success("Đăng nhập thành công!");
        navigate("/");
      } catch (error) {
        // Xử lý error từ backend
        const errorMessage =
          error.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại.";
        toast.error(errorMessage);
      }
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
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Nhập địa chỉ email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
                disabled={isLoading}
              />
              <div className="error-message-container">
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
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
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
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
                  disabled={isLoading}
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

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
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

export default LoginPage;
