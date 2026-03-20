//product CRUD for admin
import Product from "../models/productModel.js";

//  GET ALL PRODUCTS (WITH SEARCH)
export const getProducts = async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  res.json(products);
};

//  GET PRODUCT BY ID (DETAIL PAGE)
export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

//  CREATE PRODUCT (ADMIN)
export const createProduct = async (req, res) => {
  const { name, price, image, brand, storage, condition, countInStock } =
    req.body;

  const product = new Product({
    name,
    price,
    image,
    brand,
    storage,
    condition,
    countInStock,
    user: req.user._id,
  });

  const createdProduct = await product.save();

  res.status(201).json(createdProduct);
};

// UPDATE PRODUCT (ADMIN)
export const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.image = req.body.image || product.image;
    product.brand = req.body.brand || product.brand;
    product.storage = req.body.storage || product.storage;
    product.condition = req.body.condition || product.condition;
    product.countInStock = req.body.countInStock || product.countInStock;

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

//  DELETE PRODUCT (ADMIN)
export const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};
