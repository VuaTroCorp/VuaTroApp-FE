import { useState } from "react";
import "./imageUpload.scss";
import cameraIcon from "assets/icons/camera.png";


function ImageUpload() {
    const [maxImages, setMaxImages] = useState(3);
    const [images, setImages] = useState([]);


    /* ===== ADD IMAGE ===== */
    const handleAddImage = (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        if (maxImages !== Infinity) {
            const remaining = maxImages - images.length;
            if (remaining <= 0) return;

            setImages((prev) => [
                ...prev,
                ...files.slice(0, remaining),
            ]);
        } else {
            setImages((prev) => [...prev, ...files]);
        }

        e.target.value = null;
    };

    /* ===== REMOVE IMAGE ===== */
    const handleRemoveImage = (index) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const remaining =
        maxImages === Infinity ? "∞" : maxImages - images.length;

    return (
        <div className="image-upload">
            <h3 className="section-title">III. Thông Tin Hình Ảnh</h3>

            <p className="note">
                *Up ít nhất 3 ảnh để bài đăng đạt hiệu quả hơn
            </p>

            {/* ===== UPLOAD BOX ===== */}
            <div className="upload-box">
                <p className="upload-desc">
                    Tin đăng có hình ảnh thường hiệu quả hơn 36% tin đăng
                    không có hình ảnh.
                    <br />
                    (Chọn vào bên dưới để thêm ảnh hoặc kéo thả trực tiếp)
                </p>

                {/* CAMERA BUTTON */}
                <label className="upload-btn">
                    <img src={cameraIcon} alt="camera" />
                    Thêm Ảnh
                    <input
                        type="file"
                        multiple
                        hidden
                        accept="image/*"
                        onChange={handleAddImage}
                    />
                </label>



            </div>

            {/* ===== PREVIEW IMAGES ===== */}
            {images.length > 0 && (
                <div className="image-preview">
                    {images.map((file, index) => (
                        <div className="preview-item" key={index}>
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`upload-${index}`}
                            />

                            <button
                                className="remove-btn"
                                onClick={() => handleRemoveImage(index)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}


        </div>
    );
}

export default ImageUpload;
