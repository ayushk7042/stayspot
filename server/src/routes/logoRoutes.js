// import express from "express";
// import multer from "multer";
// import path from "path";
// import { Logo } from "../models/Logo.js";

// const router = express.Router();

// // Set storage engine for multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/logos"); // Folder path
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

// // ===== GET all logos =====
// router.get("/", async (req, res) => {
//   try {
//     const logos = await Logo.find().sort({ createdAt: -1 });
//     res.json(logos);
//   } catch (err) {
//     console.error("Error fetching logos:", err);
//     res.status(500).json({ error: "Failed to fetch logos" });
//   }
// });

// // ===== POST upload logo =====
// router.post("/upload", upload.single("logo"), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//     const newLogo = new Logo({
//       filename: req.file.filename,
//       url: `${req.protocol}://${req.get("host")}/uploads/logos/${req.file.filename}`,
//     });

//     await newLogo.save();
//     res.status(201).json(newLogo);
//   } catch (err) {
//     console.error("Error uploading logo:", err);
//     res.status(500).json({ error: "Failed to upload logo" });
//   }
// });

// export default router;




import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { Logo } from "../models/Logo.js";

const router = express.Router();

// ===== Multer storage setup =====
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads/logos";
    fs.mkdirSync(dir, { recursive: true }); // create folder if not exists
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ===== GET all logos =====
router.get("/", async (req, res) => {
  try {
    const logos = await Logo.find().sort({ createdAt: -1 });
    res.json(logos);
  } catch (err) {
    console.error("Error fetching logos:", err);
    res.status(500).json({ error: "Failed to fetch logos" });
  }
});

// ===== POST upload a logo =====
router.post("/upload", upload.single("logo"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const newLogo = new Logo({
      filename: req.file.filename,
      url: `${req.protocol}://${req.get("host")}/uploads/logos/${req.file.filename}`,
    });

    await newLogo.save();
    res.status(201).json(newLogo);
  } catch (err) {
    console.error("Error uploading logo:", err);
    res.status(500).json({ error: "Failed to upload logo" });
  }
});

// ===== DELETE a logo =====
router.delete("/:id", async (req, res) => {
  try {
    const logo = await Logo.findById(req.params.id);
    if (!logo) return res.status(404).json({ error: "Logo not found" });

    // Delete file from server
    const filePath = path.join(process.cwd(), "uploads/logos", logo.filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    // Delete from database
    await Logo.findByIdAndDelete(req.params.id);

    res.json({ message: "Logo deleted successfully" });
  } catch (err) {
    console.error("Error deleting logo:", err);
    res.status(500).json({ error: "Failed to delete logo" });
  }
});

export default router;
