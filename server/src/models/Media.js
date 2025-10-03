// models/Media.js
import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    alt: { type: String },
    width: Number,
    height: Number,
    type: { type: String, enum: ["image", "video", "file"], default: "image" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true }
  },
  { timestamps: true }
);

export default mongoose.model("Media", MediaSchema);
