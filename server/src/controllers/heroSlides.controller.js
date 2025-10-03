// controllers/heroSlides.controller.js
import HeroSlide from "../models/HeroSlide.js";

// Get all slides
// export const getHeroSlides = async (req, res) => {
//   const slides = await HeroSlide.find().sort({ createdAt: -1 });
//   res.json(slides);
// };
export const getHeroSlides = async (req, res) => {
  try {
    const slides = await HeroSlide.find().sort({ createdAt: -1 });
    res.json(slides); // send array of slides as JSON
  } catch (err) {
    res.status(500).json({ message: "Server error fetching slides" });
  }
};

// Add new slide
export const addHeroSlide = async (req, res) => {
  const { title, excerpt, cover, category, icon } = req.body;
  const slide = new HeroSlide({ title, excerpt, cover, category, icon });
  await slide.save();
  res.status(201).json(slide);
};

// Update slide
export const updateHeroSlide = async (req, res) => {
  const { id } = req.params;
  const { title, excerpt, cover, category, icon } = req.body;
  const slide = await HeroSlide.findByIdAndUpdate(
    id,
    { title, excerpt, cover, category, icon },
    { new: true }
  );
  res.json(slide);
};

// Delete slide
export const removeHeroSlide = async (req, res) => {
  const { id } = req.params;
  await HeroSlide.findByIdAndDelete(id);
  res.json({ message: "HeroSlide deleted" });
};
