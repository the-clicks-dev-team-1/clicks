"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="z-50 fixed bottom-5 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-b from-sky-400 
            to-purple-500 bg-opacity-50 text-white rounded-full shadow-md transition-all hover:cursor-pointer"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
