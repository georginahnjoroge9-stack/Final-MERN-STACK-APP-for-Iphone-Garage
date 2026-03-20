import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const AdminDashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ordersRes = await axios.get(`${API}/api/orders`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const productsRes = await axios.get(`${API}/api/products`);

      setOrders(ordersRes.data);
      setProducts(productsRes.data);
    };

    fetchData();
  }, []);

  const totalSales = orders.reduce((a, o) => a + o.totalPrice, 0);

  const chartData = {
    labels: orders.map((o) => new Date(o.createdAt).toLocaleDateString()),
    datasets: [
      {
        label: "Daily Sales",
        data: orders.map((o) => o.totalPrice),
      },
    ],
  };

  return (
    <Layout>
      <div className="container">
        <h1>Admin Dashboard</h1>

        <div className="dashboard-cards">
          <div>Total Sales: Ksh {totalSales}</div>
          <div>Total Products: {products.length}</div>
        </div>

        <Bar data={chartData} />
        <Line data={chartData} />

        <h3>Recent Orders</h3>
        {orders.map((o) => (
          <p key={o._id}>
            {o.user?.name} - Ksh {o.totalPrice}
          </p>
        ))}
      </div>
    </Layout>
  );
};

export default AdminDashboard;
