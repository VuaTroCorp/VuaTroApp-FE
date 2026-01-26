import "./FilterBar.scss";
import { useRef, useState, useEffect } from "react";
import homeIcon from "../assets/icons/home.png";
import buildingIcon from "../assets/icons/building.png";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";

function FilterBar() {
    const listRef = useRef(null);

    const typeRef = useRef(null);
    const priceRef = useRef(null);

    const [showType, setShowType] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    const [price, setPrice] = useState([1000000, 5000000]);

    // SCROLL TAG
    const scrollLeft = () => {
        listRef.current.scrollLeft -= 200;
    };

    const scrollRight = () => {
        listRef.current.scrollLeft += 200;
    };

    // CLICK RA NGOÀI → ĐÓNG DROPDOWN
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                typeRef.current &&
                !typeRef.current.contains(e.target)
            ) {
                setShowType(false);
            }

            if (
                priceRef.current &&
                !priceRef.current.contains(e.target)
            ) {
                setShowPrice(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="filter-bar">
            {/* TITLE */}
            <h2 className="filter-title">Thuê Nhà Ở</h2>
            <p className="filter-subtitle">
                Có <strong>999</strong> Phòng Trọ Cho Thuê Tại Khánh Hòa 12/2025
            </p>

            {/* FILTER ACTIONS */}
            <div className="filter-actions">
                {/* LOẠI HÌNH */}
                <div className="filter-item" ref={typeRef}>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            setShowType(!showType);
                            setShowPrice(false);
                        }}
                    >
                        Loại Hình ▾
                    </button>

                    {showType && (
                        <div className="dropdown">
                            <div className="dropdown-item">🏢 Căn hộ</div>
                            <div className="dropdown-item">🏠 Phòng trọ</div>
                        </div>
                    )}
                </div>

                {/* GIÁ THUÊ */}
                <div className="filter-item" ref={priceRef}>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            setShowPrice(!showPrice);
                            setShowType(false);
                        }}
                    >
                        Giá Thuê ▾
                    </button>

                    {showPrice && (
                        <div className="dropdown price-dropdown">
                            <p className="price-text">
                                {price[0].toLocaleString()} đ –{" "}
                                {price[1].toLocaleString()} đ
                            </p>

                            <div className="range">
                                <input
                                    type="range"
                                    min="0"
                                    max="10000000"
                                    step="500000"
                                    value={price[0]}
                                    onChange={(e) =>
                                        setPrice([
                                            Math.min(+e.target.value, price[1]),
                                            price[1],
                                        ])
                                    }
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="10000000"
                                    step="500000"
                                    value={price[1]}
                                    onChange={(e) =>
                                        setPrice([
                                            price[0],
                                            Math.max(+e.target.value, price[0]),
                                        ])
                                    }
                                />
                            </div>

                            <button className="apply-btn">Áp dụng</button>
                        </div>
                    )}
                </div>

                {/* GẦN ĐÂY */}
                <button className="filter-btn">
                    Gần Đây <span className="location-icon">📍</span>
                </button>
            </div>

            {/* AREA */}
            <div className="filter-area">
                <span>Khu vực:</span>
                <button className="area-btn active">Phú Yên</button>
                <button className="area-btn">Nha Trang</button>
                <button className="area-btn">Cam Ranh</button>
                <button className="area-btn">Ninh Thuận</button>
            </div>

            {/* CATEGORY */}
            <div className="filter-category">
                <div className="category-item">
                    <img src={homeIcon} alt="Phòng trọ" />
                    <span>Phòng Trọ</span>
                </div>
                <div className="category-item">
                    <img src={buildingIcon} alt="Căn hộ" />
                    <span>Căn Hộ / Chung Cư</span>
                </div>
            </div>

            {/* KEYWORDS */}
            <div className="keyword-wrapper">
                <button className="arrow-btn left" onClick={scrollLeft}>
                    <img src={arrowLeft} alt="Left" />
                </button>

                <div className="filter-tags" ref={listRef}>
                    <button>Thuê Trọ Nha Trang</button>
                    <button>Trọ Ninh Thuận</button>
                    <button>Phòng Trọ Cam Ranh</button>
                    <button>Thuê Trọ Phú Yên</button>
                    <button>Phòng Trọ Khánh Hòa</button>
                    <button>Trọ Giá Rẻ</button>
                </div>

                <button className="arrow-btn right" onClick={scrollRight}>
                    <img src={arrowRight} alt="Right" />
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
