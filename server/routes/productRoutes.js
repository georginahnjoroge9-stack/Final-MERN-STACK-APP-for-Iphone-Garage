const express = require('express');
const {addProduct,getProducts,updateProduct,deleteProduct} = require('../controllers/productController');
const {protect,admin}=require('../middleware/authMiddleware');


const router = express.Router();

//product routes with auth and admin middleware
router.get('/', getProducts);    //public route to get all products
router.post('/', protect, admin, addProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;