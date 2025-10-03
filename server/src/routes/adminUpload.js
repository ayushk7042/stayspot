// // // const express = require("express");
// // // const multer = require("multer");
// // // const path = require("path");
// // // const router = express.Router();

// // // // Configure multer storage
// // // const storage = multer.diskStorage({
// // //   destination: function (req, file, cb) {
// // //     cb(null, "uploads/"); // Ensure this folder exists and is served statically
// // //   },
// // //   filename: function (req, file, cb) {
// // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// // //     const ext = path.extname(file.originalname);
// // //     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
// // //   },
// // // });

// // // const upload = multer({ storage: storage });

// // // // POST /api/admin/upload
// // // router.post("/upload", upload.single("file"), (req, res) => {
// // //   if (!req.file) {
// // //     return res.status(400).json({ error: "No file uploaded" });
// // //   }

// // //   // Construct the accessible URL for the uploaded file
// // //   const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

// // //   res.json({ url: fileUrl });
// // // });

// // // export default router;

// // import express from "express";
// // import multer from "multer";
// // import path from "path";

// // const router = express.Router();

// // // Configure multer storage
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/"); // Folder to save uploads
// //   },
// //   filename: function (req, file, cb) {
// //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
// //     const ext = path.extname(file.originalname);
// //     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
// //   },
// // });

// // const upload = multer({ storage });

// // router.post("/upload", upload.single("file"), (req, res) => {
// //   if (!req.file) {
// //     return res.status(400).json({ error: "No file uploaded" });
// //   }

// //   const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
// //   res.json({ url: fileUrl });
// // });

// // export default router;




// import express from "express";
// import multer from "multer";
// import path from "path";

// const router = express.Router();

// // Configure multer storage to customize upload destination and filename
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads/"); // Ensure this folder exists or create it before use
//   },
//   filename(req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
//   },
// });

// const upload = multer({ storage });

// // POST /upload: handle single file upload under 'file' field
// router.post("/upload", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   // Construct a full URL to access uploaded file
//   const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//   res.json({ url: fileUrl });
// });

// export default router;





import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder to save uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

export default router;
