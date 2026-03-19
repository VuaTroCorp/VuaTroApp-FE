import React from "react";
import "./ManagePost.scss";
import demo from "assets/images/demo.jpg";
import { Ellipsis } from "lucide-react";

const ManagePost = () => {
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
              <div className="ellipsis">
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
              <div className="ellipsis">
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
              <div className="ellipsis">
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
              <div className="ellipsis">
                <Ellipsis />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManagePost;
