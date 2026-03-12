import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png";

const VerifyOtp = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const identifier = state?.identifier;

    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!otp.trim()) {
            setError("Vui lòng nhập mã xác nhận");
            return;
        }

        setError("");

        // TODO: gọi API verify OTP
        // verifyOtp(identifier, otp)

        // giả lập đúng OTP
        navigate("/reset-password", {
            state: { identifier, otp },
        });
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                {/* LEFT */}
                <div className="auth-left">
                    <div className="brand">
                        <img src={logo} alt="logo" className="logo" />
                        <p className="slogan">
                            Tìm nhà trọ tốt - Uy tín nhất!
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="auth-right">
                    <h1>KHÔI PHỤC MẬT KHẨU</h1>
                    <p className="subtitle">
                        Nhập mã xác nhận đã được gửi tới{" "}
                        <strong>{identifier}</strong>
                    </p>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Mã xác nhận</label>
                            <input
                                type="text"
                                placeholder="Nhập mã OTP"
                                value={otp}
                                onChange={(e) => {
                                    setOtp(e.target.value);
                                    setError("");
                                }}
                                className={error ? "input-error shake" : ""}
                            />

                            {error && (
                                <span className="field-error">{error}</span>
                            )}
                        </div>

                        <button type="submit" className="btn-login">
                            Xác nhận
                        </button>
                    </form>

                    <div className="auth-options">
                        <span onClick={() => navigate("/forgot-password")}>
                            Quay lại
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyOtp;
