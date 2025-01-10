"use client";

import { LinkProps } from "next/link";
import React from "react";
import { Link, usePathname } from "@/i18n/routing";

type ActiveLinkProps = Omit<LinkProps, "locale"> & {
  children: React.ReactNode;
  activeClassName?: string;
  className?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  className,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href; // Check if the current path matches the href

  // Prevent the link from rendering or handling the click if it links to the current page
  if (isActive) {
    return (
      <span className={`${className ?? ""} ${activeClassName}`.trim()}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
