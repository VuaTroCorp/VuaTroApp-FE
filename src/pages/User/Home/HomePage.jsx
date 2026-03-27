import "./HomePage.scss";
import HomeFilterHeader from "components/shared/User/Home/HomeFilterHeader/HomeFilterHeader";
import RoomCard from "components/shared/User/Home/RoomCard/RoomCard";
import OptionSection from "components/shared/User/common/OptionSection/OptionSection";
import NewPostSection from "components/shared/User/Post/NewPostSection/NewPostSection";
import SelectionSection from "components/shared/User/common/SelectionSection/SelectionSection";
import ServiceSection from "components/shared/User/common/ServiceSection/ServiceSection";
import SkeletonCard from "components/shared/User/Home/SkeletonCard/SkeletonCard";
import { usePostSearch } from "hooks/usePostSearch";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function HomePage() {
  const [searchParams] = useSearchParams();
  const {
    posts,
    loading,
    error,
    totalElements,
    totalPages,
    page,
    setPage,
    filters,
    updateFilters,
    setSort,
  } = usePostSearch();

  // Đọc search query từ URL và cập nhật filters
  useEffect(() => {
    const searchQuery = searchParams.get("search");
    // Chỉ update nếu search query khác với keyword hiện tại
    if (searchQuery && searchQuery !== filters.keyword) {
      updateFilters({ keyword: searchQuery });
    } else if (!searchQuery && filters.keyword) {
      // Clear keyword nếu không có search query trong URL
      updateFilters({ keyword: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Handler cho province filter (với toggle)
  const handleProvinceChange = (province) => {
    if (filters.keyword === province) {
      // Click lần 2 -> bỏ filter
      updateFilters({ keyword: "" });
    } else {
      // Click lần 1 -> set filter
      updateFilters({ keyword: province });
    }
  };

  // Handler cho sort tabs (với toggle)
  const handleSortChange = (sortValue) => {
    setSort(sortValue);
  };

  // Handler cho price filter (với toggle)
  const handlePriceChange = (priceRange) => {
    const { min, max } = priceRange;

    // Check nếu đang active thì toggle off
    if (filters.minPrice === min && filters.maxPrice === max) {
      updateFilters({ minPrice: null, maxPrice: null });
    } else {
      updateFilters({ minPrice: min, maxPrice: max });
    }
  };

  // Handler cho area filter (với toggle)
  const handleAreaChange = (areaRange) => {
    const { min, max } = areaRange;

    // Check nếu đang active thì toggle off
    if (filters.minArea === min && filters.maxArea === max) {
      updateFilters({ minArea: null, maxArea: null });
    } else {
      updateFilters({ minArea: min, maxArea: max });
    }
  };

  return (
    <div className="home-page">
      <main className="main-content">
        <section className="left-content">
          <HomeFilterHeader
            count={totalElements}
            onProvinceChange={handleProvinceChange}
            activeProvince={filters.keyword}
            onSortChange={handleSortChange}
          />

          <div className="view-room-list">
            {loading && (
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </>
            )}

            {error && (
              <div className="error-state">
                <p>❌ {error}</p>
              </div>
            )}

            {!loading && !error && posts.length === 0 && (
              <div className="empty-state">
                <p>Không tìm thấy bài đăng phù hợp</p>
              </div>
            )}

            {!loading &&
              !error &&
              posts.length > 0 &&
              posts.map((post) => <RoomCard key={post.id} data={post} />)}

            {!loading && !error && totalPages > 1 && (
              <div className="pagination-container">
                <button
                  className="btn-page"
                  disabled={page === 0}
                  onClick={() => {
                    setPage(page - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Trước
                </button>

                <span className="page-info">
                  Trang {page + 1} / {totalPages}
                </span>

                <button
                  className="btn-page"
                  disabled={page >= totalPages - 1}
                  onClick={() => {
                    setPage(page + 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Sau
                </button>
              </div>
            )}
          </div>
        </section>

        <aside className="right-content">
          <OptionSection
            onPriceChange={handlePriceChange}
            activePriceRange={{ min: filters.minPrice, max: filters.maxPrice }}
            onAreaChange={handleAreaChange}
            activeAreaRange={{ min: filters.minArea, max: filters.maxArea }}
          />
          <NewPostSection />
          <SelectionSection />
        </aside>

        <footer className="bottom-wrapper">
          <ServiceSection />
        </footer>
      </main>
    </div>
  );
}
export default HomePage;
