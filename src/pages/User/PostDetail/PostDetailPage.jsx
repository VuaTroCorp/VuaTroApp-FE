import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postAPI } from "lib/apiService";
import { Camera, ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react";
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
    if (!post?.images?.length) {
      return ["https://via.placeholder.com/600x360?text=No+Image"];
    }
    // Nếu backend trả về mảng object {url}, convert về string
    return post.images
      .map((img) => (typeof img === "string" ? img : img?.url))
      .filter(Boolean);
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
        <div className="post-detail-loading">Đang tải chi tiết bài đăng...</div>
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
        <span className="crumb" onClick={() => navigate("/")}>
          Trang chủ
        </span>
        <span className="sep">/</span>
        <span className="crumb">Chi tiết bài viết</span>
      </div>

      <div className="post-detail-grid">
        <section className="post-detail-main">
          <div className="gallery">
            <div className="gallery-main">
              {!!activeImage && (
                <img src={activeImage} alt={post.title} className="main-img" />
              )}

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
                    <img src={url} alt={post.title + "-" + idx} />
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
              <img
                className="avatar"
                src={post.landlord?.avatar}
                alt={post.landlord?.name}
              />
              <div className="profile-info">
                <div className="name">{post.landlord?.name}</div>
                <div className="sub">{post.postDate || ""}</div>
              </div>
            </div>

            <a className="phone" href={`tel:${post.landlord?.contact || ""}`}>
              <Phone size={16} />
              {post.landlord?.contact}
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
