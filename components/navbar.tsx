"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { GrOptimize } from "react-icons/gr";
import { IoIosArrowDown, IoMdMoon } from "react-icons/io";
import {
  // AI Services Icons
  Workflow,
  MessageSquare,
  Bot,
  TrendingUp,
  Brain,
  Target,
  Image,
  ListFilter,
  Shield,
  Users,
  Mic,
  Code,

  // Blockchain Services Icons
  Database,
  FileCheck,
  Network,
  Package,
  Coins,
  Link as LinkIcon,
  Lock,
  Truck,
  FileSearch,
  Wallet,
  GraduationCap,
  HelpCircle,
} from "lucide-react";
import {
  MdDeveloperMode,
  MdOutlineMarkEmailRead,
  MdContentPasteSearch,
  MdBrush,
  MdOutlineWbSunny,
} from "react-icons/md";
import { PiStrategy, PiMegaphone, PiRocketLaunch } from "react-icons/pi";
import { TbSeo, TbSettingsAutomation } from "react-icons/tb";
import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import ActiveLink from "@/components/activelink";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Logo from "@/components/Logo";
import Runner from "@/components/Runner";
import ScrollButton from "@/components/ui/ScrollButton";
import { Link, usePathname } from "@/i18n/routing";

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
      {
        label: "marketing",
        link: "/services/webdev",
        children: [
          {
            label: "webDev",
            link: "/services/webdev",
            iconImage: MdDeveloperMode,
          },
          {
            label: "strategyDev",
            link: "/services/stratdev",
            iconImage: PiStrategy,
          },
          { label: "seo", link: "/services/seo", iconImage: TbSeo },
          { label: "ppc", link: "/services/ppc", iconImage: SiGoogleads },
          { label: "smm", link: "/services/smm", iconImage: PiMegaphone },
          {
            label: "cm",
            link: "/services/cm",
            iconImage: MdContentPasteSearch,
          },
          {
            label: "em",
            link: "/services/em",
            iconImage: MdOutlineMarkEmailRead,
          },
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
      {
        label: "ai",
        link: "/services/business-process-automation",
        children: [
          {
            label: "businessProcess",
            link: "/services/business-process-automation",
            iconImage: Workflow,
          },
          {
            label: "nlp",
            link: "/services/nlp",
            iconImage: MessageSquare,
          },
          {
            label: "chatbots",
            link: "/services/chatbots-and-virtual-assistants",
            iconImage: Bot,
          },
          {
            label: "predictive",
            link: "/services/predictive-analytics",
            iconImage: TrendingUp,
          },
          {
            label: "powered",
            link: "/services/ai-powered-analytics",
            iconImage: Brain,
          },
          {
            label: "optimization",
            link: "/services/ai-driven-marketing-optimization",
            iconImage: Target,
          },
          {
            label: "image",
            link: "/services/image-recognition-and-analysis",
            iconImage: Image,
          },
          {
            label: "recommendation",
            link: "/services/recommendation-systems",
            iconImage: ListFilter,
          },
          {
            label: "cybersecurity",
            link: "/services/ai-enhanced-cybersecurity",
            iconImage: Shield,
          },
          {
            label: "human",
            link: "/services/ai-for-human-resources",
            iconImage: Users,
          },
          {
            label: "voice",
            link: "/services/voice-recognition-solutions",
            iconImage: Mic,
          },
          {
            label: "custom",
            link: "/services/custom-ai-development",
            iconImage: Code,
          },
        ],
      },
      {
        label: "blockchain",
        link: "/services/custom-blockchain-solutions",
        children: [
          {
            label: "customBlockchain",
            link: "/services/custom-blockchain-solutions",
            iconImage: Database,
          },
          {
            label: "smart",
            link: "/services/smart-contracts-development",
            iconImage: FileCheck,
          },
          {
            label: "decentralized",
            link: "/services/decentralized-applications",
            iconImage: Network,
          },
          {
            label: "integration",
            link: "/services/blockchain-integration",
            iconImage: LinkIcon,
          },
          {
            label: "nft",
            link: "/services/nft-platform-development",
            iconImage: Package,
          },
          {
            label: "tokenization",
            link: "/services/tokenization-services",
            iconImage: Coins,
          },
          {
            label: "private",
            link: "/services/private-blockchain-development",
            iconImage: Lock,
          },
          {
            label: "supply",
            link: "/services/supply-chain-blockchain",
            iconImage: Truck,
          },
          {
            label: "security",
            link: "/services/blockchain-security-audits",
            iconImage: FileSearch,
          },
          {
            label: "cryptoWallet",
            link: "/services/crypto-wallet-development",
            iconImage: Wallet,
          },
          {
            label: "training",
            link: "/services/blockchain-training",
            iconImage: GraduationCap,
          },
          {
            label: "consulting",
            link: "/services/blockchain-consulting",
            iconImage: HelpCircle,
          },
        ],
      },
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
  { label: "portfolio", link: "/portfolio" },
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
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  const handleMouseEnter = (id: string) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

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
            <div
              key={`${d.label}-${i}`}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(i.toString())}
              onMouseLeave={handleMouseLeave}
            >
              {/* First Level Link */}
              <ActiveLink
                href={d.link ?? "#"}
                className="flex items-center gap-2 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:font-bold hover:text-black dark:hover:text-white transition-all whitespace-nowrap"
                onClick={() => handleLinkClick(i)}
              >
                <span className="whitespace-nowrap">{t(`${d.label}`)}</span>
              </ActiveLink>

              {/* First Level Children */}
              {d.children && (
                <div className="absolute z-10 left-0 top-full hidden group-hover:flex flex-col bg-black/90 light:bg-white text-[var(--gray-blue)] light:text-[var(--gray-70)] rounded-lg shadow-md py-3 transition-all">
                  {d.children.map((ch, j) => (
                    <div
                      key={`${ch.label}-${j}`}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(`${i}-${j}`)} // Hover on the second level
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Second Level Link */}
                      <ActiveLink
                        href={ch.link ?? "#"}
                        className="flex items-center px-4 py-2 hover:bg-[var(--ocean-blue)] dark:hover:bg-opacity-50 hover:text-black dark:hover:text-white"
                        onClick={() => handleLinkClick(i)}
                      >
                        {ch.iconImage && <ch.iconImage className="text-xl" />}
                        <span className="ml-3 whitespace-nowrap">
                          {t(`${ch.label}`)}
                        </span>
                      </ActiveLink>

                      {/* Second Level Children */}
                      {ch.children && hoveredItem === `${i}-${j}` && (
                        <div className="absolute z-10 left-full top-0 hidden group-hover:flex flex-col bg-black/90 light:bg-white text-[var(--gray-blue)] light:text-[var(--gray-70)] rounded-lg shadow-md py-3 transition-all">
                          {ch.children.map((nested, k) => (
                            <ActiveLink
                              key={`${nested.label}-${k}`}
                              href={nested.link ?? "#"}
                              className="flex items-center px-4 py-2 hover:bg-[var(--ocean-blue)] hover:text-black dark:hover:text-white"
                              onClick={() => handleLinkClick(i)}
                            >
                              {nested.iconImage && (
                                <nested.iconImage className="text-xl" />
                              )}
                              <span className="ml-3 whitespace-nowrap">
                                {t(`${nested.label}`)}
                              </span>
                            </ActiveLink>
                          ))}
                        </div>
                      )}
                    </div>
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
            targetSection="#contact"
            className="hidden duration-1000 md:block px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-[var(--border-color)] light:border-[var(--ocean-blue)] light:bg-[var(--light-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:border-[1px] light:bg-white light:text-black"
            variant="primary"
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleToggleMenu(index: number | null) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

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
              d={d}
              closeSideMenu={closeSideMenu}
              i={i}
              activeIndex={activeIndex}
              setActiveIndex={handleToggleMenu}
            />
          ))}
        </div>
        <section
          className="mt-4 flex flex-col items-center gap-8"
          onClick={closeSideMenu}
        >
          <ScrollButton
            targetSection="#contact"
            className="md:hidden duration-1000 px-4 py-2 animate-shimmer items-center justify-center rounded-lg border border-[var(--border-color)] light:border-[var(--ocean-blue)] light:bg-[var(--light-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 light:border-[1px] light:bg-white light:text-black #light:bg-none"
            variant="primary"
          >
            {t("book")}
          </ScrollButton>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem({
  i,
  d,
  closeSideMenu,
  activeIndex,
  setActiveIndex,
}: {
  i: number;
  d: NavItem;
  closeSideMenu: () => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) {
  const t = useTranslations("navbar");
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);

  function toggleMenu(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveSubIndex(null);
  }

  function toggleSubMenu(index: number) {
    setActiveSubIndex(activeSubIndex === index ? null : index);
  }

  return (
    <div ref={animationParent} className="relative">
      {d.children ? (
        <>
          <div
            onClick={() => toggleMenu(i)}
            className="flex items-center justify-between px-2 py-3 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-[var(--text)] light:hover:text-[var(--text)] light:hover:font-bold cursor-pointer"
          >
            <span>{t(`${d.label}`)}</span>
            {/* <IoIosArrowDown
              className={`text-xs transition-transform ${
                isItemOpen ? "rotate-180" : ""
              }`}
            /> */}
          </div>
          {/* First Level Children */}
          {activeIndex === i &&
            // hoveredItem === `${i}` &&
            d.children && (
              <div className="flex flex-col bg-[var(--bgnew)] rounded-lg shadow-md py-2">
                {d.children.map((ch, j) => (
                  <>
                    {ch.children ? (
                      <div
                        key={j}
                        className="relative"
                        // onMouseEnter={() => handleMouseEnter(`${i}-${j}`)} // Hover on the second level
                        // onMouseLeave={handleMouseLeave}
                      >
                        {/* Second Level Link */}
                        <div
                          className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[var(--ocean-blue)] text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-black dark:hover:text-white transition-all duration-500"
                          onClick={() => toggleSubMenu(j)}
                        >
                          {ch.iconImage && (
                            <ch.iconImage className="text-xl mr-2" />
                          )}
                          <span>{t(ch.label)}</span>
                        </div>

                        {/* Second Level Children */}
                        <div
                          className={`${
                            activeSubIndex === j
                              ? "max-h-screen opacity-100 transition-all duration-1000 ease-in-out"
                              : "max-h-0 opacity-0 overflow-hidden"
                          } flex flex-col bg-[var(--bgnew)] rounded-lg shadow-md py-2 ml-4`}
                        >
                          {activeSubIndex === j &&
                            // hoveredItem === `${i}-${j}` &&
                            ch.children &&
                            ch.children.map((nested, k) => (
                              <ActiveLink
                                key={k}
                                href={nested.link ?? "#"}
                                className="flex items-center px-4 py-2 hover:bg-[var(--ocean-blue)] hover:bg-opacity-100 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-black dark:hover:text-white"
                                onClick={closeSideMenu}
                              >
                                {nested.iconImage && (
                                  <nested.iconImage className="text-xl mr-2" />
                                )}
                                {t(nested.label)}
                              </ActiveLink>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <ActiveLink
                        href={ch.link ?? "#"}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[var(--ocean-blue)] text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-black dark:hover:text-white"
                        onClick={closeSideMenu}
                      >
                        <span>{t(`${ch.label}`)}</span>
                      </ActiveLink>
                    )}
                  </>
                ))}
              </div>
            )}
        </>
      ) : (
        <ActiveLink
          href={d.link ?? "#"}
          className="flex items-center px-2 py-3 text-[var(--gray-blue)] light:text-[var(--gray-70)] hover:text-[var(--text)] light:hover:text-[var(--text)] light:hover:font-bold"
          onClick={closeSideMenu}
        >
          <span>{t(`${d.label}`)}</span>
        </ActiveLink>
      )}
    </div>
  );
}
