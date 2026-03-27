import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, XCircle } from 'lucide-react';
import StatCardSection from 'components/shared/Admin/Menu/StatCardSection/StatCardSection';
import FinanceDonutSection from 'components/shared/Admin/Menu/FinanceDonutSection/FinanceDonutSection';
import UpcomingSchedulesSection from 'components/shared/Admin/Menu/UpcomingSchedulesSection/UpcomingSchedulesSection';
import './DashboardPage.scss';

const DashboardPage = () => {

  const barData = [
    { name: 'Tháng 1', current: 400, last: 240 },
    { name: 'Tháng 2', current: 300, last: 139 },
    { name: 'Tháng 3', current: 200, last: 980 },
    { name: 'Tháng 4', current: 278, last: 390 },
    { name: 'Tháng 5', current: 189, last: 480 },
    { name: 'Tháng 6', current: 239, last: 380 },
    { name: 'Tháng 7', current: 349, last: 430 },
    { name: 'Tháng 8', current: 382, last: 432 },
    { name: 'Tháng 9', current: 343, last: 321 },
    { name: 'Tháng 10', current: 353, last: 231 },
    { name: 'Tháng 11', current: 532, last: 235 },
    { name: 'Tháng 12', current: 349, last: 259 },
  ];

  return (
    <div className="dashboard-page">
      <StatCardSection />

      <div className="middle-grid">
        <div className="chart-container card">
          <div className="card-header">
            <h3>Thống kê tin đăng</h3>
            <select className="period-select"><option>2026</option></select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#586B54" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#586B54" stopOpacity={0}/>
                </linearGradient>
                <clipPath id="animationClip"><rect id="sweep-rect" x="0" y="0" width="0" height="100%" /></clipPath>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={false} />
              <Tooltip contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
              <Area type="monotone" dataKey="current" stroke="#586B54" strokeWidth={3} fillOpacity={1} fill="url(#colorCurrent)" clipPath="url(#animationClip)" isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <FinanceDonutSection />
      </div>

      <div className="bottom-grid">
        <div className="table-container card">
          <div className="card-header">
            <h3>Duyệt tin gần đây</h3>
            <button className="view-all">Xem tất cả</button>
          </div>
          <table className="modern-table">
            <thead>
              <tr><th>Người đăng</th><th>Phòng</th><th>Ngày gửi</th><th>Trạng thái</th><th>Hành động</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><div className="user-info"><div className="ava"></div> Vĩnh Huân</div></td>
                <td>Phòng trọ Q1</td><td>16/03/2026</td><td><span className="badge success">Đã duyệt</span></td>
                <td><div className="actions"><CheckCircle size={16}/><XCircle size={16}/></div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <UpcomingSchedulesSection />
      </div>
    </div>
  );
};

export default DashboardPage;