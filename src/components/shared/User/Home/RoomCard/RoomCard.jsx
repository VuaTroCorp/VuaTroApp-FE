import React from "react";
import { Camera, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./RoomCard.scss";

function RoomCard({ data }) {
  const navigate = useNavigate();

  // Destructuring dữ liệu từ props để code gọn hơn
  const {
    id,
    title,
    price,
    area,
    location,
    description,
    images = [],
    rating = 0,
    landlord = {},
    postDate,
    imageCount,
  } = data;

  const safeImages = (
    images && images.length
      ? images
      : ["https://via.placeholder.com/400x260?text=No+Image"]
  ).slice(0, 3);

  // Bảo đảm đủ 3 hình để layout cố định
  while (safeImages.length < 3) safeImages.push(safeImages[0]);

  const mainImg = safeImages[0];

  return (
    <div className="view-room-card">
      <div
        className="room-card"
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/user/posts/${id}`)}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/user/posts/${id}`);
        }}
      >
        <div className="room-image-container">
          <div className="main-image">
            <img src={mainImg} alt={title} />
            <div className="image-count">
              <Camera size={14} /> {imageCount || images.length || 0}
            </div>
          </div>
          <div className="sub-images">
            <div className="sub-image-item">
              <img src={safeImages[1] || mainImg} alt={title} />
            </div>
            <div className="sub-image-item">
              <img src={safeImages[2] || mainImg} alt={title} />
            </div>
          </div>
        </div>

        <div className="room-details">
          <div className="head-row">
            <h2 className="room-title">{title}</h2>
            <div className="room-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < rating ? "#E1A730" : "none"}
                />
              ))}
            </div>
          </div>

          <div className="details-group">
            <div className="room-price">
              {Number(price || 0).toLocaleString()}đ/tháng
            </div>
            <span className="divider-dot">&bull;</span>
            <div className="room-area">
              {area}m<sup>2</sup>
            </div>
            <span className="divider-dot">&bull;</span>
            <div className="room-location">{location}</div>
          </div>

          <div className="room-description">{description}</div>
        </div>

        <div className="landlord-info">
          <div className="landlord-profile">
            <img
              src={
                landlord.avatar || "https://via.placeholder.com/80x80?text=User"
              }
              alt={landlord.name || "Chủ phòng"}
              className="landlord-avatar"
            />
            <div className="landlord-name-group">
              <div className="landlord-name">
                {landlord.name || "Chủ phòng"}
              </div>
              <div className="post-day">{postDate}</div>
            </div>
          </div>

          <div className="landlord-contact-group">
            <div className="landlord-contact">{landlord.contact}</div>
            <div className="heart-icon">
              <Heart size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
