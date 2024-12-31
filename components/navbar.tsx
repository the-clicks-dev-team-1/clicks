"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { PiStrategy, PiMegaphone, PiRocketLaunch } from "react-icons/pi";
import { TbSeo, TbSettingsAutomation } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";
import {
  MdDeveloperMode,
  MdOutlineMarkEmailRead,
  MdContentPasteSearch,
  MdBrush,
  MdOutlineWbSunny,
} from "react-icons/md";
import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";

import logo from "../public/logo/Logo1.svg";
import { IoIosArrowDown, IoMdMoon } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import ActiveLink from "./activelink";
import { useTheme } from "next-themes";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: React.ElementType;
};

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  {
    label: "Services",
    link: "#",
    children: [
      {
        label: "Web Development",
        link: "/services/webdev",
        iconImage: MdDeveloperMode,
      },
      {
        label: "Strategy Development",
        link: "/services/stratdev",
        iconImage: PiStrategy,
      },
      { label: "SEO", link: "/services/seo", iconImage: TbSeo },
      {
        label: "PPC Advertising",
        link: "/services/ppc",
        iconImage: SiGoogleads,
      },
      {
        label: "Social Media Marketing",
        link: "/services/smm",
        iconImage: PiMegaphone,
      },
      {
        label: "Content Marketing",
        link: "/services/cm",
        iconImage: MdContentPasteSearch,
      },
      {
        label: "Email Marketing",
        link: "/services/em",
        iconImage: MdOutlineMarkEmailRead,
      },
      {
        label: "Conversion Rate Optimization",
        link: "/services/cro",
        iconImage: GrOptimize,
      },
      {
        label: "Analytics and Reporting",
        link: "/services/analytics",
        iconImage: SiGoogleanalytics,
      },
      {
        label: "Marketing Automation",
        link: "/services/automation",
        iconImage: TbSettingsAutomation,
      },
      {
        label: "Public Relations",
        link: "/services/pr",
        iconImage: PiRocketLaunch,
      },
      { label: "Graphic Design", link: "/services/design", iconImage: MdBrush },
    ],
  },
  { label: "Pricing", link: "/pricing" },
  {
    label: "About",
    link: "#",
    children: [
      { label: "About Agency", link: "/about/about-agency" },
      { label: "Our Team", link: "/about/team" },
      { label: "Careers", link: "/about/careers" },
    ],
  },
  { label: "Blog", link: "/blog" },
  { label: "Contacts", link: "/contact" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLinkClick = () => {
    setSideMenu(false);
  };

  return (
    <div className="relative z-50 bg-black">
      <div className="p-6 md:p-10 flex items-center justify-between text-white fixed w-full top-0 h-24">
        <div className="flex flex-1 justify-start items-center">
          <ActiveLink href="/">
            <Image
              src={logo}
              alt=" logo"
              width={100}
              height={100}
              className="w-24 h-24"
            />
          </ActiveLink>
        </div>

        <div
          ref={animationParent}
          className="hidden md:flex flex-1 bg-[var(--bgnew)] justify-center items-center gap-4 backdrop-blur-lg rounded-lg p-4 light:border-[1px] light:border-[var(--ocean-blue)]"
        >
          {navItems.map((d, i) => (
            <div key={`${d.label}-${i}`} className="relative group">
              <ActiveLink
                href={d.link ?? "#"}
                className="flex items-center gap-2 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-white transition-all"
                onClick={handleLinkClick}
              >
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
                )}
              </ActiveLink>
              {d.children && (
                <div className="absolute left-0 top-full hidden group-hover:block flex-col bg-black/90 light:bg-white text-[var(--gray-blue)] hover:text-white light:text-[var(--gray-70)] rounded-lg shadow-md py-3 transition-all">
                  {d.children.map((ch, j) => (
                    <ActiveLink
                      key={`${ch.label}-${j}`}
                      href={ch.link ?? "#"}
                      className="flex items-center px-4 py-2 hover:bg-sky-400"
                      onClick={handleLinkClick}
                    >
                      {ch.iconImage && <ch.iconImage className="text-xl" />}
                      <span className="ml-3 whitespace-nowrap">{ch.label}</span>
                    </ActiveLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center">
          <Link
            href="https://portal.theclicks.ca"
            className="mx-4"
            title="Client Portal"
            target="_blank"
          >
            <FaUserLarge className="h-5 w-5 text-[var(--text)]" />
          </Link>
          {mounted && (
            <button
              onClick={handleToggleTheme}
              aria-label="Toggle Dark Mode"
              className="mr-4"
            >
              {theme === "light" ? (
                <IoMdMoon className="h-6 w-6 text-[var(--text)]" />
              ) : (
                <MdOutlineWbSunny className="h-6 w-6 text-[var(--text)]" />
              )}
            </button>
          )}
          <ActiveLink href="/book">
            <button className="px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-[var(--border-color)] light:border-[var(--ocean-blue)] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:border-[1px] light:bg-white light:text-black light:bg-none">
              Let&apos;s Talk
            </button>
          </ActiveLink>
        </div>

        <div className="flex items-center md:hidden">
          <Link
            href="https://portal.theclicks.ca"
            className="mx-4"
            title="Client Portal"
            target="_blank"
          >
            <FaUserLarge className="h-5 w-5 text-[var(--text)]" />
          </Link>
          {mounted && (
            <button
              onClick={handleToggleTheme}
              aria-label="Toggle Dark Mode"
              className="mr-4"
            >
              {theme === "light" ? (
                <IoMdMoon className="h-6 w-6 text-[var(--text)]" />
              ) : (
                <MdOutlineWbSunny className="h-6 w-6 text-[var(--text)]" />
              )}
            </button>
          )}
          <FiMenu
            onClick={() => setSideMenu(true)}
            className="cursor-pointer text-4xl md:hidden text-[var(--text)]"
          />
        </div>

        {isSideMenuOpen && <MobileNav closeSideMenu={handleLinkClick} />}
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden">
      <div className="h-full w-[75%] bg-[var(--bgnew)] px-4 py-4 overflow-y-auto">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-[var(--text)]"
          />
        </section>
        <div className="flex flex-col gap-2 mt-4 light:text-[var(--gray-70)]">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={`${d.label}-${i}`}
              {...d}
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>
        <section className="mt-4 flex flex-col items-center gap-8">
          <ActiveLink href="/book">
            <button
              onClick={closeSideMenu}
              className="w-full max-w-[200px] px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-white light:border-[var(--ocean-blue)] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:bg-white light:text-black light:bg-none"
            >
              Let&apos;s Talk
            </button>
          </ActiveLink>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem & { closeSideMenu: () => void }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="relative">
      {d.children ? (
        <>
          <div
            onClick={toggleItem}
            className="flex items-center justify-between px-2 py-3 text-neutral-400 light:text-[var(--gray-70)] hover:text-[var(--text)] light:hover:text-[var(--text)] light:hover:font-bold cursor-pointer"
          >
            <span>{d.label}</span>
            <IoIosArrowDown
              className={`text-xs transition-transform ${
                isItemOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {isItemOpen && (
            <div className="flex flex-col bg-[var(--bgnew)] text-[var(--text)] rounded-lg shadow-md py-3">
              {d.children.map((ch, i) => (
                <ActiveLink
                  key={`${ch.label}-${i}`}
                  href={ch.link ?? "#"}
                  className="flex items-center px-4 py-2 hover:bg-sky-400"
                  onClick={d.closeSideMenu}
                >
                  {ch.iconImage && <ch.iconImage className="text-xl" />}
                  <span className="ml-3 whitespace-nowrap">{ch.label}</span>
                </ActiveLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <ActiveLink
          href={d.link ?? "#"}
          className="flex items-center px-2 py-3 text-neutral-400 light:text-[var(--gray-70)] hover:text-[var(--text)] light:hover:text-[var(--text)] light:hover:font-bold"
          onClick={d.closeSideMenu}
        >
          <span>{d.label}</span>
        </ActiveLink>
      )}
    </div>
  );
}
