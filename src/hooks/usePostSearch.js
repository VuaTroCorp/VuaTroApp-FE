import { useState, useEffect, useCallback } from "react";
import { postAPI } from "lib/apiService";

export const usePostSearch = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    minPrice: null,
    maxPrice: null,
    minArea: null,
    maxArea: null,
    province: "",
    commune: "",
    typeId: null,
  });

  const [page, setPage] = useState(0);
  const [size] = useState(10);
  const [sort, setSort] = useState("id,desc");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const searchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const numericFields = [
        "minPrice",
        "maxPrice",
        "minArea",
        "maxArea",
        "typeId",
      ];
      const cleanFilters = Object.entries(filters).reduce(
        (acc, [key, value]) => {
          if (value === null || value === undefined || value === "") return acc;

          if (numericFields.includes(key)) {
            const numVal = Number(value);
            if (!Number.isNaN(numVal)) acc[key] = numVal;
            return acc;
          }

          acc[key] = value;
          return acc;
        },
        {},
      );

      console.log("Calling API with:", { cleanFilters, page, size, sort });

      const response = await postAPI.search(cleanFilters, page, size, sort);
      const data = response.data || {};

      const mapped = (data.content || []).map((item) => {
        const imgUrls = (item.images || [])
          .map((img) => (typeof img === "string" ? img : img?.url))
          .filter(Boolean);

        const safeImages = imgUrls.length
          ? imgUrls
          : ["https://via.placeholder.com/400x260?text=No+Image"];

        const thumbImages = [
          safeImages[0],
          safeImages[1] || safeImages[0],
          safeImages[2] || safeImages[0],
        ];

        return {
          id: item.id,
          title: item.title,
          price: item.price || 0,
          area: item.area || 0,
          location: item.address,
          description: item.description,
          images: thumbImages,
          imageCount: safeImages.length,
          rating: 5,
          landlord: {
            name: item.user?.username || "Chủ phòng",
            contact: item.user?.phone || item.user?.email || "Liên hệ",
            avatar: "https://via.placeholder.com/80x80?text=User",
          },
          postDate: item.createdAt,
        };
      });

      setPosts(mapped);
      setTotalPages(data.totalPages || data.totalPage || 0);
      setTotalElements(
        data.totalItems || data.totalElements || mapped.length || 0,
      );
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Có lỗi xảy ra khi tìm kiếm";
      setError(errorMsg);
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }, [filters, page, size, sort]);

  useEffect(() => {
    searchPosts();
  }, [searchPosts]);

  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }));
    setPage(0);
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      keyword: "",
      minPrice: null,
      maxPrice: null,
      minArea: null,
      maxArea: null,
      province: "",
      commune: "",
      typeId: null,
    });
    setPage(0);
  }, []);

  return {
    posts,
    loading,
    error,
    totalPages,
    totalElements,
    filters,
    page,
    sort,
    updateFilters,
    resetFilters,
    setSort,
    setPage,
    searchPosts,
  };
};
