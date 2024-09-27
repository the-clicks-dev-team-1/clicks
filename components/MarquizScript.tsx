"use client";
import { useEffect } from "react";

const MarquizScript = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures the script runs only on the client-side
      const marquizScript = document.createElement("script");
      marquizScript.src = "https://script.marquiz.io/v2.js";
      marquizScript.async = true;
      marquizScript.onload = function () {
        if (document.readyState !== "loading") {
          window.Marquiz.init({
            host: "//quiz.marquiz.io",
            region: "us",
            id: "66f5f810439a5a00265f8849",
            autoOpen: 10,
            autoOpenFreq: "once",
            openOnExit: false,
            disableOnMobile: false,
          });
        } else {
          document.addEventListener("DOMContentLoaded", function () {
            window.Marquiz.init({
              host: "//quiz.marquiz.io",
              region: "us",
              id: "66f5f810439a5a00265f8849",
              autoOpen: 10,
              autoOpenFreq: "once",
              openOnExit: false,
              disableOnMobile: false,
            });
          });
        }
      };
      document.head.appendChild(marquizScript);
    }
  }, []);

  return null; // No need to render anything, the script is appended dynamically
};

export default MarquizScript;
