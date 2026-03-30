import { api } from "./api";
import { mockPostAPI } from "mocks/mockPosts";

// Toggle này để bật/tắt mock mode
const USE_MOCK_DATA = false; // Đổi thành false để dùng API thật

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
  getProfile: (token) => api.get("/api/auth/profile", {
    headers: {Authorization: `Bearer ${token}`}
  }),

  // Gửi mã Otp (dùng khi thay đổi email) - POST /api/user/sendOtp
  sendOtp: (userData) => api.post("/api/user/sendOtp", userData),

  // Xác thực mã Otp - GET /api/user/verify-otp
  verifyOtp: (email, otp) => api.get("/api/user/verify-otp", { params: { email, otp } }),

  // Cập nhật thông tin cá nhân không cần OTP (username, phone) - PUT /api/user/update-profile
  updateProfile: (userData) => api.put("/api/user/update-profile", userData),

  // Quên mật khẩu - POST /api/auth/forgot-password
  forgotPassword: (email) =>
    api.post("/api/auth/forgot-password", { email }),
  
  // Xác minh reset token trong email - GET /api/auth/verify-resettoken-mail?resetToken=...
  verifyResetToken: (resetToken) =>
    api.get("/api/auth/verify-resettoken-mail", { params: { resetToken } }),
  
  // Đổi mật khẩu bằng resetToken - POST /api/auth/change-password
  changePassword: (data) => api.post("/api/auth/change-password", data),

};

// ==================== POST APIs ====================
export const postAPI = {
  /**
   * Tìm kiếm bài đăng với bộ lọc
   * Backend spec: GET /api/posts/search
   * Thực tế BE thường expect filter được "flatten" thành query params
   * (keyword, minPrice, maxPrice, ...) thay vì searchRequest=<json>
   */
  search: (searchRequest = {}, page = 0, size = 10, sort = "id, desc") =>
    api.get("/api/posts/search", {
      params: {
        ...searchRequest,
        page,
        size,
        sort,
      }
    }),
  getById: (id) => api.get(`/api/posts/${id}`),
};

// ==================== HOME APIs ====================
export const homeAPI = {
  getHomeRooms: (page = 0, size = 10) => {
    return api.get("/api/home", {
      params: {
        page,
        size,
      },
    });
  }
}