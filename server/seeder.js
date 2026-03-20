import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";

dotenv.config();
connectDB();

const products = [
  {
    name: "iPhone 15 Pro Max",
    price: 165000,
    image: "/assets/iphone15.jpeg",
    brand: "Apple",
    countInStock: 10,
  },
  {
    name: "iPhone 14 Pro Max",
    price: 149000,
    image: "/assets/iphone14.jpeg",
    brand: "Apple",
    countInStock: 8,
  },
  {
    name: "iPhone 13 Pro Max",
    price: 130000,
    image: "/assets/iphone13.png",
    brand: "Apple",
    countInStock: 5,
  },
   {
    name: "iPhone 17 Pro Max",
    price: 130000,
    image: "/assets/iphone17.png",
    brand: "Apple",
    countInStock: 3,
  },
];

const importData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Data Seeded");
  process.exit();
};

importData();
