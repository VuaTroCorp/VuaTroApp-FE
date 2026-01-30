import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';
import bocongthuong from '../../assets/images/bocongthuong.png';

import './Login.scss'; // dùng chung style với Login

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    identifier: '', // email hoặc số điện thoại
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.fullName.trim()) {
      setError('Vui lòng nhập họ và tên');
      return;
    }

    if (!formData.identifier) {
      setError('Vui lòng nhập email hoặc số điện thoại');
      return;
    }

    const isPhone = /^(0|\+84)[1-9]\d{8,9}$/.test(formData.identifier);
    const isEmail = /\S+@\S+\.\S+/.test(formData.identifier);

    if (!isPhone && !isEmail) {
      setError('Email hoặc số điện thoại không hợp lệ');
      return;
    }

    if (!formData.password || formData.password.length < 6) {
      setError('Mật khẩu phải ít nhất 6 ký tự');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu xác nhận không khớp');
      return;
    }

    if (!formData.agreeTerms) {
      setError('Bạn cần đồng ý với điều khoản sử dụng');
      return;
    }

    setLoading(true);

    try {
      // TODO: gọi API đăng ký thật
      localStorage.setItem('token', 'demo-token');
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch (err) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page register-page">
      <div className="auth-container">

        {/* LEFT */}
        <div className="auth-left">
          <div className="brand">
            <img src={logo} alt="VUATROVN Logo" className="logo animated-logo" />
            <p className="slogan">Tìm nhà trọ tốt - Uy tín nhất!</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="auth-right">
          <h1>ĐĂNG KÝ TÀI KHOẢN VUATROVN</h1>
          <p className="subtitle">Tham gia ngay để tìm nhà trọ dễ dàng</p>

          {/* ===== FORM REGISTER ===== */}
          <form onSubmit={handleSubmit} className="auth-form">
            {error && <div className="error-message">{error}</div>}

            <div className="form-group">
              <label>Họ và Tên</label>
              <input
                type="text"
                name="fullName"
                placeholder="Nhập họ và tên"
                value={formData.fullName}
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
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
                onChange={handleChange}
                required
              />
              <span
                className="toggle-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <div className="form-group checkbox">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                id="agreeTerms"
              />
              <label htmlFor="agreeTerms">
                Tôi đồng ý với <a href="#">Điều khoản sử dụng</a> và{' '}
                <a href="#">Chính sách bảo mật</a>
              </label>
            </div>

            <button type="submit" className="btn-register" disabled={loading}>
              {loading ? 'Đang đăng ký...' : 'Đăng Ký'}
            </button>
          </form>

          <div className="auth-options">
            <p>
              Đã có tài khoản?{' '}
              <span
                className="login-link"
                onClick={() => navigate('/login')}
              >
                Đăng nhập ngay
              </span>
            </p>
          </div>

          <div className="social-login">
            <p>Hoặc đăng ký bằng</p>
            <button className="google-btn">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
              />
              Tiếp tục với Google
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="auth-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="VUATROVN" />
          </div>

          <div className="badges">
            <img src={appstore} alt="App Store" />
            <img src={googleplay} alt="Google Play" />
          </div>

          <div className="footer-links">
            <a href="#">Chính Sách Bảo Mật</a> •
            <a href="#">Giải Quyết Tranh Chấp</a> •
            <a href="#">Điều Khoản Sử Dụng</a>
          </div>

          <div className="contact">
            <p>Email: <strong>Trogiup@VuaTro.Com</strong></p>
            <p>CSKH: 987 654 (1.000đ/phút)</p>
            <p>Địa chỉ: ABC XYZ Nha Trang</p>
          </div>
        </div>

        <div className="certified">
          <img src={bocongthuong} alt="Đã đăng ký Bộ Công Thương" />
        </div>
      </footer>
    </div>
  );
};

export default Register;
