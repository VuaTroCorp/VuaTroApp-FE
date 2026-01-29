import React from 'react';

const RegisterForm = ({
  formData,
  showPassword,
  showConfirmPassword,
  error,
  loading,
  onChange,
  onSubmit,
  togglePassword,
  toggleConfirmPassword,
}) => {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>Họ và Tên</label>
        <input
          type="text"
          name="fullName"
          placeholder="Nhập họ và tên"
          value={formData.fullName}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Email hoặc Số Điện Thoại</label>
        <input
          type="text"
          name="identifier"
          placeholder="Nhập email hoặc số điện thoại"
          value={formData.identifier}
          onChange={onChange}
          required
        />
      </div>

      <div className="form-group password-group">
        <label>Mật Khẩu</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={onChange}
          required
        />
        <span className="toggle-icon" onClick={togglePassword}>
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>

      <div className="form-group password-group">
        <label>Xác Nhận Mật Khẩu</label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={onChange}
          required
        />
        <span className="toggle-icon" onClick={toggleConfirmPassword}>
          {showConfirmPassword ? '🙈' : '👁️'}
        </span>
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={onChange}
          id="agreeTerms"
          required
        />
        <label htmlFor="agreeTerms">
          Tôi đồng ý với <a href="#">Điều khoản sử dụng</a> và <a href="#">Chính sách bảo mật</a>
        </label>
      </div>

      <button type="submit" className="btn-register" disabled={loading}>
        {loading ? 'Đang đăng ký...' : 'Đăng Ký'}
      </button>
    </form>
  );
};

export default RegisterForm;