"use client";

import React, { useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/routing";

type ScrollButtonProps = {
  children: React.ReactNode;
  targetSection?: string;
  targetPage?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  offset?: number;
  onClick?: () => void;
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
  offset = -140,
}: ScrollButtonProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Scroll after page navigation completes
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const elementPosition =
            section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition + offset,
            behavior: "smooth",
          });
        }, 200); // Small delay to allow the page to load
      }
    }
  }, [pathname, offset]);

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
      } else {
        router.push(`/#contact`);
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
        #duration-300 
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
