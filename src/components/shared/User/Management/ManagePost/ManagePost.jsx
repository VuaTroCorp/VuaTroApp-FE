import React, { useEffect, useState } from "react";
import "./ManagePost.scss";
import demo from "assets/images/demo.jpg";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Ellipsis } from "lucide-react";
import { postAPI } from "lib/apiService";
import PopUpDetail from "../PopUpDetail/PopUpDetail";

const ManagePost = () => {
  const openEditPopup = (id) => {
    setShowEditPopup(true);
  };
  const closePopup = () => {
    setShowEditPopup(false);
    setImages([]);
    setAddress("");
  };

  const autoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const [address, setAddress] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [images, setImages] = useState([]);
  const [openStatus, setOpenStatus] = useState(false);
  const [range, setRange] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("ALL");
  const [IDPost, setIDPost] = useState();

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

  const getPostList = async (page) => {
    try {
      const postsInf = await postAPI.getPosts(page);
      setPosts(postsInf.data.content);
    } catch (error) {
      console.log("Lỗi rồi bạn ơi");
    }
  };

  useEffect(() => {
    getPostList(currentPage);
  }, [currentPage]);

  return (
    <div className="main-manage-post">
      {/* --- Header --- */}
      <div className="order-header">
        <div className="header-left">
          <b className="title">Quản Lý Đặt Trước</b>
        </div>
        <div className="header-right">
          <div className="search-box">
            <div style={{ width: 300, padding: 0 }}>
              <p style={{ textAlign: "center" }}>
                Khoảng giá: {range[0]}tr - {range[1]}tr
              </p>
              <Slider
                range
                min={0}
                max={100}
                defaultValue={[0, 100]}
                onChange={(value) => setRange(value)}
                trackStyle={{ backgroundColor: "#E1A730" }}
                handleStyle={{ borderColor: "#E1A73080", opacity: 1 }} //
              />
            </div>
          </div>

          <div className="date-box">
            <input className="date" type="date" />
          </div>
          <div
            onClick={() => setOpenStatus(!openStatus)}
            className="status-box"
          >
            <div className="status-container">
              {status === "APPROVED" && <span>ĐÃ DUYỆT</span>}
              {status === "CANCELED" && <span>ĐÃ TỪ CHỐI</span>}
              {status === "WAITING" && <span>CHỜ DUYỆT</span>}
              {status === "EXPIRED" && <span>HẾT HẠN</span>}
              {status === "DELETED" && <span>ĐÃ XÓA</span>}
              {status === "ALL" && <span>TẤT CẢ</span>}
            </div>
            {openStatus && (
              <div className="drop-status">
                <div onClick={() => setStatus("ALL")} className="status-top">
                  TẤT CẢ
                </div>
                <div
                  onClick={() => setStatus("WAITING")}
                  className="status-top"
                >
                  CHỜ DUYỆT
                </div>
                <div onClick={() => setStatus("APPROVED")} className="status">
                  ĐÃ DUYỆT
                </div>
                <div onClick={() => setStatus("CANCELED")} className="status">
                  ĐÃ TỪ CHỐI
                </div>
                <div onClick={() => setStatus("EXPIRED")} className="status">
                  HẾT HẠN
                </div>
                <div
                  onClick={() => setStatus("DELETED")}
                  className="status-bottom"
                >
                  ĐÃ XÓA
                </div>
              </div>
            )}
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
            <div>GIÁ THUÊ</div>
            <div>NGÀY GỬI</div>
            <div>TRẠNG THÁI</div>
            <div>CHI TIẾT</div>
          </div>

          {posts.map((post, index) => {
            if (post.status === status || status === "ALL") {
              return (
                <div key={index} className="render-inf-post">
                  <div className="img-post-container">
                    <img className="img-room" src={demo} alt="" />
                  </div>
                  <div className="inf-room">{post.title}</div>
                  <div className="price">{post.price} vnd</div>
                  <div className="post-date">
                    {new Date(post.createdAt).toLocaleDateString("vn-VN")}
                  </div>
                  <div className="status-post">
                    {post.status === "APPROVED" && (
                      <div className="approve-status-background">
                        {(post.status === "APPROVED" && "ĐÃ DUYỆT") || ""}
                      </div>
                    )}
                    {post.status === "CANCELED" && (
                      <div className="cancel-status-background">
                        {(post.status === "CANCELED" && "ĐÃ HỦY") || ""}
                      </div>
                    )}
                    {post.status === "WAITING" && (
                      <div className="wait-status-background">
                        {(post.status === "WAITING" && "CHỜ DUYỆT") || ""}
                      </div>
                    )}
                    {post.status === "EXPIRED" && (
                      <div className="expired-status-background">
                        {(post.status === "EXPIRED" && "HẾT HẠN") || ""}
                      </div>
                    )}
                    {post.status === "DELETED" && (
                      <div className="deleted-status-background">
                        {(post.status === "DELETED" && "ĐÃ XÓA") || ""}
                      </div>
                    )}
                  </div>
                  <div className="ellipsis-container">
                    <div
                      className="ellipsis"
                      onClick={() => {
                        openEditPopup(1);
                        setIDPost(post.id);
                      }}
                    >
                      <Ellipsis />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>{" "}
        {/* POPUP EDIT */}
        {showEditPopup && (
          <PopUpDetail
            closePopup={closePopup}
            address={address}
            setAddress={setAddress}
            images={images}
            handleImageUpload={handleImageUpload}
            removeImage={removeImage}
            autoResize={autoResize}
            IDPost={IDPost}
            setShowEditPopup={setShowEditPopup}
          />
        )}
      </div>
    </div>
  );
};

export default ManagePost;