import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  username: { type: String, required: true, unique: true },
  profilepic: { type: String },
  coverpic: { type: String }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt
});

export default models.User || model("User", UserSchema);
