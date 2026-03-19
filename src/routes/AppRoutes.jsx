import { Routes, Route, Navigate } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import RoleBasedRoute from "./RoleBasedRoute";
import { getHomePath } from "lib/auth";
//LAYOUTS
import AuthLayout from "layouts/AuthLayout";
import UserLayout from "layouts/UserLayout";
import AdminLayout from "layouts/AdminLayout";
//AUTH PAGES
import DashboardPage  from "pages/Admin/Dashboard/DashboardPage";
import LoginPage from "pages/Auth/LoginPage/LoginPage";
import RegisterPage from "pages/Auth/RegisterPage/RegisterPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
import ForbiddenPage from "pages/Auth/ForbiddenPage/ForbiddenPage";
// import VerifyOtpPage from "pages/Auth/VerifyOtpPage/VerifyOtpPage";
import ResetPasswordPage from "pages/Auth/ResetPasswordPage/ResetPasswordPage";
import GoogleCallback from "pages/Auth/GoogleCallback/GoogleCallback";
import HomePage from "pages/User/Home/HomePage";
//FEATURES
import PostNewsPage from "pages/User/PostNews/PostNewsPage";
import ProfilePage from "pages/User/Profile/ProfilePage";
import HistoryTransactionPage from "pages/User/HistoryTransaction/HistoryTransactionPage";
import PreOrderPage from "pages/User/PreOrderPage/PreOrderPage";
import ManagePostPage from "pages/User/ManagePostPage/ManagePostPage";
import PostDetailPage from "pages/User/PostDetail/PostDetailPage";
// import UpgradeAccount from "features/upgradeAccount/upgrade";

const HomeRedirect = () => <Navigate to={getHomePath()} replace/>;

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route element={<AuthLayout />}>    
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="verify-otp" element={<VerifyOtp />} /> */}
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Route>

      <Route path="login/oauth2/code/google" element={<GoogleCallback />} />

      <Route element={<UserLayout />}>
        <Route index element={<HomeRedirect />} />
        <Route path="user" element={<RoleBasedRoute allowedRoles={["USER"]} />}>
          <Route path="home" element={<HomePage />} />
          <Route path="post-news" element={<PostNewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="history-transaction" element={<HistoryTransactionPage />} />  
          <Route path="pre-order" element={<PreOrderPage />} /> 
          <Route path="manage-post" element={<ManagePostPage/>} />
          <Route path="google-callback" element={<GoogleCallback />} />
          <Route path="posts/:id" element={<PostDetailPage/>} />          
        </Route>
        
      </Route>

      <Route element={<AdminLayout />}>
        <Route path="admin" element={<RoleBasedRoute allowedRoles={["ADMIN"]} />} >
          <Route index element={<Navigate to="dashboard" replace />}/>
          <Route path="dashboard" element={<DashboardPage/>}/>
        </Route>
      </Route>

      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="*" element={<HomeRedirect />} />
    </Routes>
  );
}
