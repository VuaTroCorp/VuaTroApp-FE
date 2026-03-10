import "./HomePage.scss";
import HomeFilterHeader from "components/shared/User/HomeFilterHeader/HomeFilterHeader";
import RoomCard from "components/shared/User/RoomCard/RoomCard";
import OptionSection from "components/shared/User/OptionSection/OptionSection";
import NewPostSection from "components/shared/User/NewPostSection/NewPostSection";
import SelectionSection from "components/shared/User/SelectionSection/SelectionSection";
import ServiceSection from "components/shared/User/ServiceSection/ServiceSection";
import { usePostSearch } from "hooks/usePostSearch";

function HomePage() {
  const {
    posts,
    loading,
    error,
    totalElements,
    filters,
    updateFilters,
    setSort,
  } = usePostSearch();

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
              <div className="loading-state">
                <p>Đang tải dữ liệu...</p>
              </div>
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
            
            {!loading && !error && posts.length > 0 && posts.map(post => (
              <RoomCard key={post.id} data={post} />
            ))}
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
