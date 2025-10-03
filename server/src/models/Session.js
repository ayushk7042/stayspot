// models/Session.js
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    token: { type: String, required: true, unique: true }, // hashed refresh token
    userAgent: { type: String },
    ip: { type: String },
    expiresAt: { type: Date, required: true, index: true }
  },
  { timestamps: true }
);

export default mongoose.model("Session", SessionSchema);
