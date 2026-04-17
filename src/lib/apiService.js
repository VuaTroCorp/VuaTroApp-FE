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

  // Gửi mã Otp - POST /api/user/sendOtp
  sendOtp: (userData) => api.post("/api/user/sendOtp", userData),

  // Xác thực mã Otp - GET /api/user/verify-otp
  verifyOtp: (email, otp) => api.get("/api/user/verify-otp", { params: { email, otp } }),

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

  // Get details from one post
  getById: (id) => api.get(`/api/posts/${id}`),

  // Create a new post (For sending files, use multipart/form-data)
  createPost: (formData) => api.post("/api/posts/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),

  // Get my posts (with pagination)
  getMyPosts: (page = 0, size = 10) => api.get("/api/profile/my-posts", {
    params: {
      page,
      size,
    },
  }),

  // Update my post (id + formData)
  editPost: (id, formData) => api.post(`/api/posts/edit/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),

  // Delete my post
  deletePost: (id) => api.delete(`/api/posts/delete/${id}`),
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

// ==================== RENTAL PROCEDURES APIs ====================
export const rentalAPI = {
  // Schedule a room viewing
  registerView: (postId, data) => api.post(`/api/rental-procedures/register-view/${postId}`, data),
};

// ==================== REVIEW APIs ====================
export const reviewAPI = {
  // Get a list of reviews for a post
  getReviewsByPost: (postId) => api.get(`/api/reviews/post/${postId}`),

  // Write a new review
  createReview: (reviewData) => api.post("/api/reviews/create", reviewData),

  // Edit review
  editReview: (reviewId, reviewData) => api.put(`/api/reviews/edit/${reviewId}`, reviewData),

  // Delete review
  deleteReview: (reviewId) => api.delete(`/api/reviews/delete/${reviewId}`),
};

// ==================== FAVORITE APIs ====================
export const favoriteAPI = {
  // Get my favorite posts
  getMyFavorites: (params) => api.get("/api/favorites/my-favorites", { params }),
  
  // Like a post
  likePost: (postId) => api.post(`/api/favorites/like/${postId}`),

  // Unlike a post
  unlikePost: (postId) => api.post(`/api/favorites/unlike/${postId}`),

};