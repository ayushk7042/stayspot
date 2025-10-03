// import React from "react";

// const Analytics = () => (
//   <div
//     style={{
//       padding: 20,
//       border: "2px dashed #6278f7",
//       borderRadius: 12,
//       color: "#4054b2",
//       fontWeight: 600,
//       fontSize: "1.1rem",
//       textAlign: "center",
//       minHeight: 350,
//     }}
//   >
//     <p>📊 Analytics dashboard coming soon...</p>
//   </div>
// );

// export default Analytics;



import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  BarChart, Bar, Legend,
} from "recharts";

const trafficDataExample = [
  { date: "2025-09-01", visitors: 150 },
  { date: "2025-09-02", visitors: 200 },
  { date: "2025-09-03", visitors: 170 },
  { date: "2025-09-04", visitors: 240 },
  { date: "2025-09-05", visitors: 210 },
  { date: "2025-09-06", visitors: 265 },
  { date: "2025-09-07", visitors: 300 },
];

const postViewsByCategoryExample = [
  { category: "Business", views: 4000 },
  { category: "Technology", views: 3200 },
  { category: "Sports", views: 2600 },
  { category: "Lifestyle", views: 1900 },
  { category: "Health", views: 1450 },
];

const statCardsExample = {
  users: 1200,
  posts: 400,
  comments: 2200,
};

const Analytics = () => {
  const [dateRange, setDateRange] = useState("7");
  const [trafficData, setTrafficData] = useState([]);
  const [postViews, setPostViews] = useState([]);
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 });

  // Simulate fetching analytics data based on date range
  useEffect(() => {
    // Mock delay and data update based on dateRange
    setTimeout(() => {
      setTrafficData(trafficDataExample);
      setPostViews(postViewsByCategoryExample);
      setStats(statCardsExample);
    }, 500);
  }, [dateRange]);

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "20px auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ color: "#4054b2", textAlign: "center", marginBottom: 24 }}>📊 Analytics Dashboard</h2>

      {/* Date Range Selector */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <label htmlFor="dateRange" style={{ marginRight: 10, fontWeight: 600, color: "#4054b2" }}>Date Range:</label>
        <select id="dateRange" value={dateRange} onChange={e => setDateRange(e.target.value)} style={{ padding: 6, fontSize: 16, borderRadius: 6 }}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      {/* Stat Cards */}
      <div style={{
        display: "flex", justifyContent: "space-around", marginBottom: 32,
        flexWrap: "wrap", gap: 16,
      }}>
        <StatCard title="Total Users" value={stats.users} color="#2563eb" />
        <StatCard title="Total Posts" value={stats.posts} color="#9333ea" />
        <StatCard title="Total Comments" value={stats.comments} color="#ea580c" />
      </div>

      {/* Traffic Line Chart */}
      <section style={{ marginBottom: 48 }}>
        <h3 style={{ color: "#4054b2", marginBottom: 12 }}>Website Traffic</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visitors" stroke="#2563eb" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Post Views by Category Bar Chart */}
      <section>
        <h3 style={{ color: "#4054b2", marginBottom: 12 }}>Post Views by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={postViews} layout="vertical" margin={{ left: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="category" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="views" fill="#9333ea" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

const StatCard = ({ title, value, color }) => (
  <div style={{
    backgroundColor: color,
    color: "white",
    padding: "20px 30px",
    borderRadius: 12,
    flex: "1 1 250px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
    textAlign: "center",
  }}>
    <p style={{ fontSize: "1.1rem", fontWeight: 600, margin: 0 }}>{title}</p>
    <p style={{ fontSize: "2.4rem", fontWeight: 900, margin: "8px 0 0" }}>{value}</p>
  </div>
);

export default Analytics;
