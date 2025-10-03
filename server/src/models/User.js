

// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//       index: true,
//     },
//     password: {
//       type: String,
//       required: true, // store hashed passwords only
//     },
//     role: {
//       type: String,
//       enum: ["admin", "editor", "author", "viewer","user"],
//       default: "author", 
//       index: true,
//     },
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     bio: {
//       type: String,
//     },
//     avatar: {
//       type: String,
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true, // adds createdAt and updatedAt
//   }
// );

// export default mongoose.model("User", UserSchema);



import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true, // store hashed passwords only
    },
    role: {
      type: String,
      enum: ["admin", "editor", "author", "viewer", "user"],
      default: "author",
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
    },
    avatar: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export default mongoose.model("User", UserSchema);
