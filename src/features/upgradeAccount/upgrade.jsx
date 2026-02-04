import "./upgrade.scss";
import { useNavigate } from "react-router-dom";

function UpgradeAccount() {
    const navigate = useNavigate();

    return (
        <div className="upgrade-page">
            {/* nút đóng */}
            <button
                className="close-btn"
                onClick={() => navigate(-1)}
            >
                ✕
            </button>

            <h2>Nâng cấp tài khoản</h2>

            <div className="plan-wrapper">
                {/* FREE */}
                <div className="plan free">
                    <h3>Free</h3>
                    <p>✔ Đăng tối đa 3 bài</p>
                    <p>✖ Không upload video</p>
                    <p className="price">Miễn phí</p>
                </div>

                {/* PRO */}
                <div className="plan pro">
                    <h3>Pro</h3>
                    <p>✔ Đăng nhiều bài hơn</p>
                    <p>✔ Upload video</p>
                    <p>✔ Ưu tiên hiển thị</p>
                    <p className="price">Từ 500.000 VNĐ</p>
                    <button>Nâng cấp ngay</button>
                </div>
            </div>
        </div>
    );
}

export default UpgradeAccount;
