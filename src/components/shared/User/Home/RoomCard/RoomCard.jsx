import React from "react";
import { Camera, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./RoomCard.scss";
import Avatar from "components/shared/common/Avatar";
import RoomImage from "components/shared/common/RoomImg";

function RoomCard({ data }) {
  const navigate = useNavigate();

  const {
    id,
    title = "Tiêu đề đang cập nhật",
    price = 0,
    area = 0,
    address,
    location,
    description = "Chưa có mô tả nào cho phòng này.",
    images = [],
    rating = 5,
    user,
    landlord,
    createdAt,
    postDate,
    imageCount,
  } = data || {};

  const owner = user || landlord || {};
  const displayLocation = address || location || "Chưa có địa chỉ nào";
  const displayDate = createdAt || postDate
    ? new Date(createdAt || postDate).toLocaleDateString("vi-VN")
    : "Chưa có ngày đăng";
  const getImg = (index) => images[index]?.url || images[index] || null;

  return (
    <div className="view-room-card">
      <div className="room-card" onClick={() => navigate(`/user/posts/${id}`)}>
        
        <div className="room-image-container">
          <div className="main-image">
            <RoomImage src={getImg(0)} alt={title} />
            <div className="image-count">
              <Camera size={14} /> {images.length || 0}
            </div>
          </div>
          <div className="sub-images">
            <div className="sub-image-item">
              <RoomImage src={getImg(1)} alt={title} />
            </div>
            <div className="sub-image-group-bottom">
              <div className="sub-image-item">
                <RoomImage src={getImg(2)} alt={title} />
              </div>
              <div className="sub-image-item">
                <RoomImage src={getImg(3)} alt={title} />
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
                  size={26}
                  fill={i < rating ? "#E1A730" : "none"}
                  color={i < rating ? "#E1A730" : "#ccc"}
                />
              ))}
            </div>
          </div>

          <div className="details-group">
            <div className="room-price">{price.toLocaleString()}đ/tháng</div>
            <span className="divider-dot">&bull;</span>
            <div className="room-area">{area}m<sup>2</sup></div>
            <span className="divider-dot">&bull;</span>
            <div className="room-location">{displayLocation}</div>
          </div>

          <div className="room-description text-truncate">{description}</div>
        </div>

        <div className="landlord-info">
          <div className="landlord-profile">
            <Avatar 
              src={owner.avatar} 
              alt={owner.username || owner.name} 
              className="landlord-avatar" 
            />
            <div className="landlord-name-group">
              <div className="landlord-name">{owner.username || owner.name || "Chủ phòng"}</div>
              <div className="post-day">{displayDate}</div>
            </div>
          </div>

          <div className="landlord-contact-group">
            <div className="landlord-contact">{owner.phone || "09xxxxxxx"}</div>
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
