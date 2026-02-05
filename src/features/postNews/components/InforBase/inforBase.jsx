import { useState } from "react";
import "./inforBase.scss";
import GOOGLE from "../Google/GOOGLE.jsx";
import { useEffect } from "react";
function InforBase() {
    const [type, setType] = useState("house"); // house | apartment

    //APT khu vực
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");


    //Load Tỉnh
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then(res => res.json())
            .then(data => setProvinces(data));
    }, []);

    //Load Quận Huyện
    const handleProvinceChange = async (e) => {
        const code = e.target.value;
        setProvince(code);
        setDistrict("");
        setWard([]);
        setWards([]);

        if (!code) return;

        const res = await fetch(
            `https://provinces.open-api.vn/api/p/${code}?depth=2`
        );
        const data = await res.json();
        setDistricts(data.districts);
    };


    //Load Xã Phường
    const handleDistrictChange = async (e) => {
        const code = e.target.value;
        setDistrict(code);
        setWard("");

        if (!code) return;

        const res = await fetch(
            `https://provinces.open-api.vn/api/d/${code}?depth=2`
        );
        const data = await res.json();
        setWards(data.wards);
    };


    return (
        <div className="info-base">
            <h2 className="info-base__title">
                Đăng Tin Cực Nhanh Với <span>VUATROVN</span>
            </h2>

            <div className="info-base__card">
                {/* LEFT */}
                <div className="info-base__form">
                    <h3 className="section-title">I. Thông Tin Cơ Bản</h3>

                    <div className="form-group">
                        <label>Tên Dự Án:</label>
                        <input
                            type="text"
                            className="project-name-input"
                            placeholder="Nhập Tên Dự Án"
                        />
                    </div>


                    {/* ✅ LOẠI HÌNH */}
                    <div className="form-group">
                        <label>Loại Hình:</label>
                        <div className="type-group">
                            <button
                                type="button"
                                className={`type-btn ${type === "apartment" ? "active" : ""
                                    }`}
                                onClick={() => setType("apartment")}
                            >
                                Chung Cư
                            </button>

                            <button
                                type="button"
                                className={`type-btn ${type === "house" ? "active" : ""
                                    }`}
                                onClick={() => setType("house")}
                            >
                                Nhà/Phòng Trọ
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Tỉnh/Thành Phố:</label>
                        <select value={province} onChange={handleProvinceChange}>
                            <option value="">Chọn Tỉnh/Thành Phố</option>
                            {provinces.map(p => (
                                <option key={p.code} value={p.code}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Quận/Huyện:</label>
                        <select value={district} onChange={handleDistrictChange} disabled={!districts.length}>
                            <option value="">Chọn Quận/Huyện</option>
                            {districts.map(d => (
                                <option key={d.code} value={d.code}>
                                    {d.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Xã/Phường:</label>
                        <select value={ward} onChange={(e) => setWard(e.target.value)} disabled={!wards.length}>
                            <option value="">Chọn Xã/Phường</option>
                            {wards.map(w => (
                                <option key={w.code} value={w.code}>
                                    {w.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Địa Chỉ Cụ Thể:</label>
                        <input
                            type="text"
                            className="project-name-input"
                            placeholder="Nhập Địa Chỉ Cụ Thể"
                        />
                    </div>

                </div>

                {/* RIGHT */}
                <div className="info-base__map">
                    <div className="map-placeholder">
                        <GOOGLE />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InforBase;
