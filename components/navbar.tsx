"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { PiStrategy, PiMegaphone, PiRocketLaunch } from "react-icons/pi";
import { TbSeo, TbSettingsAutomation } from "react-icons/tb";
import { MdDeveloperMode, MdOutlineMarkEmailRead, MdContentPasteSearch, MdBrush } from "react-icons/md";
import { SiGoogleads, SiGoogleanalytics } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";

import logo from "../public/logo/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
        link: "/services",
        children: [
            { label: "Web Development", link: "/services/webdev", iconImage: MdDeveloperMode },
            { label: "Strategy Development", link: "/services/stratdev", iconImage: PiStrategy },
            { label: "SEO", link: "/services/seo", iconImage: TbSeo },
            { label: "PPC Advertising", link: "/services/ppc", iconImage: SiGoogleads },
            { label: "Social Media Marketing", link: "/services/smm", iconImage: PiMegaphone },
            { label: "Content Marketing", link: "/services/cm", iconImage: MdContentPasteSearch },
            { label: "Email Marketing", link: "/services/em", iconImage: MdOutlineMarkEmailRead },
            { label: "Conversion Rate Optimization", link: "/services/cro", iconImage: GrOptimize },
            { label: "Analytics and Reporting", link: "/services/analytics", iconImage: SiGoogleanalytics },
            { label: "Marketing Automation", link: "/services/automation", iconImage: TbSettingsAutomation },
            { label: "Public Relations", link: "/services/pr", iconImage: PiRocketLaunch },
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

    function openSideMenu() {
        setSideMenu(true);
    }
    function closeSideMenu() {
        setSideMenu(false);
    }

    return (
        <div className="relative z-50 bg-black">  
            <div className="p-6 md:p-10 flex items-center justify-between text-white fixed w-full top-0 h-24">
                {/* logo section */}
                <div className="flex flex-1 justify-start items-center">
                    <Link href="/">
                        <Image 
                            src={logo} 
                            alt=" logo" 
                            width={100}
                            height={100}
                            className="w-14 h-14"
                        />
                    </Link>
                </div>

                {/* nav items section */}
                <div 
                    ref={animationParent} 
                    className="hidden md:flex flex-1 justify-center items-center gap-4 bg-black/50 backdrop-blur-lg rounded-2xl p-4"
                >
                    {navItems.map((d, i) => (
                        <div key={`${d.label}-${i}`} className="relative group">
                            <Link href={d.link ?? "#"} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all">
                                <span>{d.label}</span>
                                {d.children && (
                                    <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
                                )}
                            </Link>
                            {/* dropdown */}
                            {d.children && (
                                <div className="absolute left-0 top-full hidden group-hover:block flex-col bg-black/90 text-white rounded-lg shadow-md py-3 transition-all">
                                    {d.children.map((ch, j) => (
                                        <Link key={`${ch.label}-${j}`} href={ch.link ?? "#"} className="flex items-center px-4 py-2 hover:bg-sky-400">
                                            {/* icon */}
                                            {ch.iconImage && (
                                                <ch.iconImage className="text-xl" />
                                            )}
                                            <span className="ml-3 whitespace-nowrap">{ch.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* let's talk button section - only for desktop */}
                <div className="hidden md:flex flex-1 justify-end items-center">
                    <button className="px-4 py-2 animate-shimmer items-center justify-center rounded-2xl border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Let&apos;s Talk
                    </button>
                </div>

                <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />

                {/* Mobile menu */}
                {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
            </div>
        </div>
    );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end md:hidden">
            <div className="h-full w-[75%] bg-black px-4 py-4 overflow-y-auto">
                <section className="flex justify-end">
                    <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                </section>
                <div className="flex flex-col gap-2 mt-4">
                    {navItems.map((d, i) => (
                        <SingleNavItem key={`${d.label}-${i}`} {...d} />
                    ))}
                </div>
                <section className="mt-4 flex flex-col items-center gap-8">
                    <button className="w-full max-w-[200px] px-4 py-2 animate-shimmer items-center justify-center rounded-2xl border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Let&apos;s Talk</button>
                </section>
            </div>
        </div>
    );
}

function SingleNavItem(d: NavItem) {
    const [animationParent] = useAutoAnimate();
    const [isItemOpen, setItem] = useState(false);

    function toggleItem() {
        setItem(!isItemOpen);
    }

    return (
        <div ref={animationParent} className="relative">
            <div onClick={toggleItem} className="flex items-center justify-between px-2 py-3 text-neutral-400 hover:text-white cursor-pointer">
                <span>{d.label}</span>
                {d.children && (
                    <IoIosArrowDown className={`text-xs transition-transform ${isItemOpen ? "rotate-180" : ""}`} />
                )}
            </div>
            {/* dropdown */}
            {isItemOpen && d.children && (
                <div className="flex flex-col bg-black text-white rounded-lg shadow-md py-3">
                    {d.children.map((ch, i) => (
                        <Link key={`${ch.label}-${i}`} href={ch.link ?? "#"} className="flex items-center px-4 py-2 hover:bg-sky-400">
                            {/* icon */}
                            {ch.iconImage && <ch.iconImage className="text-xl" />}
                            <span className="ml-3 whitespace-nowrap">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
