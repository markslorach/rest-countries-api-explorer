"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      className={`shadow-sm opacity-90 bg-black/60 sm:bg-black sm:opacity-50 sm:hover:opacity-70 transition-opacity duration-300 rounded-full fixed sm:bottom-24 sm:right-10 bottom-24 right-4 p-2.5 ${
        visible ? "" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="text-white" />
    </button>
  );
};

export default ScrollButton;
