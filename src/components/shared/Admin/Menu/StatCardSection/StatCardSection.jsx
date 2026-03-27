import React from 'react';
import { LayoutList, Users, TrendingUp, MoreHorizontal } from 'lucide-react';
import './StatCardSection.scss';

const StatCard = ({ title, value, trend, icon, color, progress }) => (
    <div className={`stat-card ${color}`}>
        <div className="card-top">
            <div className="title-group">
                <div className="icon-wrapper">{icon}</div>
                <span className="label">{title}</span>
            </div>
            <MoreHorizontal size={18} className="more-icon" />
        </div>
        <div className="card-body">
            <div className="value-group">
                <h2>{value}</h2>
                <span className="trend-badge">+{trend}%</span>
            </div>
            <p className="desc">Tăng trưởng so với tháng trước</p>
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <span className="today-stat">100+ Hôm nay</span>
            </div>
        </div>
    </div>
);

const StatCardSection = () => {
    return (
        <section className="stats-row">
            <StatCard title="Tin đăng" value="10.525" trend="15.2" icon={<LayoutList size={20} />} color="green" progress={75} />
            <StatCard title="Khách hàng" value="512" trend="10.2" icon={<Users size={20} />} color="orange" progress={45} />
            <StatCard title="Hợp đồng" value="320" trend="27.2" icon={<TrendingUp size={20} />} color="teal" progress={60} />
        </section>
    );
};

export default StatCardSection;