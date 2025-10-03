import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSlider from "./HeroSlider";

const HeroSliderContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/hero-slides")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setArticles(res.data);
        } else {
          setArticles([]);
          console.error("API returned non-array for slides:", res.data);
        }
      })
      .catch((err) => {
        setArticles([]);
        console.error("Failed to fetch slides:", err);
      });
  }, []);

  return <HeroSlider articles={articles} />;
};

export default HeroSliderContainer;
