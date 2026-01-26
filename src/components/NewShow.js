import React from "react";
import { useState } from "react";
import "./NewShow.scss";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import down from "../assets/icons/down.png";
import cupLeft from "../assets/icons/skagent_left.svg";
import cupRight from "../assets/icons/skagent_right.svg";
function NewShow() {


    const pages = [1, 2, 3, 4, 5, 6, 7];
    const currentPage = 1;


    const keywords = [
        "Thuê Phòng Ninh Thuận Dưới 3 Triệu",
        "Thuê Trọ Vĩnh Hải",
        "Thuê Phòng Ninh Thuận Dưới 1 Triệu",
        "Thuê Phòng Vĩnh Hòa",
        "Thuê Phòng Ninh Thuận Dưới 5 Triệu",
        "Khu Đô Thị VCN Phước Hải",
    ];


    const topPosts = [
        { name: "Xuân Trường - Phòng Trọ Căn...", count: 8 },
        { name: "Xuân Trường - Phòng Trọ Căn...", count: 6 },
        { name: "Xuân Trường - Phòng Trọ Căn...", count: 3 },
        { name: "Xuân Trường - Phòng Trọ Căn...", count: 2 },
        { name: "Xuân Trường - Phòng Trọ Căn...", count: 1 }
    ];



    const [showMorePrice, setShowMorePrice] = useState(false);
    const [showMoreArea, setShowMoreArea] = useState(false);
    const [showMoreNear, setShowMoreNear] = useState(false);



    const [expand, setExpand] = useState(false);

    return (
        <div className="newshow-layout">
            {/* LEFT */}
            <div className="newshow-main">
                {/* SORT BAR */}
                <div className="sort-bar">
                    <button className="sort-btn">
                        Tin Mới Nhất <span>↓</span>
                    </button>

                    <button className="view-btn">
                        Dạng Lưới
                        <span className="grid-icon">▦</span>
                    </button>
                </div>

                {/* POST ITEM */}
                <div className="post-item">
                    <div className="post-images">
                        <div className="img img-1">ẢNH 279 × 222</div>
                        <div className="img img-2">ẢNH 279 × 222</div>

                        <div className="right-images">
                            <div className="img img-3">ẢNH 266 × 116</div>

                            <div className="bottom-images">
                                <div className="img img-4">ẢNH 131 × 102</div>
                                <div className="img img-5 more">
                                    ẢNH 131 × 102
                                    <span className="overlay">+2</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="post-content">
                        <span className="badge">Tin Ưu Tiên</span>
                        <h3>PHÒNG CHO THUÊ NINH THUẬN</h3>

                        <p className="price">
                            3,8 Triệu Đồng / Tháng <span>18m²</span>
                        </p>

                        <p className="location">📍 Phường Phan Rang (Phủ Hà)</p>

                        <div className="author">
                            <span>👤 Xuân Trường</span>
                            <span>📁 2 Tin Đăng</span>
                        </div>
                    </div>

                    <div className="favorite">♡</div>
                </div>

                {/* POST ITEM 2*/}
                <div className="post-item2">
                    <div className="post-images2">
                        <div className="img2 big2">ẢNH 279 x 222</div>
                    </div>

                    <div className="post-content2">
                        <h3>Phòng Trọ Cho Thuê Nha Trang</h3>

                        <p className="price2">
                            1,8 Triệu Đồng / Tháng <span>17m²</span>
                        </p>

                        <p className="location2">📍 1299 đường 23/10, thôn Võ Cạnh, phường Tây Nha Trang, tỉnh Khánh Hòa</p>

                        <div className="author2">
                            <span>👤 Xuân Trường</span>
                            <span>📁 2 Tin Đăng</span>
                        </div>
                    </div>

                    <div className="favorite2">♡</div>
                </div>

                {/* POST ITEM */}
                <div className="post-item">
                    <div className="post-images">
                        <div className="img img-1">ẢNH 279 × 222</div>
                        <div className="img img-2">ẢNH 279 × 222</div>

                        <div className="right-images">
                            <div className="img img-3">ẢNH 266 × 116</div>

                            <div className="bottom-images">
                                <div className="img img-4">ẢNH 131 × 102</div>
                                <div className="img img-5 more">
                                    ẢNH 131 × 102
                                    <span className="overlay">+2</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="post-content">
                        <span className="badge">Tin Ưu Tiên</span>
                        <h3>PHÒNG CHO THUÊ NINH THUẬN</h3>

                        <p className="price">
                            3,8 Triệu Đồng / Tháng <span>18m²</span>
                        </p>

                        <p className="location">📍 Phường Phan Rang (Phủ Hà)</p>

                        <div className="author">
                            <span>👤 Xuân Trường</span>
                            <span>📁 2 Tin Đăng</span>
                        </div>
                    </div>

                    <div className="favorite">♡</div>
                </div>

                {/* POST ITEM 2*/}
                <div className="post-item2">
                    <div className="post-images2">
                        <div className="img2 big2">ẢNH 279 x 222</div>
                    </div>

                    <div className="post-content2">
                        <h3>Phòng Trọ Cho Thuê Nha Trang</h3>

                        <p className="price2">
                            1,8 Triệu Đồng / Tháng <span>17m²</span>
                        </p>

                        <p className="location2">📍 1299 đường 23/10, thôn Võ Cạnh, phường Tây Nha Trang, tỉnh Khánh Hòa</p>

                        <div className="author2">
                            <span>👤 Xuân Trường</span>
                            <span>📁 2 Tin Đăng</span>
                        </div>
                    </div>

                    <div className="favorite2">♡</div>
                </div>
                {/* PAGINATION */}
                <div className="pagination-bar">
                    <button className="page-arrow">
                        <img src={arrowLeft} alt="Prev" />
                    </button>

                    {pages.map((page) => (
                        <button
                            key={page}
                            className={`page-number ${page === currentPage ? "active" : ""}`}
                        >
                            {page}
                        </button>
                    ))}

                    <button className="page-arrow">
                        <img src={arrowRight} alt="Next" />
                    </button>
                </div>

                {/*LOOKING KEYS*/}
                <div className="left-sort-bar">
                    <h3 className="left-sort-title">Tìm Kiếm Theo Từ Khóa</h3>

                    <div className="left-sort-keywords">
                        {keywords.map((item, index) => (
                            <button key={index} className="keyword-item">
                                {item}
                            </button>
                        ))}
                    </div>
                </div>


                {/* END LEFT */}
                <div className="left-info">
                    <h3>Thông Tin Cho Thuê Nhà Trọ, Phòng Trọ Nha Trang</h3>
                    <div className="divider"></div>

                    <div className={`content ${expand ? "show" : ""}`}>
                        <p>
                            <strong>Cho Thuê Phòng Trọ, Nhà Trọ Thành Phố Nha Trang</strong> – Cập
                            Nhật Tháng 12/2025. Thành phố Nha Trang là không gian đô thị sôi động,
                            nơi tập trung rất nhiều cơ quan, trường học, doanh nghiệp trong và
                            ngoài nước...
                        </p>

                        <p>
                            Thị trường cho thuê phòng trọ tại Nha Trang hiện nay rất đa dạng về phân khúc, từ phòng trọ giá rẻ cho sinh viên, công nhân cho đến các căn phòng khép kín, phòng trọ cao cấp, căn hộ mini đầy đủ tiện nghi. Các khu vực gần trường đại học như Đại học Nha Trang, Cao đẳng Du lịch, Cao đẳng Kỹ thuật, hay các khu vực đông dân cư, gần chợ, bệnh viện và khu công nghiệp luôn thu hút sự quan tâm lớn từ người thuê nhà.

                            Bên cạnh yếu tố vị trí, người thuê ngày càng chú trọng đến chất lượng phòng trọ như diện tích sử dụng, mức độ an ninh, hệ thống điện nước, chỗ để xe, internet, cũng như môi trường sống xung quanh. Nhiều chủ nhà trọ tại Nha Trang đã đầu tư nâng cấp cơ sở vật chất, xây dựng phòng trọ mới, sạch sẽ, thoáng mát, có gác lửng, nhà vệ sinh riêng nhằm đáp ứng tốt hơn nhu cầu của người thuê.

                            Giá cho thuê phòng trọ tại Nha Trang cũng khá linh hoạt, dao động tùy theo khu vực, diện tích và tiện nghi đi kèm. Người thuê có thể dễ dàng tìm được phòng trọ phù hợp với ngân sách của mình, từ mức giá bình dân cho sinh viên đến các lựa chọn cao cấp hơn dành cho người đi làm hoặc gia đình nhỏ. Việc tìm kiếm phòng trọ hiện nay cũng thuận tiện hơn nhờ các nền tảng trực tuyến, giúp người thuê nhanh chóng tiếp cận thông tin, hình ảnh và liên hệ trực tiếp với chủ trọ.

                            Với sự phát triển không ngừng của thành phố, thị trường cho thuê phòng trọ, nhà trọ tại Nha Trang hứa hẹn sẽ tiếp tục sôi động trong thời gian tới, mang đến nhiều lựa chọn đa dạng và phù hợp cho mọi đối tượng có nhu cầu sinh sống, học tập và làm việc tại đây.
                        </p>
                    </div>

                    <div className="see-more" onClick={() => setExpand(!expand)}>
                        <span>{expand ? "Thu gọn" : "Xem thêm"}</span>
                        <img
                            src={down}
                            alt="arrow"
                            className={expand ? "rotate" : ""}
                        />
                    </div>

                </div>
            </div>
            {/* RIGHT SIDEBAR */}
            <div className="right-sidebar">
                {/* TOP POST */}
                <div className="sidebar-card">
                    <h4 className="sidebar-title with-icon">
                        <img src={cupLeft} alt="left" />
                        <span>TOP TIN ĐĂNG</span>
                        <img src={cupRight} alt="right" />
                    </h4>


                    <div className="top-list">
                        {topPosts.map((item, index) => (
                            <div className="top-item" key={index}>
                                <div className="top-avatar"></div>
                                <div className="top-info">
                                    <p>{item.name}</p>
                                    <span>{item.count} Tin Đăng Phù Hợp</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="top-pagination">
                        <button>
                            <img src={arrowLeft} alt="left" />
                        </button>

                        <div className="dots">
                            <span></span>
                            <span className="active"></span>
                            <span></span>
                        </div>

                        <button>
                            <img src={arrowRight} alt="right" />
                        </button>
                    </div>
                </div>

                {/* PRICE FILTER */}
                <div className="sidebar-card">
                    <h4 className="sidebar-title">
                        Lọc Theo Khoảng Giá
                        <span className="collapse-icon">⌃</span>
                    </h4>

                    <ul className="price-filter">
                        <li>Giá Dưới 1 Triệu</li>
                        <li className="active">Giá 1 - 2 Triệu</li>
                        <li>Giá 3 - 5 Triệu</li>

                        {showMorePrice && (
                            <>
                                <li>Giá 5 - 7 Triệu</li>
                                <li>Giá 7 - 10 Triệu</li>
                                <li>Giá Trên 10 Triệu</li>
                            </>
                        )}
                    </ul>

                    <div
                        className="see-more"
                        onClick={() => setShowMorePrice(!showMorePrice)}
                    >
                        <span>{showMorePrice ? "Thu gọn" : "Xem thêm"}</span>
                        <img
                            src={down}
                            alt="down"
                            className={`arrow ${showMorePrice ? "open" : ""}`}
                        />
                    </div>
                </div>



                <div className="sidebar-card">
                    <h4 className="sidebar-title">
                        Lọc Theo Diện Tích
                        <span className="collapse-icon">⌃</span>
                    </h4>

                    <ul className="price-filter">
                        <li>Diện Tích Dưới 50m²</li>
                        <li className="active">Diện Tích 50 - 100m²</li>
                        <li>Diện Tích Trên 100m²</li>

                        {showMoreArea && (
                            <>
                                <li>Diện Tích 100 - 150m²</li>
                                <li>Diện Tích 150 - 200m²</li>
                                <li>Diện Tích Trên 200m²</li>
                            </>
                        )}
                    </ul>

                    <div
                        className="see-more"
                        onClick={() => setShowMoreArea(!showMoreArea)}
                    >
                        <span>{showMoreArea ? "Thu gọn" : "Xem thêm"}</span>
                        <img
                            src={down}
                            alt="down"
                            className={`arrow ${showMoreArea ? "open" : ""}`}
                        />
                    </div>
                </div>


                <div className="sidebar-card">
                    <h4 className="sidebar-title">
                        Phòng Trọ Gần Đây
                        <span className="collapse-icon">⌃</span>
                    </h4>

                    <ul className="price-filter">
                        <li>Phòng Trọ Gần Cầu Giấy</li>
                        <li className="active">Phòng Trọ Gần Đại Học</li>
                        <li>Phòng Trọ Gần Trung Tâm</li>

                        {showMoreNear && (
                            <>
                                <li>Phòng Trọ Gần Bến Xe</li>
                                <li>Phòng Trọ Gần Khu Công Nghiệp</li>
                                <li>Phòng Trọ Gần Bệnh Viện</li>
                            </>
                        )}
                    </ul>

                    <div
                        className="see-more"
                        onClick={() => setShowMoreNear(!showMoreNear)}
                    >
                        <span>{showMoreNear ? "Thu gọn" : "Xem thêm"}</span>
                        <img
                            src={down}
                            alt="down"
                            className={`arrow ${showMoreNear ? "open" : ""}`}
                        />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default NewShow;
