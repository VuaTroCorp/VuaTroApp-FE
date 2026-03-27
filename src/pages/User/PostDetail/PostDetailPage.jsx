import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postAPI } from "lib/apiService";
import { Camera, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
import Avatar from "components/shared/common/Avatar";
import RoomImage from "components/shared/common/RoomImg";
import Skeleton from "components/shared/common/Skeleton";
import "./PostDetailPage.scss";

const formatVnd = (value) => {
  try {
    return Number(value || 0).toLocaleString("vi-VN");
  } catch {
    return value;
  }
};

export default function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mapQuery = useMemo(
    () => (post ? post.address || post.location || "" : ""),
    [post],
  );
  const googleMapsUrl = useMemo(() => {
    if (!mapQuery) return null;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
  }, [mapQuery]);
  const googleEmbedUrl = useMemo(() => {
    if (!mapQuery) return null;
    return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  }, [mapQuery]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    postAPI
      .getById(id)
      .then((res) => {
        if (cancelled) return;
        setPost(res.data);
        setActiveImageIndex(0);
      })
      .catch((err) => {
        if (cancelled) return;
        const message =
          err?.response?.data?.message || "Không tải được bài đăng";
        toast.error(message, { containerId: "errors" });
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const images = useMemo(() => {
    if (!post?.images) return [];
    return post.images.map(img => img.url);
  }, [post]);

  const activeImage = images[activeImageIndex] || images[0];

  const handlePrev = () => {
    if (!images.length) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (!images.length) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  if (loading) {
    return (
      <div className="post-detail-page">
        {/* Breadcrumb Skeleton */}
        <div className="post-detail-breadcrumb">
          <Skeleton width="150px" height="16px" />
        </div>

        <div className="post-detail-grid">
          {/* Main Skeleton */}
          <section className="post-detail-main">
            {/* Gallery Skeleton */}
            <div className="gallery">
              <div className="gallery-main">
                <Skeleton width="100%" height="440px" className="main-img" />
              </div>
              <div className="gallery-thumbs">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div key={idx} className="thumb">
                    <Skeleton width="100%" height="54px" />
                  </div>
                ))}
              </div>
            </div>

            {/* Post Meta Skeleton */}
            <div className="post-meta">
              <Skeleton width="120px" height="26px" style={{ borderRadius: "10px", marginBottom: "10px" }} />
              <Skeleton width="80%" height="28px" className="title" />
              
              <div className="meta-row">
                <Skeleton width="150px" height="24px" className="price" />
                <div className="dot">•</div>
                <Skeleton width="80px" height="20px" className="area" />
              </div>

              <div className="address">
                <Skeleton width="20px" height="20px" style={{ borderRadius: "50%" }} />
                <Skeleton width="60%" height="20px" />
              </div>

              <div className="desc">
                <Skeleton width="30%" height="20px" style={{ marginBottom: "12px" }} />
                <Skeleton width="100%" height="16px" style={{ marginBottom: "8px" }} />
                <Skeleton width="100%" height="16px" style={{ marginBottom: "8px" }} />
                <Skeleton width="80%" height="16px" />
              </div>

              <div className="map-card">
                <div className="map-header">
                  <Skeleton width="40%" height="20px" />
                  <Skeleton width="70%" height="16px" />
                </div>
                <div className="map-wrapper">
                  <Skeleton width="100%" height="100%" />
                </div>
              </div>
            </div>
          </section>

          {/* SIDEBAR */}
          <aside className="post-detail-side">
            <div className="contact-card">
              <div className="profile">
                <Skeleton width="64px" height="64px" className="avatar" />
                <div style={{ flex: 1 }}>
                  <Skeleton width="70%" height="18px" className="name" style={{ marginBottom: "6px" }} />
                  <Skeleton width="40%" height="14px" className="sub" />
                </div>
              </div>
              
              <Skeleton width="100%" height="44px" style={{ borderRadius: "12px", marginBottom: "12px" }} />
              <Skeleton width="100%" height="60px" style={{ borderRadius: "12px" }} />
            </div>

            <div className="related-card">
              <Skeleton width="50%" height="20px" className="related-title" />
              <Skeleton width="100%" height="100px" style={{ borderRadius: "10px", marginBottom: "12px" }} />
              <Skeleton width="100%" height="100px" style={{ borderRadius: "10px" }} />
            </div>
          </aside>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="post-detail-page">
        <div className="post-detail-notfound">
          <p>Không tìm thấy bài đăng.</p>
          <button className="btn" onClick={() => navigate(-1)}>
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="post-detail-page">
      <div className="post-detail-breadcrumb">
        <span className="crumb" onClick={() => navigate(-1)}>
          Trang chủ
        </span>
        <span className="sep">/</span>
        <span className="crumb">Chi tiết bài viết</span>
      </div>

      <div className="post-detail-grid">
        <section className="post-detail-main">
          <div className="gallery">
            <div className="gallery-main">
              <RoomImage
                src={activeImage}
                alt={post.title}
                className="main-img"
              />

              <button className="nav-btn left" onClick={handlePrev}>
                <ChevronLeft size={28} />
              </button>
              <button className="nav-btn right" onClick={handleNext}>
                <ChevronRight size={28} />
              </button>

              <div className="image-count">
                <Camera size={14} /> {post.imageCount || images.length}
              </div>
            </div>

            {images.length > 1 && (
              <div className="gallery-thumbs">
                {images.map((url, idx) => (
                  <button
                    key={url + idx}
                    className={
                      "thumb" + (idx === activeImageIndex ? " active" : "")
                    }
                    onClick={() => setActiveImageIndex(idx)}
                    type="button"
                  >
                    <RoomImage src={url} alt={`${post.title}-${idx}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="post-meta">
            <div className="badge">TIN VIP NỔI BẬT</div>
            <h1 className="title">{post.title}</h1>

            <div className="meta-row">
              <div className="price">{formatVnd(post.price)}đ/tháng</div>
              <div className="dot">•</div>
              <div className="area">{post.area} m²</div>
            </div>

            <div className="address">
              <MapPin size={16} />
              <span>{post.address || post.location}</span>
            </div>

            <div className="desc">
              <h3>Thông tin mô tả</h3>
              <p>{post.description}</p>
            </div>

            <div className="map-card">
              <div className="map-header">
                <h3>Vị trí &amp; bản đồ</h3>
                <div className="map-address">
                  {post.address || post.location}
                </div>
              </div>

              <div className="map-wrapper">
                {googleEmbedUrl ? (
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="map-link-overlay"
                    aria-label="Mở trên Google Maps"
                  >
                    <iframe
                      title="Google Maps"
                      src={googleEmbedUrl}
                      style={{ border: 0, width: "100%", height: "100%" }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </a>
                ) : (
                  <div className="map-placeholder">Chưa có vị trí bản đồ</div>
                )}
              </div>
              {googleMapsUrl && (
                <a
                  className="gmaps-link"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở trên Google Maps
                </a>
              )}
            </div>
          </div>
        </section>

        <aside className="post-detail-side">
          <div className="contact-card">
            <div className="profile">
              <Avatar
                className="avatar"
                src={post.user?.avatar}
                alt={post.user?.username}
              />
              <div className="profile-info">
                <div className="name">{post.user?.username || "Chủ trọ"}</div>
                <div className="sub">{new Date(post.createdAt).toLocaleDateString('vi-VN')}</div>
              </div>
            </div>

            <a className="phone" href={`tel:${post.user?.phone || ""}`}>
              <Phone size={16} />
              {post.user?.phone || "Đang cập nhật"}
            </a>

            <div className="hint">
              Lưu ý: Hãy kiểm tra kỹ thông tin trước khi đặt cọc.
            </div>
          </div>

          <div className="related-card">
            <div className="related-title">Tin cùng khu vực</div>
            <div className="related-list">
              <div className="related-empty">
                (MVP) Sẽ bổ sung danh sách tin liên quan sau.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
