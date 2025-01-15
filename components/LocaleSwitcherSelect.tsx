"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { ReactNode, useRef, useState, useTransition } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  localeFlags: { [key: string]: string };
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const t = useTranslations("localeSwitcherMobile");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsRef = useRef<HTMLUListElement>(null);

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

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative inline-block"
      style={{ zIndex: 50, position: "relative" }}
    >
      <label className="block text-white light:text-black b2 mr-2">
        <p className="sr-only">{label}</p>
        <div
          onClick={toggleDropdown}
          className={clsx(
            "inline-flex items-center justify-between bg-transparent cursor-pointer",
            isPending && "opacity-50 cursor-not-allowed"
          )}
        >
          <span className="pr-1 hidden xl:inline">{t(`${selectedValue}`)}</span>
          <span className="pr-1 md:inline xl:hidden">
            {t(`abbr.${selectedValue}`)}
          </span>
          <span
            className={clsx(
              "transition-transform duration-200", // for smooth arrow rotation
              isOpen && "rotate-180"
            )}
          >
            <IoIosArrowDown />
          </span>
        </div>
      </label>
      {isOpen && (
        <ul
          ref={optionsRef}
          className="absolute right-0 z-[999] min-w-fit bg-[var(--bg)] rounded-md shadow-lg mt-1"
        >
          {React.Children.map(children, (child) => {
            // Ensure child is a valid React element and has a value prop
            const value = React.isValidElement(child)
              ? child.props.value
              : null;

            //skip currently selected option
            if (value === selectedValue) return null;

            return (
              <li
                key={value}
                className="cursor-pointer text-white light:text-black hover:text-[var(--text-active)] py-2 px-3 b2"
                onClick={() => value && handleOptionClick(value as string)}
              >
                <span className="md:hidden xl:inline">{t(`${value}`)}</span>
                <span className="hidden md:inline xl:hidden">
                  {t(`abbr.${value}`)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
