import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
    },
  ],
  totalPrice: Number,
  paymentMethod: { type: String, enum: ["esewa", "khalti", "cod"], default: "cod" },
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
