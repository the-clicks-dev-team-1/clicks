"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  // Initial render with minimal styling
  if (!mounted) {
    return (
      <div
        className={cn(
          "mx-auto w-full relative rounded-2xl overflow-hidden",
          containerClassName
        )}
      >
        <div className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden">
          <div className={cn("h-full px-4 py-20 sm:px-10", className)}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        isDark ? "bg-indigo-800" : "bg-white",
        // Add white background wrapper for light mode
        !isDark && "p-[1px] bg-white",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden",
          // Add matching background in light mode
          !isDark && "bg-white"
        )}
      >
        {mounted && isDark && (
          <div className="absolute inset-0 bg-[var(--overlay)] z-10"></div>
        )}
        <div
          className={cn(
            "z-20 relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden",
            // Only apply gradient in dark mode
            isDark &&
              "[background-image:radial-gradient(#084378,rgba(255,255,255,0))]",
            !isDark && "bg-white", // Add white background in light mode
            {
              "shadow-[0_10px_32px_rgba(34,_42,_53,_0.12),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.05),_0_4px_6px_rgba(34,_42,_53,_0.08),_0_24px_108px_rgba(47,_48,_55,_0.10)]":
                isDark,
              // Add subtle shadow for light mode
              "shadow-[0_2px_8px_rgba(0,0,0,0.05)]": !isDark,
            }
          )}
        >
          <motion.div
            style={{
              transform: isHovering
                ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
              transition: "transform 0.1s ease-out",
            }}
            className={cn(
              "h-full px-4 py-20 sm:px-10",
              !isDark && "bg-white", // Add white background to inner div in light mode
              className
            )}
          >
            {mounted && isDark && <Noise />}
            {children}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/images/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
