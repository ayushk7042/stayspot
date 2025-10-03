// middleware/logAuthHeader.js
import jwt from "jsonwebtoken";

export const logAuthHeader = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  console.log("Incoming Authorization header:", authHeader);

  if (authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token payload:", decoded);
    } catch (err) {
      console.log("JWT verification failed:", err.message);
    }
  } else {
    console.log("No Bearer token found in header.");
  }
  next();
};
