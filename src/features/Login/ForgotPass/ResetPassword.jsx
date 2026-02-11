import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "assets/images/logo.png";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            setError("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp");
            return;
        }

        setError("");

        // TODO: call API reset password
        // resetPassword(state?.identifier, password)

        // giả lập thành công
        navigate("/login");
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
                    <h1>ĐỔI MẬT KHẨU</h1>
                    <p className="subtitle">
                        Vui lòng nhập mật khẩu mới của bạn
                    </p>

                    <form className="auth-form" onSubmit={handleReset}>
                        <div className="form-group">
                            <label>Mật khẩu mới</label>
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu mới"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                                className={error ? "input-error shake" : ""}
                            />
                        </div>

                        <div className="form-group">
                            <label>Xác nhận mật khẩu</label>
                            <input
                                type="password"
                                placeholder="Nhập lại mật khẩu mới"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
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
                        <span onClick={() => navigate("/login")}>
                            Quay lại đăng nhập
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
