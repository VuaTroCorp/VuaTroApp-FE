import React from 'react';

const LoginForm = ({
  formData,
  showPassword,
  error,
  loading,
  onChange,
  onSubmit,
  togglePassword,
}) => {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      {error && <div className="error-message">{error}</div>}

      <div className="form-group">
        <label>Email hoặc Số Điện Thoại</label>
        <input
          type="text"
          name="identifier"
          placeholder="Nhập email hoặc số điện thoại"
          value={formData.identifier}
          onChange={onChange}
          required
          autoComplete="username"
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
          autoComplete="current-password"
        />
        <span className="toggle-icon" onClick={togglePassword}>
          {showPassword ? '🙈' : '👁️'}
        </span>
      </div>

      <div className="form-group checkbox">
        <input
          type="checkbox"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={onChange}
          id="rememberMe"
        />
        <label htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
      </div>

      <button type="submit" className="btn-login" disabled={loading}>
        {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
      </button>
    </form>
  );
};

export default LoginForm;