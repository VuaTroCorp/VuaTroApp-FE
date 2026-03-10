import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import logo from "assets/images/logo.png";
import { useAuth } from "hooks/useAuth";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Vui lòng nhập tên tài khoản";
    } else if (formData.username.length < 3) {
      newErrors.username = "Tên tài khoản phải có ít nhất 3 ký tự";
    }

    if (!formData.email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Bạn cần chấp nhận điều khoản";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await signup({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });

        // Xử lý response thành công
        toast.success(
          response?.message ||
            "Đăng ký thành công. Vui lòng kiểm tra email để xác thực.",
        );
        setTimeout(() => navigate("/login"), 2000);
      } catch (error) {
        // Xử lý error từ backend
        const errorMessage =
          error.response?.data?.message ||
          "Đăng ký thất bại. Vui lòng thử lại.";

        // Hiển thị toast error
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-sidebar">
          <img src={logo} alt="Vuatrovn" className="logo-img" />
        </div>
        <div className="auth-content">
          <h2 className="register-title">Đăng Ký Tài Khoản Mới</h2>
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>
                Tên Tài Khoản <span className="required">*</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Nhập tên tài khoản"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? "input-error" : ""}
                disabled={isLoading}
              />
              <div className="error-message-container">
                {errors.username && (
                  <span className="error-text">{errors.username}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>
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
              <label>
                Mật Khẩu <span className="required">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
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
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <div className="error-message-container">
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>
                Xác Nhận Mật Khẩu <span className="required">*</span>
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? "input-error" : ""}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
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

            <div className="terms-row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span>Chấp Nhận Điều Khoản</span>
              </label>
              <span className="blue-link" onClick={() => navigate("/login")}>
                Tiếp Tục Đăng Nhập
              </span>
            </div>
            <div className="error-message-container checkbox-error">
              {errors.acceptTerms && (
                <span className="error-text">{errors.acceptTerms}</span>
              )}
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng Ký"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
