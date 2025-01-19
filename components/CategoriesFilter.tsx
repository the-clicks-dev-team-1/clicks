"use client";
import { useTranslations } from "next-intl";
import React, { useCallback, useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CategoriesFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: any[];
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const t = useTranslations("blog");

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = useCallback(
    (categoryId: string | null) => {
      if (selectedCategory === categoryId) {
        setSelectedCategory(null);
      } else {
        setSelectedCategory(categoryId);
      }
      // if (carouselRef.current) {
      //   carouselRef.current.scrollLeft = 0; // Сбрасываем позицию прокрутки
      // }
    },
    [selectedCategory]
  );

  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Прокрутка влево на 200px
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Прокрутка вправо на 200px
    }
  }, []);

  return (
    <div className="container md:px-10 mt-32 text-center">
      <div className="flex justify-between items-center">
        <button
          onClick={scrollLeft}
          className="text-[var(--gray-0)] bg-[var(--gray-40)] p-2 rounded-full hover:bg-[var(--blue2)]"
        >
          <BiChevronLeft size={30} />
        </button>
        <div
          className="overflow-hidden flex-1 mx-4 flex items-center"
          ref={carouselRef}
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 mx-2 flex-shrink-0 w-48 h-24 rounded-lg text-center flex items-center justify-center ${
                selectedCategory === null
                  ? "bg-[var(--ocean-blue)]"
                  : "bg-[var(--gray-40)]"
              } text-white font-bold shadow-lg hover:bg-[var(--blue2)] transition duration-300`}
            >
              {t("allCategories")}
            </button>
            {categories.map((category) => (
              <button
                key={category.sys.id}
                onClick={() => handleCategoryChange(category.sys.id)}
                className={`px-4 py-2 mx-2 flex-shrink-0 w-48 h-24 rounded-lg text-center flex items-center justify-center ${
                  selectedCategory === category.sys.id
                    ? "bg-[var(--ocean-blue)]"
                    : "bg-[var(--gray-40)]"
                } text-white font-bold shadow-lg hover:bg-[var(--blue2)] transition duration-300 whitespace-normal`}
              >
                {category.fields.title}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="text-[var(--gray-0)] bg-[var(--gray-40)] p-2 rounded-full hover:bg-[var(--blue2)]"
        >
          <BiChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default CategoriesFilter;
