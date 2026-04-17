import React, { useEffect, useState } from "react";
import { postAPI } from "lib/apiService";
import {toast} from "react-toastify";
import "./InforBase.scss";
import locationPost from "assets/icons/locationPost.png";
import document from "assets/icons/document.png";
import notice from "assets/icons/notice.png";
import contact from "assets/icons/contact.png";
import picture from "assets/icons/picture.png";
import upload from "assets/icons/upload.png";
import map from "assets/icons/map.png";
import GoogleMap1 from "../MapSection/MapSection";
const InforBase = () => {
    const [typeId, setTypeId] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [area, setArea] = useState("");
    const [roomQuantity, setRoomQuantity] = useState(0);

    // Address-map state
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");

    // Images state
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const maxImages = 10;
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB

    // note
    const [provinceName, setProvinceName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [wardName, setWardName] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const currentMapAddress = addressDetail || 
        [wardName, districtName, provinceName].filter(Boolean).join(", ") || 
        "Việt Nam";

    // Load province
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/p/")
            .then(res => res.json())
            .then(data => setProvinces(data))
            .catch(err => console.error("Không thể tải danh sách Tỉnh/Thành phố:", err));
    }, [])

    const handleProvinceChange = async (e) => {
        const code = e.target.value;
        const selectedProvince = provinces.find(p => p.code == code);

        setProvince(code);
        setProvinceName(selectedProvince?.name || "");
        setDistrict("");
        setWard("");
        setDistricts([]);
        setWards([]);

        if (!code) return;
        try {
            const res = await fetch(
                `https://provinces.open-api.vn/api/p/${code}?depth=2`
            );
            const data = await res.json();
            setDistricts(data.districts || []);
        } catch (err) {
            toast.err("Không thể tải danh sách Quận/Huyện");
        }
    };

    const handleDistrictChange = async (e) => {
        const code = e.target.value;
        const selectedDistrict = districts.find(d => d.code == code);

        setDistrict(code);
        setDistrictName(selectedDistrict?.name || "");
        setWard("");
        setWards([]);

        if (!code) return;
        try {
            const res = await fetch(
                `https://provinces.open-api.vn/api/d/${code}?depth=2`
            );
            const data = await res.json();
            setWards(data.wards || []);
        } catch (error) {
            toast.err("Không thể tải danh sách Xã/Phường");
        }
    };

    const handleMapChange = (data) => {
        setAddressDetail(data.fullAddress);
        setLatitude(data.lat);
        setLongitude(data.lng);
    };

    // Handle images - dry code (Don't repeat yourself)
    const processImages = (filesArray) => {
        if (!filesArray.length) return;

        const validFiles = filesArray.filter(file => {
            if (!file.type.startsWith("image/")) {
                toast.err(`"${file.name}" không phải là định dạng ảnh!`);
                return false;
            }
            if (file.size > MAX_SIZE) {
                toast.warning(`Ảnh "${file.name}" vượt quá giới hạn 5MB!`);
                return false;
            }
            return true;
        });

        const remaining = maxImages - images.length;
        if (remaining <= 0) {
            toast.warning(`Bạn chỉ được tải lên tối đa ${maxImages} ảnh!`);
            return;
        }

        setImages((prev) => [
            ...prev,
            ...validFiles.slice(0, remaining),
        ]);
    }

    const handleAddImage = (e) => {
        processImages(Array.from(e.target.files));
        e.target.value = null;
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        processImages(Array.from(e.dataTransfer.files));
    }

    const handleRemoveImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    // Submit form
    const handleSubmit = async () => {
        // Filter out empty values ​​and combine them into a complete address (Full Address).
        const fullAddress = [addressDetail, wardName, districtName, provinceName]
            .filter(Boolean) // Keep the ones with text, ignore the blank ones
            .join(", ");

        // Validation
        if (!title || !price || !area || !typeId || !fullAddress) {
            toast.warning("Vui lòng điền đầy đủ các thông tin bắt buộc!");
            return;
        }
        if (images.length === 0) {
            toast.warning("Vui lòng tải lên ít nhất 1 ảnh!");
            return;
        }

        const id = toast.loading("Đang đăng bài viết...");

        try {
            const formData = new FormData();
            formData.append("title", title);
            // Remove . , whitespace before sendData
            const cleanPrice = price.toString().replace(/[\.,\s]/g, "");
            formData.append("price", Number(cleanPrice));
            formData.append("area", area);
            formData.append("roomQuantity", roomQuantity);
            formData.append("typeId", Number(typeId));
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);
            formData.append("address", fullAddress);
            formData.append("description", description);

            images.forEach((img) => {
                formData.append("images", img);
            });

            await postAPI.createPost(formData);

            toast.success("Đăng tin thành công!", {
                containerId: "default",
                autoClose: 3000,
            });

            // Reset form
            setTitle("");
            setDescription("");
            setPrice("");
            setArea("");
            setRoomQuantity(0);
            setTypeId("");
            setAddressDetail("");
            setLatitude(0);
            setLongitude(0);
            setProvince("");
            setDistrict("");
            setWard("");
            setImages([]);

        } catch (error) {
            console.error("Lỗi đăng bài:", error);
            const errMsg = error.response?.data?.message || error.response?.data || "Đăng tin thất bại, vui lòng thử lại!";
            toast.error(errMsg, {
                containerId: "errors", // Hoặc đổi thành "default" tùy cấu hình App của bạn
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="post-page">
            <div className="container">
                <h1 className="page-title">Đăng Tin Cho Thuê</h1>
                <p className="page-subtitle">
                    Vui lòng cung cấp thông tin chính xác để bài đăng của bạn sớm được duyệt
                </p>

                {/* ADDRESS + NOTE */}
                <div className="row two-cols">
                    <div className="card">
                        <h3 className="card-title">
                            <img src={locationPost} alt="location" className="title-icon" />
                            Địa chỉ cho thuê
                        </h3>

                        {/* TỈNH */}
                        <div className="form-group">
                            <label>Tỉnh / Thành Phố</label>
                            <select value={province} onChange={handleProvinceChange}>
                                <option value="">Chọn Tỉnh / Thành Phố</option>
                                {provinces.map(p => (
                                    <option key={p.code} value={p.code}>
                                        {p.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="row">
                            {/* QUẬN */}
                            <div className="form-group">
                                <label>Quận / Huyện</label>
                                <select
                                    value={district}
                                    onChange={handleDistrictChange}
                                    disabled={!districts.length}
                                >
                                    <option value="">Chọn Quận / Huyện</option>
                                    {districts.map(d => (
                                        <option key={d.code} value={d.code}>
                                            {d.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* PHƯỜNG */}
                            <div className="form-group">
                                <label>Xã / Phường</label>
                                <select
                                    value={ward}
                                    onChange={(e) => {
                                        const code = e.target.value;
                                        setWard(code);
                                        setWardName(wards.find(w => w.code == code)?.name || "");
                                    }}
                                    disabled={!wards.length}
                                >
                                    <option value="">Chọn Xã / Phường</option>
                                    {wards.map(w => (
                                        <option key={w.code} value={w.code}>
                                            {w.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group address-detail">
                            <label>Địa Chỉ Cụ Thể</label>
                            <textarea
                                rows="2"
                                placeholder="Nhập địa chỉ cụ thể ..."
                                value={addressDetail}
                                onChange={(e) => setAddressDetail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="card">
                        <div className="info-base__map">
                            <h3 className="card-title">
                                <img src={map} alt="map" className="title-icon" />
                                Vị trí trên bản đồ
                            </h3>
                            <div className="map-placeholder">
                                <div className="map-box">
                                    <GoogleMap1
                                        address={currentMapAddress}
                                        onChange={handleMapChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* POST INFO */}
                <div className="card">
                    <h3 className="card-title">
                        <img src={document} alt="document" className="title-icon" />
                        Thông tin bài viết
                    </h3>

                    <div className="form-group short-input1">
                        <label>Tiêu đề đăng tin</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ví dụ: Phòng cho thuê 20m vuông tại..."
                        />
                    </div>

                    <div className="form-group short-input2">
                        <label>Nội dung mô tả</label>
                        <textarea
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Mô tả chi tiết..."
                        />
                    </div>
                </div>

                {/* FEATURES + SUPPORT */}
                <div className="row two-cols">
                    <div className="card">
                        <h3 className="card-title">
                            <img src={notice} alt="notice" className="title-icon" />
                            Thông tin đặc điểm
                        </h3>

                        <div className="row">
                            <div className="form-group">
                                <label>Diện tích (m²)</label>
                                <input
                                    type="text"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder="Ví dụ: 25"
                                />
                            </div>

                            <div className="form-group label-sophong">
                                <label>Số phòng trống</label>
                                <select value={roomQuantity} onChange={(e) => setRoomQuantity(Number(e.target.value))}>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group short-input">
                            <label>Loại hình</label>
                            <select value={typeId} onChange={(e) => setTypeId(Number(e.target.value))}>
                                <option value="">Chọn loại hình</option>
                                <option value={1}>Phòng Trọ</option>
                                <option value={2}>Căn Hộ</option>
                                <option value={3}>Kí Túc Xá</option>
                            </select>

                        </div>

                        <div className="form-group short-input">
                            <label>Giá tiền (VNĐ)</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Ví dụ: 3.200.000"
                            />
                        </div>
                    </div>

                    <div className="support-box">
                        <img src={contact} alt="contact" className="title-icon" />
                        <h2>Cần hỗ trợ?</h2>
                        <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
                        <div className="hotline">Hotline: 1800 9999</div>
                    </div>
                </div>

                {/* UPLOAD */}
                <div className="card">
                    <h3 className="card-title">
                        <img src={picture} alt="picture" className="title-icon" />
                        Hình ảnh & Video
                    </h3>

                    {/* Upload Box */}
                    <div
                        className={`upload-box ${isDragging ? "dragging" : ""}`}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                    >
                        <label className="upload-area">
                            <div className="upload-icon">
                                <img src={upload} alt="upload" className="title-icon" />
                            </div>
                            <h3>Kéo và thả ảnh hoặc video tại đây</h3>
                            <span>Hoặc click để chọn từ thiết bị của bạn</span>
                            <input
                                type="file"
                                multiple
                                hidden
                                accept="image/*"
                                onChange={handleAddImage}
                            />
                        </label>
                    </div>

                    {/* Preview */}
                    {images.length > 0 && (
                        <div className="image-preview">
                            {images.map((file, index) => (
                                <div className="preview-item" key={index}>
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`upload-${index}`}
                                    />
                                    <button
                                        type="button"
                                        className="remove-btn"
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <p className="upload-note">
                        Bạn đã chọn {images.length}/{maxImages} ảnh
                    </p>
                </div>

                {/* BUTTON */}
                <button className="submit-btn" onClick={handleSubmit}>
                    ĐĂNG TIN NGAY
                </button>
            </div>
        </div>
    );
}

export default InforBase;