import "./Footer.scss";
import logo from "../../assets/images/logo.png";
import appstore from "../../assets/images/appstore.png";
import googleplay from "../../assets/images/googleplay.png";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";
import boCongThuong from "../../assets/images/bocongthuong.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                {/* LEFT */}
                <div className="footer-col left">
                    <div className="brand-row">
                        <img src={logo} alt="VuaTroVN" className="logo" />
                        <h3>
                            TÌM NƠI Ở TỐT UY TÍN NHẤT <br />
                            TRÊN <span>VUATROVN</span>
                        </h3>
                    </div>

                    <div className="store">
                        <img src={appstore} alt="App Store" />
                        <img src={googleplay} alt="Google Play" />
                    </div>
                </div>


                {/* CENTER */}
                <div className="footer-col center">
                    <h4>Về Nhà Tốt</h4>
                    <ul>
                        <li>Chính Sách Bảo Mật</li>
                        <li>Giải Quyết Tranh Chấp</li>
                        <li>Điều Khoản Sử Dụng</li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="footer-col right">
                    <h4>Liên Kết</h4>
                    <div className="social">
                        <img src={linkedin} alt="LinkedIn" />
                        <img src={facebook} alt="Facebook" />
                    </div>

                    <p>Email: <strong>Trogup@VuaTro.Com</strong></p>
                    <p>CSKH: <strong>987654 (1.000đ/Phút)</strong></p>
                    <p>Địa Chỉ: <strong>ABC XYZ Nha Trang</strong></p>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="footer-bottom">
                <div className="copyright">
                    <p>Copyright © 2025 VuaTroVN</p>
                    <p>
                        Giấy Chứng Nhận Đăng Ký Kinh Doanh Số ............. Do ............. Cấp Ngày .............
                    </p>
                    <p>
                        Giấy Phép Thiết Lập Trang Thông Tin Điện Tử Tổng Hợp Trên Mạng Số ............. Do ............. Cấp Ngày .............
                    </p>
                    <p>
                        Trang Thông Tin Điện Tử Tổng Hợp VuaTroVN Hiện Đang Trong Quá Trình Xây Dựng Và Hoàn Thiện Hệ Thống.
                    </p>
                    <p>Nếu Cần Hỗ Trợ, Vui Lòng Liên Hệ Hotline: .............</p>
                </div>

                <img src={boCongThuong} alt="Bộ Công Thương" className="bct" />
            </div>
        </footer>
    );
};

export default Footer;
