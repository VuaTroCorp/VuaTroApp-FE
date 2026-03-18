import { api } from "./api";
import { mockPostAPI } from "mocks/mockPosts";

// Toggle này để bật/tắt mock mode
const USE_MOCK_DATA = true; // Đổi thành false để dùng API thật

// ==================== AUTHENTICATION APIs ====================
export const authAPI = {
  // Đăng ký tài khoản - POST /api/auth/signup
  signup: (userData) => api.post("/api/auth/signup", userData),

  // Đăng nhập - POST /api/auth/login
  login: (credentials) => api.post("/api/auth/login", credentials),

  // Refresh token - POST /api/auth/refresh
  refreshToken: (refreshToken) =>
    api.post("/api/auth/refresh", { refreshToken }),

  // Đăng xuất - POST /api/auth/logout
  logout: () => api.post("/api/auth/logout"),

  // Lấy thông tin profile - GET /api/auth/profile
  getProfile: () => api.get("/api/auth/profile"),
};

// ==================== POST APIs ====================
export const postAPI = {
  /**
   * Tìm kiếm bài đăng với bộ lọc động
   * GET /api/posts/search
   */
  search: (searchRequest = {}, page = 0, size = 10, sort = "id,desc") => {
    // Nếu bật mock mode, dùng mock data
    if (USE_MOCK_DATA) {
      console.log("🎭 Using MOCK data");
      return mockPostAPI.search(searchRequest, page, size, sort);
    }
    
    // Nếu không, dùng API thật
    console.log("🌐 Using REAL API");
    return api.get("/api/posts/search", {
      params: {
        ...searchRequest,
        page,
        size,
        sort,
      },
    });
  },

  // Lấy chi tiết bài đăng
  getById: (id) => {
    if (USE_MOCK_DATA) {
      console.log("🎭 Using MOCK detail data for ID:", id);
      return mockPostAPI.getById(id); // Gọi sang hàm getById của bản Mock
    }

    return api.get(`/api/posts/${id}`);
  },
};