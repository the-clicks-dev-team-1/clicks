"use client";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffectPortfolio = ({
  items,
  className,
}: {
  items: {
    image: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onTouchStart={() => setHoveredIndex(idx)} // Добавлено для мобильных устройств
          onTouchEnd={() => setHoveredIndex(null)} // Добавлено для мобильных устройств
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-b from-sky-400 
            to-purple-500 bg-opacity-50 dark:bg-slate-800/[0.8] block rounded-3xl "
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative overflow-hidden w-full h-64 md:h-[360px] rounded-2xl border border-transparent shadow-lg group-hover:border-slate-700 group-hover:border-[var(--dark-border)] relative z-20">
            <Image
              src={item.image}
              alt={item.image}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transition duration-500 hover:scale-110"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
