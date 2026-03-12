import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    ShieldCheck,
    History,
    Settings,
    LogOut
} from 'lucide-react';
import './AdminSidebar.scss';

const AdminSidebar = () => {
    const adminName = "Đoàn Thầm Vĩnh Huân";

    return (
        <aside className="admin-sidebar">
            <div className="sidebar-top">
                <p className="section-title">MENU</p>
                <nav className="menu-list">
                    <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <LayoutDashboard size={24} />
                        <span>Bảng điều khiển</span>
                    </NavLink>

                    <NavLink to="/admin/users" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <Users size={24} />
                        <span>Người dùng</span>
                    </NavLink>

                    <NavLink to="/admin/pending-posts" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <div className="icon-wrapper">
                        <ShieldCheck size={24} />
                        <span className="badge">12</span>
                        </div>
                        <span>Bài đăng chờ duyệt</span>
                    </NavLink>

                    <NavLink to="/admin/transactions" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <History size={24} />
                        <span>Lịch sử giao dịch</span>
                    </NavLink>
                </nav>

                <div className="separator" />

                <p className="section-title">HỆ THỐNG</p>
                <nav className="menu-list">
                    <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <Settings size={24} />
                        <span>Cài đặt</span>
                    </NavLink>
                </nav>
            </div>

            <div className="sidebar-bottom">
                <button className="logout-btn">
                    <LogOut size={24} />
                    <span>Đăng xuất</span>
                </button>
                <div className="admin-profile">
                <div className="divider-v" />
                    <div className="profile-info">
                        <p className="role">Admin Account</p>
                        <p className="name">{adminName}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default AdminSidebar;