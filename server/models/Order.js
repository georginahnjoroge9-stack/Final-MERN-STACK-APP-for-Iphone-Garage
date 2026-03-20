// order model for customer purchases
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    orderItems: Array,
    totalPrice: Number,
  },
  { timestamps: true },
);

export default mongoose.model("Order", orderSchema);
