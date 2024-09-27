"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector(
        'script[src="https://script.marquiz.io/v2.js"]'
      );

      if (!existingScript) {
        const initMarquiz = () => {
          if (window.Marquiz) {
            window.Marquiz.init({
              host: "//quiz.marquiz.io",
              region: "us",
              id: "66f5f810439a5a00265f8849",
              autoOpen: 10,
              autoOpenFreq: "once",
              openOnExit: false,
              disableOnMobile: false,
            });
          }
        };

        const script = document.createElement("script");
        script.src = "https://script.marquiz.io/v2.js";
        script.async = true;
        script.onload = initMarquiz;

        document.head.appendChild(script);

        return () => {
          document.head.removeChild(script); // Clean up the script when unmounted
        };
      }
    }
  }, []);

  const handleOpenQuiz = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Attempting to open quiz...");

    const marquiz__bg = document.querySelector(".marquiz__bg");
    const marquiz__frame = document.querySelector(".marquiz__frame");
    if (marquiz__bg && marquiz__frame) {
      marquiz__bg.classList.add("marquiz__bg_open");
      marquiz__frame.classList.add("marquiz__frame_open");
    }

    if (typeof window !== "undefined" && window.Marquiz) {
      try {
        window.Marquiz.showModal("66f5f810439a5a00265f8849");
      } catch (error) {
        console.error("Error opening Marquiz modal:", error);
      }
    } else {
      console.error("Marquiz is not defined.");
    }
  };

  return (
    <CardContainer className="inter-var w-full max-w-none relative mx-4 md:mx-8 lg:mx-24">
      <CardBody className="bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-2xl p-6 border flex flex-col lg:flex-row">
        <div className="flex flex-col w-full lg:w-1/2 pt-8 md:pt-16 pl-4 md:pl-8 lg:pl-24">
          <CardItem
            translateZ="50"
            className="text-xl md:text-3xl font-bold text-white"
          >
            Unlock Your Business&apos;s Full Potential with a Tailored Marketing
            Proposal
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-base md:text-lg mt-4 text-white text-justify pr-8"
          >
            Take our brief quiz and receive a customized marketing proposal,
            complete with a special bonus. Discover how our full-service digital
            marketing agency can help you achieve your goals and drive growth.
            It&apos;s quick, easy, and tailored just for you.
          </CardItem>
          <CardItem
            onClick={handleOpenQuiz} // Trigger quiz modal on click
            href="#popup:marquiz_66f5f810439a5a00265f8849"
            translateZ={20}
            as="button"
            className="mt-8 px-4 py-2 rounded-2xl bg-black dark:bg-white dark:text-black text-white text-lg md:text-xl font-bold"
          >
            Get Your Custom Proposal Now
          </CardItem>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <CardItem translateZ="100" className="w-full">
            <Image
              src="/images/proposal.jpg"
              height="400"
              width="700"
              className="w-full h-64 md:h-80 lg:h-100 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
