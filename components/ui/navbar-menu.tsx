"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const Menu = ({
    setActive,
    children,
  }: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
  }) => {
    return (
      <nav
        onMouseLeave={() => setActive(null)} // resets the state
        className="relative rounded-3xl bg-black/99 backdrop-blur-2xl shadow-input flex justify-center space-x-4 px-8 py-6 "
        style={{ boxShadow: '0 1px 3px #38bdf8, 1px 3px #a855f7' }}
      >
        {children}
      </nav>
    );
  };

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-black/85 rounded-3xl overflow-hidden shadow-xl" //  хотел применить backdrop-blur-2xl но почему-то не получилось
                style={{ boxShadow: '0 1px 2px #38bdf8, 1px 2px #a855f7' }}
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  children,
}: {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <div className="flex-shrink-0 rounded-md shadow-2xl text-white">
        {children}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-neutral-300 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-300 hover:text-white "
    >
      {children}
    </Link>
  );
};