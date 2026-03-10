//product CRUD for admin
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

//multer configuration for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage }).single("image");

//add product -admin
exports.addProduct = [
  upload,
  async (req, res) => {
    const { name, brand, price, Storage, condition, stock } = req.body;
    try {
      const product = new Product({
        name,
        brand,
        price,
        Storage,
        condition,
        stock,
        image: req.file ? `/uploads/${req.file.filename}` : null,
      });
      await product.save();
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
];

//get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update product-admin
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//delete products-admin
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
};


