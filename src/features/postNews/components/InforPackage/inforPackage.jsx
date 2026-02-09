import "./inforPackage.scss";
import { useNavigate } from "react-router-dom";

function InforPackage() {
    const navigate = useNavigate();

    // mock data (sau này lấy từ BE)
    const accountType = "FREE";
    const maxPosts = 3;
    const usedPosts = 0;

    return (
        <div className="info-package">
            <h3 className="section-title">IV. Thông tin gói</h3>

            <div className="package-box">
                {/* LEFT */}
                <div className="package-info">
                    <p>
                        Tài khoản hiện tại:{" "}
                        <b className="free">{accountType}</b>
                    </p>
                    <p>
                        Số bài đăng cho phép:{" "}
                        <b>{maxPosts}</b>
                    </p>
                    <p>
                        Đã đăng:{" "}
                        <b>
                            {usedPosts}/{maxPosts}
                        </b>
                    </p>
                </div>

                {/* RIGHT */}
                <div className="package-action">
                    <button
                        className="upgrade-btn"
                        onClick={() => navigate("/upgrade-account")}
                    >
                        🚀 Nâng cấp tài khoản
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InforPackage;
