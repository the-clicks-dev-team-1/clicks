"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      // Hide body overflow when an image is in full-screen mode
      document.body.style.overflow = "hidden";
    } else {
      // Restore body overflow when exiting full-screen mode
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex !== null ? (prevIndex + 1) % cards.length : 0
      );
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) =>
        prevIndex !== null
          ? (prevIndex - 1 + cards.length) % cards.length
          : cards.length - 1
      );
    }
  };

  return (
    <div className="w-full h-full mb-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(i)}
            className="relative overflow-hidden bg-white rounded-xl h-full w-full cursor-pointer"
          >
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}

      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SelectedCard
            selected={cards[selectedIndex]}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </motion.div>
      )}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      src={card.thumbnail}
      height="700"
      width="100%"
      className="object-cover h-[350px] w-full"
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({
  selected,
  onClose,
  onNext,
  onPrev,
}: {
  selected: Card;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div className="relative flex justify-center items-center w-full h-full z-50">
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
      >
        &#9664;
      </button>
      <motion.img
        src={selected.thumbnail}
        alt="Selected"
        className="object-cover max-h-[90%] max-w-[90%] rounded-lg"
      />
      <div className="absolute bottom-10 text-white text-center z-20 p-4 bg-black bg-opacity-70 rounded-lg">
        {selected.content}
      </div>
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
      >
        &#9654;
      </button>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-10"
      >
        &times;
      </button>
    </div>
  );
};
