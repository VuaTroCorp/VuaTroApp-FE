import React, { useState } from "react";
import "./ManagePost.scss";
import demo from "assets/images/demo.jpg";
import { Ellipsis } from "lucide-react";
import GoogleMap from "components/shared/Map/GoogleMap";

const ManagePost = () => {
  const openEditPopup = (id) => {
    setShowEditPopup(true);

    // demo dữ liệu địa chỉ
    setAddress("123 Nguyễn Thị Minh Khai, Nha Trang");
  };
  const closePopup = () => {
    setShowEditPopup(false);
    setImages([]);
    setAddress("");
  };

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [address, setAddress] = useState("");
  const [images, setImages] = useState([]);
  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file: file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  };
  return (
    <div className="main-manage-post">
      {/* --- Header --- */}
      <div className="order-header">
        <div className="header-left">
          <b className="title">Quản Lý Đặt Trước</b>
        </div>
        <div className="header-right">
          <p className="summary-text">
            Bạn hiện đang có <span>10</span> bài đăng đặt trước
          </p>
          <div className="search-box">
            <input type="text" placeholder="Tìm kiếm theo tên, địa chỉ..." />
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* --- Post Content --- */}
      <div className="order-list">
        <div className="main-post-manage-inf">
          <div className="topic-right-manage">
            <div className="img-room-text">ẢNH</div>
            <div>TIÊU ĐỀ BÀI ĐĂNG</div>
            <div>CHỦ TIN</div>
            <div>NGÀY GỬI</div>
            <div>TRẠNG THÁI</div>
            <div>CHI TIẾT</div>
          </div>

          <div className="render-inf-post">
            <div className="img-post-container">
              <img className="img-room" src={demo} alt="" />
            </div>
            <div className="inf-room">Căn hộ Cao Cấp nhất Quận 1</div>
            <div className="poster">Lê Hoàng Tuyển</div>
            <div className="post-date">16/3/2026</div>
            <div className="wait-status-post">
              <div className="wait-status-background"> CHỜ DUYỆT</div>
            </div>
            <div className="ellipsis-container">
              <div className="ellipsis" onClick={() => openEditPopup(1)}>
                <Ellipsis />
              </div>
            </div>
          </div>
          <div className="render-inf-post">
            <div className="img-post-container">
              <img className="img-room" src={demo} alt="" />
            </div>
            <div className="inf-room">Căn hộ Cao Cấp nhất Quận 1</div>
            <div className="poster">Lê Hoàng Tuyển</div>
            <div className="post-date">16/3/2026</div>
            <div className="approve-status-post">
              <div className="approve-status-background"> ĐÃ DUYỆT</div>
            </div>
            <div className="ellipsis-container">
              <div className="ellipsis" onClick={() => openEditPopup(1)}>
                <Ellipsis />
              </div>
            </div>
          </div>

          <div className="render-inf-post">
            <div className="img-post-container">
              <img className="img-room" src={demo} alt="" />
            </div>
            <div className="inf-room">Căn hộ Cao Cấp nhất Quận 1</div>
            <div className="poster">Lê Hoàng Tuyển</div>
            <div className="post-date">16/3/2026</div>
            <div className="cancel-status-post">
              <div className="cancel-status-background">ĐÃ TỪ CHỐI</div>
            </div>
            <div className="ellipsis-container">
              <div className="ellipsis" onClick={() => openEditPopup(1)}>
                <Ellipsis />
              </div>
            </div>
          </div>

          <div className="render-inf-post">
            <div className="img-post-container">
              <img className="img-room" src={demo} alt="" />
            </div>
            <div className="inf-room">Căn hộ Cao Cấp nhất Quận 1</div>
            <div className="poster">Lê Hoàng Tuyển</div>
            <div className="post-date">16/3/2026</div>
            <div className="expired-status-post">
              <div className="expired-status-background">HẾT HẠN</div>
            </div>
            <div className="ellipsis-container">
              <div className="ellipsis" onClick={() => openEditPopup(1)}>
                <Ellipsis />
              </div>
            </div>
          </div>
          {/* POPUP EDIT */}
          {showEditPopup && (
            <div className="edit-popup-overlay">
              <div className="edit-popup">
                <div className="popup-header">
                  <h3>Chỉnh sửa tin đăng</h3>

                  <button onClick={closePopup}>✕</button>
                </div>

                <div className="popup-body">
                  {/* ĐỊA CHỈ */}
                  <h4 className="section-title">📍 Địa chỉ cho thuê</h4>

                  <div className="form-row">
                    <select>
                      <option>TP. Nha Trang</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>TP. Hà Nội</option>
                    </select>

                    <select>
                      <option>Phường Tây Nha Trang</option>
                      <option>Phường Bắc Nha Trang</option>
                      <option>Phường Nha Trang</option>
                      <option>Phường Nam Nha Trang</option>
                    </select>
                  </div>

                  <input
                    placeholder="Số 123, Đường Nguyễn Thị Minh Khai"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <div className="map-box">
                    <GoogleMap address={address} />
                  </div>

                  {/* BÀI VIẾT */}
                  <div className="post-info-section">
                    <h4 className="section-title">📄 Thông tin bài viết</h4>

                    <input placeholder="Phòng trọ cao cấp trung tâm" />

                    <textarea
                      placeholder="Phòng rộng rãi, thoáng mát..."
                      onInput={autoResize}
                    />
                  </div>

                  {/* ĐẶC ĐIỂM */}
                  <h4 className="section-title">📊 Thông tin đặc điểm</h4>

                  <div className="form-row">
                    <input placeholder="Diện tích" />

                    <select>
                      <option>Số phòng ngủ</option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <input placeholder="Loại hình" />

                    <input placeholder="Giá thuê" />
                  </div>

                  {/* ẢNH */}
                  <h4 className="section-title">🖼 Hình ảnh & Video</h4>

                  <div className="upload-box">
                    <p>Kéo và thả ảnh tại đây</p>

                    <input type="file" multiple onChange={handleImageUpload} />
                  </div>

                  <div className="preview-images">
                    {images.map((img, index) => (
                      <div className="image-item" key={index}>
                        <img src={img.preview} alt="" />

                        <button
                          className="remove-btn"
                          onClick={() => removeImage(index)}
                        >
                          ✕
                        </button>

                        {index === 0 && (
                          <div className="cover-label">ẢNH BÌA</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="popup-footer">
                  <button className="update-btn">➤ CẬP NHẬT</button>

                  <button className="cancel-btn" onClick={closePopup}>
                    Hủy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePost;
