import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const PaymentSchema = new Schema({
  name: { type: String, required: true },         // Name of the donor
  to_user: { type: String, required: true },      // Recipient's username or ID
  oid: { type: String, required: true },          // Razorpay order ID
  message: { type: String },                      // Optional message from donor
  amount: { type: Number, required: true },       // Amount donated
  done: { type: Boolean, default: false }         // Payment completed or not
}, {
  timestamps: true                                 // Adds createdAt and updatedAt automatically
});

export default models.Payment || model("Payment", PaymentSchema);
