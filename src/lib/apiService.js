import { api } from "./api";

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

  // Quên mật khẩu - POST /api/auth/forgot-password
  forgotPassword: (email) => api.post("/api/auth/forgot-password", { email }),

  // Xác minh reset token trong email - GET /api/auth/verify-resettoken-mail?resetToken=...
  verifyResetToken: (resetToken) =>
    api.get("/api/auth/verify-resettoken-mail", { params: { resetToken } }),

  // Đổi mật khẩu bằng resetToken - POST /api/auth/change-password
  changePassword: (data) => api.post("/api/auth/change-password", data),
};

// ==================== POST APIs ====================
export const postAPI = {
  // Tìm kiếm bài đăng với bộ lọc
  // Backend spec: GET /api/posts/search
  // Thực tế backend thường expect filter được "flatten" thành query params
  // (keyword, minPrice, maxPrice, ...) thay vì searchRequest=<json>.
  search: (searchRequest = {}, page = 0, size = 10, sort = "id,desc") =>
    api.get("/api/posts/search", {
      params: {
        ...searchRequest,
        page,
        size,
        sort,
      },
    }),

  // Lấy chi tiết bài đăng
  getById: (id) => api.get(`/api/posts/${id}`),
};
