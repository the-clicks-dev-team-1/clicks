"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { PiStrategy, PiMegaphone, PiRocketLaunch } from "react-icons/pi";
import { TbSeo, TbSettingsAutomation } from "react-icons/tb";
import {
  MdDeveloperMode,
  MdOutlineMarkEmailRead,
  MdContentPasteSearch,
  MdBrush,
  MdOutlineWbSunny,
} from "react-icons/md";
import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";

import { IoIosArrowDown, IoMdMoon } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import ActiveLink from "./activelink";
import { useTheme } from "next-themes";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";
import { Link, usePathname } from "@/i18n/routing";
import Runner from "./Runner";
import { useTranslations } from "next-intl";
import ScrollButton from "./ui/ScrollButton";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: React.ElementType;
};

const navItems: NavItem[] = [
  { label: "home", link: "/" },
  {
    label: "services",
    link: "/services/webdev",
    children: [
      { label: "webDev", link: "/services/webdev", iconImage: MdDeveloperMode },
      {
        label: "strategyDev",
        link: "/services/stratdev",
        iconImage: PiStrategy,
      },
      { label: "seo", link: "/services/seo", iconImage: TbSeo },
      { label: "ppc", link: "/services/ppc", iconImage: SiGoogleads },
      { label: "smm", link: "/services/smm", iconImage: PiMegaphone },
      { label: "cm", link: "/services/cm", iconImage: MdContentPasteSearch },
      { label: "em", link: "/services/em", iconImage: MdOutlineMarkEmailRead },
      { label: "cro", link: "/services/cro", iconImage: GrOptimize },
      {
        label: "analytics",
        link: "/services/analytics",
        iconImage: SiGoogleanalytics,
      },
      {
        label: "automation",
        link: "/services/automation",
        iconImage: TbSettingsAutomation,
      },
      { label: "pr", link: "/services/pr", iconImage: PiRocketLaunch },
      { label: "design", link: "/services/design", iconImage: MdBrush },
    ],
  },
  { label: "pricing", link: "/pricing" },
  {
    label: "about",
    link: "/about/about-agency",
    children: [
      { label: "aboutAgency", link: "/about/about-agency" },
      { label: "team", link: "/about/team" },
      { label: "careers", link: "/about/careers" },
      { label: "blog", link: "/about/blog" },
    ],
  },
  { label: "contacts", link: "/contact" },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const [animationParent] = useAutoAnimate<HTMLDivElement>();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track active item
  const [lineStyles, setLineStyles] = useState({ left: 0, width: 0 }); // Line styles
  const navRef = useRef<HTMLDivElement>();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Update activeIndex based on the current path
    const activeItemIndex = navItems.findIndex((item) => {
      // Compare the second segment of the path
      return item.link!.split("/")[1] === pathname.split("/")[1];
    });
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : 0); // Default to 0 if not found
  }, [pathname]);

  useEffect(() => {
    const updateLineStyles = () => {
      if (navRef.current) {
        const activeItem = navRef.current.children[activeIndex] as HTMLElement;
        if (activeItem) {
          const circleDiameter = 12; // Size of the glowing circle
          setLineStyles({
            left:
              activeItem.offsetLeft +
              activeItem.offsetWidth / 2 -
              circleDiameter / 2,
            width: activeItem.offsetWidth,
          });
        }
      }
    };

    updateLineStyles();
    window.addEventListener("resize", updateLineStyles);
    return () => window.removeEventListener("resize", updateLineStyles);
  }, [activeIndex]);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMobileLinkClick = () => {
    setSideMenu(false);
  };

  const mergeRefs = useCallback(
    (el: HTMLDivElement | null) => {
      if (el) {
        if (animationParent && "current" in animationParent) {
          animationParent.current = el;
        }
        if (navRef && "current" in navRef) {
          navRef.current = el;
        }
      }
    },
    [animationParent]
  );

  return (
    <div className="relative z-50 bg-black">
      <div className="p-6 md:p-10 flex gap-2 items-center justify-between text-white fixed w-full top-0 h-24 backdrop-blur-lg">
        <div className="flex flex-1 justify-start items-center">
          <Logo />
        </div>

        <div
          ref={mergeRefs}
          className="hidden md:flex flex-1 #bg-[var(--bgnew)] justify-center items-center gap-4 backdrop-blur-lg rounded-lg p-4 #light:border-[1px] #light:border-[var(--ocean-blue)] #light:bg-[var(--light-blue)] animate-shimmer"
        >
          {navItems.map((d, i) => (
            <div key={`${d.label}-${i}`} className="relative group">
              <ActiveLink
                href={d.link ?? "#"}
                className="flex items-center gap-2 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-white transition-all whitespace-nowrap"
                onClick={() => handleLinkClick(i)}
              >
                <span className="whitespace-nowrap">{t(`${d.label}`)}</span>
                {/* {d.children && (
                  <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
                )} */}
              </ActiveLink>
              {d.children && (
                <div className="absolute z-10 left-0 top-full hidden group-hover:block flex-col bg-black/90 light:bg-white text-[var(--gray-blue)] hover:text-white light:text-[var(--gray-70)] rounded-lg shadow-md py-3 transition-all">
                  {d.children.map((ch, j) => (
                    <ActiveLink
                      key={`${ch.label}-${j}`}
                      href={ch.link ?? "#"}
                      className="flex items-center px-4 py-2 hover:bg-[var(--ocean-blue)]"
                      onClick={() => handleLinkClick(i)}
                    >
                      {ch.iconImage && <ch.iconImage className="text-xl" />}
                      <span className="ml-3 whitespace-nowrap">
                        {t(`${ch.label}`)}
                      </span>
                    </ActiveLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Runner activeIndex={activeIndex} navRef={navRef} />
        </div>

        <div className="flex flex-1 justify-end items-center">
          {/* <Link
            href="https://portal.theclicks.ca"
            className="mx-4"
            title="Client Portal"
            target="_blank"
          >
            <FaUserLarge className="h-5 w-5 text-[var(--text)]" />
          </Link> */}
          <div className="">
            <LocaleSwitcher />
          </div>
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

          <ScrollButton
            targetSection="#contact" // The section with id="contact"
            className="px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-[var(--border-color)] light:border-[var(--ocean-blue)] light:bg-[var(--light-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:border-[1px] light:bg-white light:text-black #light:bg-none"
            variant="primary" // You can still use variants like 'primary' if needed
          >
            {t("book")}
          </ScrollButton>

          <div className="flex items-center md:hidden">
            <FiMenu
              onClick={() => setSideMenu(true)}
              className="cursor-pointer text-4xl md:hidden text-[var(--text)]"
            />
          </div>
        </div>

        {isSideMenuOpen && <MobileNav closeSideMenu={handleMobileLinkClick} />}
      </div>
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const t = useTranslations("navbar");

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden">
      <div className="h-lvh w-[75%] bg-[var(--bgnew)] px-4 py-4 overflow-y-auto">
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
              className="w-full max-w-[200px] px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-white light:border-[var(--ocean-blue)] #light:bg-[var(--light-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:bg-white light:text-black"
            >
              {t("book")}
            </button>
          </ActiveLink>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem & { closeSideMenu: () => void }) {
  const t = useTranslations("navbar");
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
            <span>{t(`${d.label}`)}</span>
            {/* <IoIosArrowDown
              className={`text-xs transition-transform ${
                isItemOpen ? "rotate-180" : ""
              }`}
            /> */}
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
                  <span className="ml-3 whitespace-nowrap">
                    {t(`${ch.label}`)}
                  </span>
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
          <span>{t(`${d.label}`)}</span>
        </ActiveLink>
      )}
    </div>
  );
}
