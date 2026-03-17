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
    images,
    rating,
    landlord,
    postDate,
    imageCount,
  } = data;

  return (
    <div className="view-room-card">
      <div
        className="room-card"
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/posts/${id}`)}
        onKeyDown={(e) => {
          if (e.key === "Enter") navigate(`/posts/${id}`);
        }}
      >
        <div className="room-image-container">
          <div className="main-image">
            <img src={images[0]} alt={title} />
            <div className="image-count">
              <Camera size={14} /> {imageCount || images.length}
            </div>
          </div>
          <div className="sub-images">
            <div className="sub-image-item">
              <img src={images[1]} alt={title} />
            </div>
            <div className="sub-image-group-bottom">
              <div className="sub-image-item">
                <img src={images[2]} alt={title} />
              </div>
              <div className="sub-image-item">
                <img src={images[3]} alt={title} />
              </div>
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
            <div className="room-price">{price.toLocaleString()}đ/tháng</div>
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
              src={landlord.avatar}
              alt={landlord.name}
              className="landlord-avatar"
            />
            <div className="landlord-name-group">
              <div className="landlord-name">{landlord.name}</div>
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
