import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import './UpcomingSchedulesSection.scss';

const UpcomingSchedulesSection = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  useEffect(() => {
    const fetchSchedules = async () => {
      setLoading(true);
      await new Promise(r => setTimeout(r, 600)); // Giả lập API
      setSchedules(year === 2026 ? [
        { id: 1, time: `12/0${month} - 09:00`, room: 'Phòng trọ Q1', guest: 'Anh Tuấn', status: 'pending' },
        { id: 2, time: `15/0${month} - 14:30`, room: 'Studio Q7', guest: 'Chị Lan', status: 'confirmed' },
      ] : []);
      setLoading(false);
    };
    fetchSchedules();
  }, [month, year]);

  return (
    <div className="calendar-container card">
      <div className="calendar-header-v2">
        <div className="selectors">
          <CalendarIcon size={18} className="icon-cal" />
          <select value={month} onChange={(e) => setMonth(parseInt(e.target.value))} className="select-custom">
            {[...Array(12)].map((_, i) => <option key={i + 1} value={i + 1}>Tháng {i + 1}</option>)}
          </select>
          <select value={year} onChange={(e) => setYear(parseInt(e.target.value))} className="select-custom">
            {[2025, 2026, 2027].map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <button className="btn-today" onClick={() => { setMonth(now.getMonth() + 1); setYear(now.getFullYear()); }}>Hôm nay</button>
      </div>
      <div className="schedule-list">
        {loading ? <div className="loading-state">Đang tải...</div> : schedules.length > 0 ? (
          schedules.map(item => (
            <div key={item.id} className="schedule-item">
              <div className={`status-bar ${item.status}`}></div>
              <div className="info-col">
                <p className="room-name">{item.room}</p>
                <div className="meta">
                  <span className="time-badge">{item.time}</span>
                  <span className="guest">Khách: {item.guest}</span>
                </div>
              </div>
            </div>
          ))
        ) : <p className="no-data-v2">Trống lịch</p>}
      </div>
    </div>
  );
};

export default UpcomingSchedulesSection;