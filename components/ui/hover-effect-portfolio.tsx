"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";

export const HoverEffectPortfolio = ({
  items,
  className,
}: {
  items: {
    image: string;
    name: string;
    description: string;
    category: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("portfolio.items");

  console.log("items:", items);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={t(item?.link)}
          key={t(item?.link)}
          target="_blanc"
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
              src={t(item.image)}
              alt={t(item.image)}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transition duration-500 hover:scale-110"
            />
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  className="absolute inset-0 h-full flex flex-col justify-between bg-[#ededed]/90 text-[var(--text-70)] px-2 py-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="">
                      <h3 className="text-2xl font-[900] uppercase mb-1">
                        {t(item.name)}
                      </h3>
                      <p className="text-lg">{t(item.description)}</p>
                    </div>
                  </div>
                  <span className="text-xl font-bold uppercase">
                    {t(item.category)}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>
      ))}
    </div>
  );
};
