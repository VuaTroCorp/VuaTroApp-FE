import { Routes, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import RoleBasedRoute from "./RoleBasedRoute";
//LAYOUTS
import AuthLayout from "layouts/AuthLayout";
import UserLayout from "layouts/UserLayout";
import AdminLayout from "layouts/AdminLayout";
//AUTH PAGES
import DashboardPage  from "pages/Admin/Dashboard/DashboardPage";
import LoginPage from "pages/Auth/LoginPage/LoginPage";
import RegisterPage from "pages/Auth/RegisterPage/RegisterPage";
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage/ForgotPasswordPage";
// import VerifyOtpPage from "pages/Auth/VerifyOtpPage/VerifyOtpPage";
import ResetPasswordPage from "pages/Auth/ResetPasswordPage/ResetPasswordPage";
import HomePage from "pages/User/Home/HomePage";
//FEATURES
import PostNewsPage from "pages/User/PostNews/PostNewsPage";
// import UpgradeAccount from "features/upgradeAccount/upgrade";

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

            <Route element={<UserLayout/>}>
                {/* <Route index element={<HomePage/>}/> */}
                <Route path="user" element={<RoleBasedRoute allowedRoles={["USER"]}/>}>
                    <Route path="home" element={<HomePage/>}/>
                    <Route path="post-news" element={<PostNewsPage/>}/>
                </Route>
            </Route>

            <Route element={<AdminLayout />}>
                {/* <Route index element={<HomePage/>}/> */}
                <Route path="admin" element={<RoleBasedRoute allowedRoles={["ADMIN"]}/>}>
                    <Route path="dashboard" element={<DashboardPage/>}/>
                </Route>
            </Route>

            <Route path="/forbidden" element={<div>Bạn không có quyền truy cập trang này.</div>}/>
            <Route path="*" element={<div>Trang không tồn tại</div>} />
        </Routes>
    );
}
