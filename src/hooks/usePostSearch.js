import { useState, useEffect, useCallback } from "react";
import { postAPI } from "lib/apiService";

export const usePostSearch = () => {
  const [filters, setFilters] = useState({
    keyword: "",
    minPrice: null,
    maxPrice: null,
    minArea: null,
    maxArea: null,
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
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(
          ([_, value]) => value !== null && value !== undefined && value !== "",
        ),
      );

      console.log("Calling API with:", { cleanFilters, page, size, sort });

      const response = await postAPI.search(cleanFilters, page, size, sort);
      const data = response.data;

      console.log("API Response:", {
        totalElements: data.totalElements,
        contentLength: data.content?.length,
      });

      setPosts(data.content || []);
      setTotalPages(data.totalPages || 0);
      setTotalElements(data.totalElements || 0);
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
