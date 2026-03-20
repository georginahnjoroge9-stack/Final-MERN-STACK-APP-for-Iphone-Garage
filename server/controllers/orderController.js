//order controllers for handling order
import Order from "../models/Order.js";

// CREATE ORDER
export const createOrder = async (req, res) => {
  const order = new Order({
    user: req.user._id,
    orderItems: req.body.orderItems,
    totalPrice: req.body.totalPrice,
  });

  const created = await order.save();
  res.status(201).json(created);
};

// GET ORDERS (ADMIN)
export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("user", "name");
  res.json(orders);
};
