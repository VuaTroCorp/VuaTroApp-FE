import background from "assets/images/Background.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { authAPI } from "lib/apiService";
import { Key, Eye, EyeOff } from "lucide-react";
import "./ResetPasswordPage.scss";

// Preload ảnh nền để không bị chớp trắng
const preloadImage = new Image();
preloadImage.src = background;

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get("resetToken");
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    if (!resetToken) {
      toast.error("Thiếu reset token", {
        containerId: "errors",
        autoClose: false,
      });
      setVerifying(false);
      return;
    }

    let cancelled = false;
    setVerifying(true);

    authAPI
      .verifyResetToken(resetToken)
      .catch((err) => {
        if (cancelled) return;
        const message =
          err?.response?.data?.message || "Token không hợp lệ hoặc đã hết hạn";
        toast.error(message, { containerId: "errors", autoClose: false });
      })
      .finally(() => {
        if (!cancelled) setVerifying(false);
      });

    return () => {
      cancelled = true;
    };
  }, [resetToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Xóa lỗi khi người dùng bắt đầu nhập lại
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu mới";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận lại mật khẩu";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!resetToken) {
        toast.error("Thiếu reset token", {
          containerId: "errors",
          autoClose: false,
        });
        return;
      }

      try {
        setLoading(true);
        toast.dismiss({ containerId: "errors" });
        await authAPI.changePassword({
          resetToken,
          newPassword: formData.password,
          comfirmPassword: formData.confirmPassword,
        });

        toast.success("Đổi mật khẩu thành công!", {
          containerId: "default",
          autoClose: 5000,
        });
        navigate("/login");
      } catch (err) {
        const message = err?.response?.data?.message || "Đổi mật khẩu thất bại";
        toast.error(message, { containerId: "errors", autoClose: false });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="reset-page">
      <div className="reset-card">
        {/* Vòng tròn khóa */}
        <div className="icon-badge">
          <Key size={32} color="#000" strokeWidth={2.5} />
        </div>

        <h2 className="reset-title">Quên Mật khẩu?</h2>

        {verifying ? (
          <div className="verifying-box">
            <div className="verifying-spinner" />
            <p className="verifying-text">Đang xác minh liên kết...</p>
          </div>
        ) : (
          <form className="reset-form" onSubmit={handleSubmit}>
            {/* Mật khẩu mới */}
            <div className="form-group">
              <label>Nhập mật khẩu mới</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Mật khẩu mới"
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

            {/* Nhập lại mật khẩu */}
            <div className="form-group">
              <label>Nhập lại mật khẩu</label>
              <div className="password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Nhập lại mật khẩu"
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
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              <div className="error-message-container">
                {errors.confirmPassword && (
                  <span className="error-text">{errors.confirmPassword}</span>
                )}
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Đang đổi mật khẩu..." : "Xác Nhận"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
