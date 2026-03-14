import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer
} from 'recharts';
import '../styles/Analytics.css';

const Analytics = () => {
  const [onlineCount, setOnlineCount] = useState(0);
  const [totalCount, setTotalCount]   = useState(0);
  const [hourlyData, setHourlyData]   = useState([]);

  useEffect(() => {
    const u1 = onValue(ref(db, 'onlineUsers'), (snap) => {
      setOnlineCount(snap.exists() ? Object.keys(snap.val()).length : 0);
    });
    const u2 = onValue(ref(db, 'totalVisitors'), (snap) => {
      setTotalCount(snap.val() || 0);
    });
    const u3 = onValue(ref(db, 'onlineHistory'), (snap) => {
      if (snap.exists()) {
        const data = Object.values(snap.val())
          .slice(-20)
          .map(d => ({ time: d.time, count: d.count }));
        setHourlyData(data);
      } else setHourlyData([]);
    });
    return () => { u1(); u2(); u3(); };
  }, []);

  return (
    <div className="analytics-page">

      <div className="analytics-uni-header">
        <img src="/CUTMLOGO.png" alt="CUTM Logo" className="analytics-uni-logo" />
        <div className="analytics-uni-text">
          <h2>Centurion University of Technology and Management</h2>
          <p>Paralakhemundi, Odisha, India</p>
        </div>
      </div>

      {/* <div className="analytics-header">
        <h1>📊 Live Analytics Dashboard</h1>
        <p>Real-time visitor statistics for SCOPES 2027</p>
      </div> */}

      <div className="stat-cards">
        <div className="stat-card online">
          <div className="stat-icon">🟢</div>
          <div className="stat-info">
            <div className="stat-number">{onlineCount}</div>
            <div className="stat-label">Online Right Now..</div>
          </div>
        </div>
        <div className="stat-card total">
          <div className="stat-icon">👥</div>
          <div className="stat-info">
            <div className="stat-number">{totalCount.toLocaleString()}</div>
            <div className="stat-label">Total Visitors</div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card wide">
          <h3>🟢 Live Online Users Graph</h3>
          {hourlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={hourlyData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#667eea" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#667eea" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ borderRadius: '10px', border: '1px solid #667eea' }}
                  labelStyle={{ color: '#667eea', fontWeight: 700 }}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#667eea"
                  strokeWidth={3}
                  fill="url(#colorVisits)"
                  dot={{ fill: '#667eea', r: 5 }}
                  activeDot={{ r: 8, fill: '#764ba2' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : <div className="no-data">No data yet — waiting for users...</div>}
        </div>
      </div>

    </div>
  );
};

export default Analytics;
