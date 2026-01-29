// src/features/Auth/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import logo from '../../assets/images/logo.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';
import bocongthuong from '../../assets/images/bocongthuong.png';
import './Login.scss';

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
    if (!/^(0|\+84)[1-9]\d{8,9}$/.test(formData.identifier) && !/\S+@\S+\.\S+/.test(formData.identifier)) {
      setError('Email hoặc số điện thoại không hợp lệ');
      return;
    }
    if (!formData.password) {
      setError('Vui lòng nhập mật khẩu');
      return;
    }
    if (formData.password.length < 6) {
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
      // TODO: Gọi API đăng ký của team
      // Ví dụ: await axios.post('/api/auth/register', formData);
      localStorage.setItem('token', 'demo-token'); // giả lập
      alert('Đăng ký thành công! Bạn có thể đăng nhập ngay.');
      navigate('/login'); // chuyển về trang đăng nhập sau khi đăng ký
    } catch (err) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page register-page">
      <div className="auth-container">
        {/* Bên trái - Background + Logo */}
        <div className="auth-left">
          <div className="brand">
            <img src={logo} alt="VUATROVN Logo" className="logo animated-logo" />
            <p className="slogan">Tìm nhà trọ tốt - Uy tín nhất!</p>
          </div>
        </div>

        {/* Bên phải - Form đăng ký */}
        <div className="auth-right">
          <h1>ĐĂNG KÝ TÀI KHOẢN VUATROVN</h1>
          <p className="subtitle">Tham gia ngay để tìm nhà trọ dễ dàng</p>

          <RegisterForm
            formData={formData}
            showPassword={showPassword}
            showConfirmPassword={showConfirmPassword}
            error={error}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
            togglePassword={() => setShowPassword(!showPassword)}
            toggleConfirmPassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <div className="auth-options">
            <p>
              Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập ngay</a>
            </p>
          </div>

          <div className="social-login">
            <p>Hoặc đăng ký bằng</p>
            <button className="google-btn">
              <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
              Tiếp tục với Google
            </button>
          </div>
        </div>
      </div>

      {/* Footer giống Login */}
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