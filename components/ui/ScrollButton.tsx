"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { useRouter } from "next/navigation";

type ScrollButtonProps = {
  children: React.ReactNode;
  targetSection?: string;
  targetPage?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  offset?: number;
};

const variantStyles = {
  primary: "bg-[var(--ocean-blue)] text-white hover:bg-opacity-90",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline:
    "border border-[var(--ocean-blue)] text-[var(--ocean-blue)] hover:bg-[var(--ocean-blue)] hover:text-white",
};

export default function ScrollButton({
  children,
  targetSection,
  targetPage,
  className = "",
  variant = "primary",
  offset = -100,
}: ScrollButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (targetPage) {
      // If targeting a different page, navigate first
      router.push(
        targetPage + (targetSection ? `#${targetSection.replace("#", "")}` : "")
      );
    } else if (targetSection) {
      const section = document.querySelector(targetSection);
      if (section) {
        const elementPosition =
          section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: "smooth",
        });
      }
    }
  };

  const href = targetPage
    ? targetSection
      ? `${targetPage}#${targetSection.replace("#", "")}`
      : targetPage
    : targetSection
    ? `#${targetSection.replace("#", "")}`
    : "#";

  return (
    <Link
      href={href}
      scroll={false}
      onClick={handleClick}
      className={`
        inline-block 
        px-6 py-3 
        rounded-lg 
        shadow-lg 
        transition 
        duration-300 
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
