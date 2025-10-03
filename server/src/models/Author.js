import mongoose from "mongoose";
const AuthorSchema = new mongoose.Schema(
  { name: { type: String, required: true },
    bio: String,
    avatar: String },
  { timestamps: true }
);
export default mongoose.model("Author", AuthorSchema);
