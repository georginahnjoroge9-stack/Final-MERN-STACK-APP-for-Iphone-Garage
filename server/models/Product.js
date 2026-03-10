//Product model for phones
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, default: "APPLE" },
  price: { type: Number, required: true },
  Storage:{type:String,required:true},
  condition:{type:String,enum:['new','used','Ex Uk','Open Box'],default:'new'},
  stock:{type:Number,required:true,default:0},
  imageUrl: { type: String }, // URL to the product image
});

module.exports =mongoose.model("Product", productSchema);
