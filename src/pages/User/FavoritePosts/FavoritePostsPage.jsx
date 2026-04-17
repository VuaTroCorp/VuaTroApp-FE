import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { favoriteAPI } from "lib/apiService";
import { toast } from "react-toastify";
import FilterFavoriteRoom from "components/shared/User/Favorite/FilterFavoriteRoom/FilterFavoriteRoom";
import FavoriteRoomCard, { FavoriteCardSkeleton } from "components/shared/User/Favorite/FavoriteRoomCard/FavoriteRoomCard";
import "./FavoritePostsPage.scss";

const FavoritePostsPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State phân trang và lọc
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchFavoritePosts();
  }, [currentPage, filters]);

  const fetchFavoritePosts = async () => {
    setIsLoading(true);
    try {
      // Chuẩn bị params (có thể thêm logic map params nếu BE yêu cầu cấu trúc khác)
      const params = {
        page: currentPage - 1, 
        size: 9,
        ...filters,
      };

      const res = await favoriteAPI.getMyFavorites(params);
      
      if (Array.isArray(res.data)) {
        // Trường hợp BE trả về trực tiếp một Mảng (List)
        setPosts(res.data);
        setTotalElements(res.data.length);
        setTotalPages(1); // Tạm thời để 1 trang vì BE chưa có metadata phân trang
      } else {
        // Trường hợp BE trả về object Phân trang (Page)
        setPosts(res.data?.content || []);
        setTotalPages(res.data?.totalPages || 1);
        setTotalElements(res.data?.totalElements || 0);
      }

    } catch (error) {
      
      let errorMsg = "Lỗi kết nối máy chủ. Không thể tải danh sách!";
      if (error.response?.status === 403) {
        errorMsg = "Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.";
      } else if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      }
        
      toast.error(errorMsg, { containerId: "errors" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleRemovePostLocal = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
    setTotalElements(prev => prev - 1);
  };

  return (
    <main className="favorite-page-container">
      <div className="main-content">
        
        <div className="page-header">
          <div className="breadcrumb">
            <span
              className="home-link"
              onClick={() => navigate("/home")}
              style={{ cursor: "pointer"}}
            >
              Trang chủ</span> <ChevronRight size={14} /> <b>Bài đăng yêu thích</b>
          </div>
          <h1>Danh sách yêu thích</h1>
          <p>Bạn đang có <b>{totalElements}</b> bài đăng đã lưu.</p>
        </div>

        <div className="room-grid">
          {isLoading ? (
            Array(6).fill(0).map((_, i) => <FavoriteCardSkeleton key={i} />)
          ) : posts.length > 0 ? (
            posts.map(post => (
              <FavoriteRoomCard 
                key={post.id} 
                post={post} 
                onRemoveSuccess={handleRemovePostLocal} 
              />
            ))
          ) : (
            <div className="empty-state">
              <p>Chưa có bài đăng nào trong danh sách yêu thích của bạn.</p>
            </div>
          )}
        </div>

        {!isLoading && totalPages > 1 && (
          <div className="pagination">
            <button 
              disabled={currentPage === 1} 
              onClick={() => setCurrentPage(p => p - 1)}
            >
              <ChevronLeft size={20} />
            </button>
            
            <span className="page-info">Trang {currentPage} / {totalPages}</span>
            
            <button 
              disabled={currentPage === totalPages} 
              onClick={() => setCurrentPage(p => p + 1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <FilterFavoriteRoom onApplyFilters={handleApplyFilters} />
    </main>
  );
};

export default FavoritePostsPage;