import mongoose from "mongoose";

const logoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Logo = mongoose.model("Logo", logoSchema);
