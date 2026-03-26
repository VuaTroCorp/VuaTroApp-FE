import React, { useEffect, useState } from "react";
import GoogleMap from "components/shared/Map/GoogleMap";
import "./PopUpDetail.scss";
import { postAPI } from "lib/apiService";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";

const PopUpDetail = ({
  setShowEditPopup,
  IDPost,
  closePopup,
  autoResize,
  images,
  handleImageUpload,
  removeImage,
  postData, // Nhận dữ liệu phòng từ trang cha truyền vào
}) => {
  // 1. Khởi tạo formData chứa cả "Chữ" và "Tọa độ"
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    price: "",
    address: "",
    description: "",
    area: "",
    roomQuantity: 1,
    longitude: 109.1899, // Mặc định Nha Trang
    latitude: 12.2388,
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // 2. Khi mở Popup, đổ dữ liệu từ BE vào State
  useEffect(() => {
    if (postData) {
      setFormData({
        id: postData.id,
        title: postData.title,
        price: postData.price,
        address: postData.address,
        description: postData.description,
        area: postData.area,
        roomQuantity: postData.roomQuantity,
        longitude: postData.longitude,
        latitude: postData.latitude,
      });
    }
  }, [postData]);

  // 3. Hàm thay đổi dữ liệu chung
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 4. Hàm gọi API Cập nhật
  const handleUpdate = async () => {
    try {
      const response = await postAPI.editPost(formData.id, formData);
      console.log("Cập nhật thành công:", response);
      closePopup();
    } catch (error) {
      console.error("Lỗi cập nhật rùi:", error);
    }
  };

  // const handleDelete = async () => {
  //   try {
  //     await postAPI.deletePost(formData.id);

  //     console.log("Xóa bài thành công");
  //     setShowDeleteConfirm(false);
  //     closePopup();
  //   } catch (error) {
  //     console.error("Lỗi xóa bài:", error);
  //   }
  // };

  return (
    <div className="edit-popup-overlay">
      <div className="edit-popup">
        <div className="popup-header">
          <h3>Chỉnh sửa tin đăng</h3>
          <button onClick={closePopup}>✕</button>
        </div>

        <div className="popup-body">
          {/* ĐỊA CHỈ */}
          <h4 className="section-title">📍 Địa chỉ cho thuê</h4>

          <input
            name="address"
            placeholder="Số nhà, tên đường..."
            value={formData.address}
            onChange={handleChange}
          />

          {/* HIỂN THỊ BẢN ĐỒ: Dùng cả địa chỉ và tọa độ */}
          <div className="map-box">
            <GoogleMap
              address={formData.address}
              lat={formData.latitude}
              lng={formData.longitude}
            />
          </div>

          {/* THÔNG TIN BÀI VIẾT */}
          <div className="post-info-section">
            <h4 className="section-title">📄 Thông tin bài viết</h4>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Tiêu đề bài viết"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              onInput={autoResize}
              placeholder="Mô tả chi tiết..."
            />
          </div>

          {/* ĐẶC ĐIỂM */}
          <h4 className="section-title">📊 Thông tin đặc điểm</h4>
          <div className="form-row">
            <input
              name="area"
              type="number"
              value={formData.area}
              onChange={handleChange}
              placeholder="Diện tích"
            />
            <select
              name="roomQuantity"
              value={formData.roomQuantity}
              onChange={handleChange}
            >
              <option value={1}>1 Phòng ngủ</option>
              <option value={2}>2 Phòng ngủ</option>
            </select>
          </div>

          <div className="form-row">
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Giá thuê"
            />
          </div>

          {/* HÌNH ẢNH (Phần này bạn giữ nguyên logic cũ) */}
          <h4 className="section-title">🖼 Hình ảnh & Video</h4>
          <div className="upload-box">
            <p>Kéo và thả ảnh tại đây</p>
            <input type="file" multiple onChange={handleImageUpload} />
          </div>
          <div className="preview-images">
            {images &&
              images.map((img, index) => (
                <div className="image-item" key={index}>
                  <img src={img.preview} alt="" />
                  <button
                    className="remove-btn"
                    onClick={() => removeImage(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="popup-footer">
          <button className="delete-btn" onClick={()=> setShowDeleteConfirm(true)}>
            🗑 XÓA
          </button>
          <button
            className="update-btn"
            onClick={() => {
              handleUpdate();
              closePopup();
            }}
          >
            ➤ CẬP NHẬT
          </button>
          <button className="cancel-btn" onClick={closePopup}>
            Hủy
          </button>
        </div>
      {showDeleteConfirm && <ConfirmDelete setShowDeleteConfirm={setShowDeleteConfirm}  IDPost={IDPost} setShowEditPopup={setShowEditPopup}/>}

      </div>
    </div>
  );
};

export default PopUpDetail;
