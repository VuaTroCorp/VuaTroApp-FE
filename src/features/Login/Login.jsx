import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import logo from '../../assets/images/logo.png';
import appstore from '../../assets/images/appstore.png';
import googleplay from '../../assets/images/googleplay.png';
import bocongthuong from '../../assets/images/bocongthuong.png';


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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.identifier || !formData.password) {
      setError('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem('token', 'demo-token');
      navigate('/home');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-page login-page">
      <div className="auth-container">

        <div className="auth-left">
          <img src={logo} alt="logo" className="logo" />
          <p>Tìm nhà trọ tốt – Uy tín nhất</p>
        </div>

        <div className="auth-right">
          <h1>Đăng Nhập</h1>

          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="identifier"
              placeholder="Email hoặc SĐT"
              value={formData.identifier}
              onChange={handleChange}
            />

            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>

            <label className="remember">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Ghi nhớ đăng nhập
            </label>

            <button disabled={loading}>
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>

          <p className="switch">
            Chưa có tài khoản?
            <span onClick={() => navigate('/register')}> Đăng ký</span>
          </p>
        </div>
      </div>

      <button type="submit" className="btn-login" disabled={loading}>
        {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
      </button>
  </div>
  );
};

export default Login;