// src/features/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';

// Import ảnh từ src/assets
import logo from '../../assets/images/logo.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';
import bocongthuong from '../../assets/images/bocongthuong.png';

import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
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
    setLoading(true);

    // Validation cơ bản
    if (!formData.identifier.trim() || !formData.password) {
      setError('Vui lòng nhập đầy đủ thông tin!');
      setLoading(false);
      return;
    }

    try {
      // TODO: Thay bằng API đăng nhập thực tế của team
      // Ví dụ:
      // const res = await axios.post('/api/auth/login', formData);
      // localStorage.setItem('token', res.data.token);

      // Giả lập thành công
      localStorage.setItem('token', 'demo-jwt-token');
      alert('Đăng nhập thành công!');
      navigate('/home'); // Chuyển sang trang home
    } catch (err) {
      setError('Đăng nhập thất bại. Kiểm tra lại thông tin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* Bên trái - Background + Logo */}
        <div className="auth-left">
          <div className="brand">
            <img 
              src={logo} 
              alt="VUATROVN Logo" 
              className="logo animated-logo" 
            />
            <p className="slogan">Tìm nhà trọ tốt - Uy tín nhất!</p>
          </div>
        </div>

        {/* Bên phải - Form */}
        <div className="auth-right">
          <h1>CHÀO MỪNG BẠN ĐẾN VỚI VUATROVN</h1>
          <p className="subtitle">Đăng nhập để bắt đầu tìm nhà trọ ưng ý</p>

          <LoginForm
            formData={formData}
            showPassword={showPassword}
            error={error}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
            togglePassword={() => setShowPassword(!showPassword)}
          />

          <div className="auth-options">
            <a href="/register" className="register-link">
              Chưa có tài khoản? <strong>Đăng ký ngay</strong>
            </a>
            <a href="#" className="forgot-password">Quên mật khẩu?</a>
          </div>

          <div className="social-login">
            <p>Hoặc đăng nhập bằng</p>
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

      {/* Footer */}
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

export default Login;