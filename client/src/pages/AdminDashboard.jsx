import { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/orders`).then((res) => setOrders(res.data));
  }, []);

  const total = orders.reduce((a, o) => a + o.totalPrice, 0);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>

      <h2>Total Sales: {total}</h2>

      {orders.map((o) => (
        <p key={o._id}>{o.totalPrice}</p>
      ))}
    </div>
  );
};

export default AdminDashboard;
