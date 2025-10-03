


// import jwt from "jsonwebtoken";
// import User from "../models/User.js";

// /**
//  * Middleware to verify JWT and attach user info to req.user
//  */
// export const requireAuth = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ message: "Authorization token missing" });
//     }

//     const token = authHeader.split(" ")[1];
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     if (!decoded || !decoded.id) {
//       return res.status(401).json({ message: "Invalid token" });
//     }

//     // Attach minimal user info (id, role, email) to request object
//     req.user = { id: decoded.id, role: decoded.role, email: decoded.email };
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Authentication failed" });
//   }
// };

// /**
//  * Middleware factory to restrict access based on user roles
//  * Accepts one or more allowed roles as parameters
//  */
// export const requireRole = (...roles) => (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).json({ message: "Authentication required" });
//   }

//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ message: "Forbidden: insufficient permissions" });
//   }

//   next();
// };

// /**
//  * Convenience middleware specifically requiring 'admin' role
//  */
// export const requireAdmin = (req, res, next) => {
//   return requireRole("admin")(req, res, next);
// };

// /**
//  * Optional middleware to load full user document from database
//  * Attaches complete user object (minus password) to req.user
//  */
// export const loadUser = async (req, res, next) => {
//   try {
//     if (!req.user || !req.user.id) return next();

//     const user = await User.findById(req.user.id).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });

//     req.user = user;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };



import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = { id: decoded.id, role: decoded.role, email: decoded.email };
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    return res.status(401).json({ message: "Authentication failed" });
  }
};


/**
 * Middleware factory to restrict access based on user roles
 * Accepts one or more allowed roles as parameters
 */
export const requireRole = (...roles) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication required" });
  }

  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Forbidden: insufficient permissions" });
  }

  next();
};

/**
 * Convenience middleware specifically requiring 'admin' role
 */
export const requireAdmin = (req, res, next) => {
  return requireRole("admin")(req, res, next);
};

/**
 * Optional middleware to load full user document from database
 * Attaches complete user object (minus password) to req.user
 */
export const loadUser = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) return next();

    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
