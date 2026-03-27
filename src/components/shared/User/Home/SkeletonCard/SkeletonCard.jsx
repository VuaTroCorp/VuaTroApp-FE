import React from "react";
import Skeleton from "components/shared/common/Skeleton";
import "../RoomCard/RoomCard.scss"; 

const SkeletonCard = () => {
  return (
    <div className="view-room-card">
      <div className="room-card" style={{ cursor: "default" }}>
        
        <div className="room-image-container">
          <div className="main-image">
            <Skeleton height="100%" />
          </div>
          <div className="sub-images">
            <div className="sub-image-item">
              <Skeleton height="100%" />
            </div>
            <div className="sub-image-group-bottom">
              <div className="sub-image-item">
                <Skeleton height="100%" />
              </div>
              <div className="sub-image-item">
                <Skeleton height="100%" />
              </div>
            </div>
          </div>
        </div>

        <div className="room-details">
          <div className="head-row">
            <Skeleton width="60%" height="42px" />
            <Skeleton width="80px" height="16px" />
          </div>

          <div className="details-group">
            <Skeleton width="120px" height="24px" />
            <Skeleton width="40px" height="16px" />
            <Skeleton width="100px" height="16px" />
          </div>

          <div className="room-description" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Skeleton width="100%" height="14px" />
            <Skeleton width="80%" height="14px" />
          </div>
        </div>

        <div className="landlord-info">
          <div className="landlord-profile">
            <Skeleton width="45px" height="45px" style={{ borderRadius: "50%" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              <Skeleton width="100px" height="16px" />
              <Skeleton width="70px" height="12px" />
            </div>
          </div>
          <div className="landlord-contact-group">
            <Skeleton width="110px" height="36px" style={{ borderRadius: "20px" }} />
            <Skeleton width="24px" height="24px" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SkeletonCard;