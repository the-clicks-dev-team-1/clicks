"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { useParams } from "next/navigation";
import React, { ReactNode, useState, useTransition } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  localeNames: { [key: string]: string };
};

export default function LocaleSwitcherSelectMobile({
  defaultValue,
  label,
  localeNames,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    startTransition(() => {
      router.replace(
        //@ts-expect-error (okay)
        { pathname, params },
        { locale: value }
      );
    });
    setIsOpen(false);
  };

  const toggleRow = () => {
    setIsOpen((prev) => !prev);
  };

  const getSecondLanguage = () => {
    return selectedValue === "en" ? "fr" : "en";
  };

  return (
    <div className="relative">
      <label className="block text-[var(--text-db)] text-lg mr-2">
        <p className="sr-only">{label}</p>
        <div
          onClick={toggleRow}
          className={clsx(
            "inline-flex items-center justify-between bg-transparent cursor-pointer",
            isPending && "opacity-50 cursor-not-allowed"
          )}
        >
          <span className="pr-1">{localeNames[selectedValue]}</span>
          <span
            className={clsx(
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          >
            <IoIosArrowDown />
          </span>
        </div>
      </label>

      {isOpen && (
        <div
          className="w-full bg-[var(--bg)] rounded-md mt-2 py-2 px-4 cursor-pointer"
          onClick={() => handleOptionClick(getSecondLanguage())}
        >
          {localeNames[getSecondLanguage()]}
        </div>
      )}
    </div>
  );
}
