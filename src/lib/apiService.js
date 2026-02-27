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
};

// ==================== Thêm API services khác ở đây khi backend đã có ====================
//
// VÍ DỤ: Khi backend có API rooms, thêm như sau:
// export const roomAPI = {
//   getAll: (params) => api.get("/api/rooms", { params }),
//   getById: (id) => api.get(`/api/rooms/${id}`),
//   create: (data) => api.post("/api/rooms", data),
//   update: (id, data) => api.put(`/api/rooms/${id}`, data),
//   delete: (id) => api.delete(`/api/rooms/${id}`),
// };
