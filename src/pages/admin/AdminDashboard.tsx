import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import type { Stats } from "../../types/stats";
import { getStats } from "../../api/stats";
import Loader from "../../components/Loader";

function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStats()
      .then(setStats)
      .finally(() => setLoading(false));
  }, []);

  if (!stats) return <p>No stats</p>;

   if (loading) return <Loader />;

  return (
    <div className="container py-5">
      <h1 className="mb-5">Admin Dashboard</h1>

      {/* KPI Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Total Reservations</h5>
            <h2>{stats.total_reservations}</h2>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Average Rating</h5>
            <h2>{stats.average_rating.toFixed(1)} ⭐</h2>
          </div>
        </div>
      </div>

      {/* Reservations Chart */}
      <div className="card p-4 shadow-sm mb-5">
        <h4 className="mb-4">Reservations Per Day</h4>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats.reservations_per_day}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Popular Dishes */}
      <div className="card p-4 shadow-sm">
        <h4 className="mb-4">Popular Dishes</h4>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.popular_items}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reviews" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;
