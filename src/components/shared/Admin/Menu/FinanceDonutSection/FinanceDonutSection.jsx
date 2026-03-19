import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './FinanceDonutSection.scss';

const FinanceDonut = ({ label, targetValue, percent, color }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentPercent, setCurrentPercent] = useState(0);
  const COLORS = [color === 'green' ? '#586B54' : '#F1975A', '#F0F0F0'];

  useEffect(() => {
    let startTimestamp = null;
    const duration = 1500;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * targetValue));
      setCurrentPercent(progress * percent);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [targetValue, percent]);

  const chartData = [{ value: currentPercent }, { value: 100 - currentPercent }];
  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN').format(val) + 'đ';

  return (
    <div className={`finance-donut ${color}`}>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={100}>
          <PieChart>
            <Pie data={chartData} innerRadius={32} outerRadius={45} dataKey="value" startAngle={90} endAngle={450} stroke="none" isAnimationActive={false}>
              {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} stroke="none" />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <span className="percent-text pulse">{Math.round(currentPercent)}%</span>
      </div>
      <div className="info">
        <p>{label}</p>
        <h3 className="ticker">{formatCurrency(displayValue)}</h3>
      </div>
    </div>
  );
};

const FinanceDonutSection = () => (
  <div className="finance-container card">
    <h3>Lịch sử tài chính</h3>
    <FinanceDonut label="Phí dịch vụ" targetValue={26100000} percent={75} color="green" />
    <FinanceDonut label="Phí quảng cáo" targetValue={8076000} percent={35} color="orange" />
  </div>
);

export default FinanceDonutSection;