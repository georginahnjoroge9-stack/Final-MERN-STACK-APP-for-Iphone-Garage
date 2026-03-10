//order controllers for handling order
const Order = require('../models/Order');
const Product = require('../models/Product');

//create order for customer
exports.createOrder = async (req, res) => {
    const {products,total} =req.body;   //products:[{productId,quantity}]
    try {
        //deduct stock
        for (let item of products) {
            const product = await Product .findById(item.product);
            if (product.stock < item.quantity) return res.status(400).json({error:'low stock'});
            product.stock -= item.quantity;
            await product.save();
        }

        //create order
        const order = new Order({
            user: req.user.Id,
            products,
            total});
        await order.save();
        res.status(201).json(order);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};


//get user orders
exports.getUserOrders = async (req,res) => {
    try {
        const orders = await Order.find({user:req.user.Id}).populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};


//Get all orders for the admin
exports.getAllOrders = async (req,res) => {
    try {
        const orders =await Order.find () .populate('products.product').populate('user','email');
        res.json(orders);
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};
















