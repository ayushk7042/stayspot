import 'dotenv/config';
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./src/models/User.js";

async function resetAdminPassword() {
  await mongoose.connect(process.env.MONGODB_URI);
  const hashedPassword = await bcrypt.hash("YourNewPassword123", 12);

  const result = await User.updateOne(
    { email: "admin@example.com" },
    { 
      password: hashedPassword,
      role: "admin",
      name: "Admin User"  // Add this required field
    }
  );

  if (result.matchedCount === 0) {
    await User.create({
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      name: "Admin User"  // Add this required field
    });
  }

  console.log("Admin password reset.");
  process.exit();
}

resetAdminPassword();
