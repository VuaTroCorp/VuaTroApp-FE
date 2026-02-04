import "./inforDes.scss";
import { useState, useRef, useEffect } from "react";

function InforDes() {
    const [showPrice, setShowPrice] = useState(false);
    const [showArea, setShowArea] = useState(false);

    const [price, setPrice] = useState([0, 5000000]);
    const [area, setArea] = useState([20, 60]);

    // 👉 text cho input (cho phép nhập tay)
    const [priceText, setPriceText] = useState("");
    const [areaText, setAreaText] = useState("");

    const priceRef = useRef(null);
    const areaRef = useRef(null);

    // 👉 click ra ngoài thì đóng popup
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (priceRef.current && !priceRef.current.contains(e.target)) {
                setShowPrice(false);
            }
            if (areaRef.current && !areaRef.current.contains(e.target)) {
                setShowArea(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="info-desc">
            <h3 className="info-desc__title">II. Thông Tin Mô Tả</h3>

            {/* ===== GIÁ ===== */}
            <div className="form-row">
                <label>Giá Tiền (VNĐ):</label>

                <div className="input-group" ref={priceRef}>
                    <input
                        value={priceText}
                        onChange={(e) => setPriceText(e.target.value)}
                        onFocus={() => setShowPrice(false)}
                    />

                    <button
                        type="button"
                        className="outline-btn"
                        onClick={() => setShowPrice(!showPrice)}
                    >
                        Khoảng Giá
                    </button>

                    {showPrice && (
                        <div className="range-popup">
                            <div className="range-value">
                                <span>{price[0].toLocaleString()} đ</span>
                                <span>{price[1].toLocaleString()} đ</span>
                            </div>

                            <input
                                type="range"
                                min={0}
                                max={10000000}
                                step={500000}
                                value={price[0]}
                                onChange={(e) => {
                                    const newMin = +e.target.value;
                                    setPrice([newMin, price[1]]);
                                    setPriceText(
                                        `${newMin.toLocaleString()} - ${price[1].toLocaleString()} đ`
                                    );
                                }}
                            />

                            <input
                                type="range"
                                min={0}
                                max={10000000}
                                step={500000}
                                value={price[1]}
                                onChange={(e) => {
                                    const newMax = +e.target.value;
                                    setPrice([price[0], newMax]);
                                    setPriceText(
                                        `${price[0].toLocaleString()} - ${newMax.toLocaleString()} đ`
                                    );
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* ===== DIỆN TÍCH ===== */}
            <div className="form-row">
                <label>Diện Tích (M²):</label>

                <div className="input-group" ref={areaRef}>
                    <input
                        value={areaText}
                        onChange={(e) => setAreaText(e.target.value)}
                        onFocus={() => setShowArea(false)}
                    />

                    <button
                        type="button"
                        className="outline-btn"
                        onClick={() => setShowArea(!showArea)}
                    >
                        Khoảng Diện Tích
                    </button>

                    {showArea && (
                        <div className="range-popup">
                            <div className="range-value">
                                <span>{area[0]} m²</span>
                                <span>{area[1]} m²</span>
                            </div>

                            <input
                                type="range"
                                min={10}
                                max={200}
                                value={area[0]}
                                onChange={(e) => {
                                    const newMin = +e.target.value;
                                    setArea([newMin, area[1]]);
                                    setAreaText(`${newMin} - ${area[1]} m²`);
                                }}
                            />

                            <input
                                type="range"
                                min={10}
                                max={200}
                                value={area[1]}
                                onChange={(e) => {
                                    const newMax = +e.target.value;
                                    setArea([area[0], newMax]);
                                    setAreaText(`${area[0]} - ${newMax} m²`);
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* ===== TIÊU ĐỀ ===== */}
            <div className="form-row full">
                <label>Tên Tiêu Đề:</label>
                <input type="text" placeholder="Nhập Tiêu Đề Bài Đăng" />
            </div>

            {/* ===== NỘI DUNG ===== */}
            <div className="form-row full">
                <label>Nội Dung:</label>
                <textarea rows={6} placeholder="Nhập Nội Dung Bài Đăng" />
            </div>
        </div>
    );
}

export default InforDes;
