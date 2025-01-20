"use client";

import { LinkProps } from "next/link";
import React, { useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";

type ActiveLinkProps = Omit<LinkProps, "locale"> & {
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
  scroll?: boolean;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  className,
  href,
  scroll = false,
  ...props
}) => {
  const pathname = usePathname();
  const isHashLink = typeof href === "string" && href.startsWith("/#");
  const isActive = pathname === href; // Check if the current path matches the href

  useEffect(() => {
    if (isHashLink && typeof window !== "undefined") {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);

      const scrollToElement = () => {
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

      // If already on the correct page, scroll immediately
      if (pathname === "/") {
        scrollToElement();
      }
    }
  }, [href, pathname, isHashLink]);

  // Prevent the link from rendering or handling the click if it links to the current page
  if (isActive) {
    return (
      <span className={`${className ?? ""} ${activeClassName}`.trim()}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      scroll={isHashLink ? false : scroll}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
