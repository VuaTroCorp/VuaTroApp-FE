import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const [identifier, setIdentifier] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!identifier.trim()) {
            setError("Vui lòng nhập Email hoặc SĐT");
            return;
        }

        setError("");

        // giả lập gọi API
        const res = { success: true };

        if (res.success) {
            navigate("/verify-otp", {
                state: { identifier },
            });
        }
    };


    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* LEFT */}
                <div className="auth-left">
                    <div className="brand">
                        <img src={logo} alt="logo" className="logo" />
                        <p className="slogan">Tìm nhà trọ tốt - Uy tín nhất!</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="auth-right">
                    <h1>QUÊN MẬT KHẨU</h1>
                    <p className="subtitle">
                        Nhập Email hoặc SĐT để nhận hướng dẫn đặt lại mật khẩu
                    </p>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email hoặc SĐT</label>
                            <input
                                type="text"
                                placeholder="Nhập email hoặc số điện thoại"
                                value={identifier}
                                onChange={(e) => {
                                    setIdentifier(e.target.value);
                                    setError("");
                                    setSuccess("");
                                }}
                                className={error ? "input-error shake" : ""}
                            />

                            {error && (
                                <span className="field-error">{error}</span>
                            )}

                            {success && (
                                <span className="field-success">
                                    {success}
                                </span>
                            )}
                        </div>

                        <button type="submit" className="btn-login">
                            Gửi yêu cầu
                        </button>
                    </form>

                    <div className="auth-options">
                        <span onClick={() => navigate("/login")}>
                            Quay lại đăng nhập
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
