'use client'
import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DropDownMenu from './drop-down-menu';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { PiStrategy, PiMegaphone } from 'react-icons/pi';
import { TbSeo, TbSettingsAutomation } from 'react-icons/tb';
import { MdDeveloperMode, MdOutlineMarkEmailRead, MdContentPasteSearch } from 'react-icons/md';
import { SiGoogleads, SiGoogleanalytics } from 'react-icons/si';
import { GrOptimize } from "react-icons/gr";

const Navbar = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

    return (
        <div className="relative z-50">
            <div className="p-6 md:p-10 flex items-center justify-between z-50 text-white fixed w-full top-0 h-24">
                <div>
                    <Link className="cursor-pointer" href="/">
                        <Image
                            priority
                            src="/logo/logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-100 h-100 md:w-14 md:h14"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex items-center">
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About us">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="about/about-agency">About agency</HoveredLink>
                                <HoveredLink href="/app/about/team">Our team</HoveredLink>
                                <HoveredLink href="about/contact">Contact us</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="text-sm grid grid-cols-3 gap-10 p-1">
                                <ProductItem
                                    title="Web Development"
                                    href="/web-dev"
                                    description="Build scalable and robust web applications tailored to your business needs."
                                >
                                    <MdDeveloperMode />
                                </ProductItem>
                                <ProductItem
                                    title="Strategy Development"
                                    href="/strategy-dev"
                                    description="Craft comprehensive strategies to drive your business growth and market presence."
                                >
                                    <PiStrategy />
                                </ProductItem>
                                <ProductItem
                                    title="SEO"
                                    href="/seo"
                                    description="Optimize your website to rank higher on search engines and attract organic traffic."
                                >
                                    <TbSeo />
                                </ProductItem>
                                <ProductItem
                                    title="PPC Advertising"
                                    href="/ppc-ads"
                                    description="Maximize your ROI with targeted and effective pay-per-click advertising campaigns."
                                >
                                    <SiGoogleads />
                                </ProductItem>
                                <ProductItem
                                    title="Social Media Marketing"
                                    href="/smm"
                                    description="Engage your audience and grow your brand presence across social media platforms."
                                >
                                    <PiMegaphone />
                                </ProductItem>
                                <ProductItem
                                    title="Content Marketing"
                                    href="/content"
                                    description="Create and distribute valuable content to attract and retain a clearly defined audience."
                                >
                                    <MdContentPasteSearch />
                                </ProductItem>
                                <ProductItem
                                    title="Email Marketing"
                                    href="/email"
                                    description="Develop personalized email campaigns to nurture leads and boost conversions."
                                >
                                    <MdOutlineMarkEmailRead />
                                </ProductItem>
                                <ProductItem
                                    title="Conversion Rate Optimization"
                                    href="/cro"
                                    description="Improve your website’s performance and turn more visitors into customers."
                                >
                                    <GrOptimize />
                                </ProductItem>
                                <ProductItem
                                    title="Analytics and Reporting"
                                    href="/analytics"
                                    description="Gain insights from data to make informed decisions and measure success."
                                >
                                    <SiGoogleanalytics />
                                </ProductItem>
                                <ProductItem
                                    title="Marketing Automation"
                                    href="/automation"
                                    description="Streamline your marketing processes and campaigns with automation tools."
                                >
                                    <TbSettingsAutomation />
                                </ProductItem>
                            </div>
                        </MenuItem>
                        <Link href="/pricing" className="cursor-pointer text-md text-white hover:opacity-[0.9]">Pricing</Link>
                        <MenuItem setActive={setActive} active={active} item="Blog">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/cases">Case Studies</HoveredLink>
                                <HoveredLink href="/seo">SEO</HoveredLink>
                                <HoveredLink href="/ppc">PPC</HoveredLink>
                                <HoveredLink href="/social">Social Media</HoveredLink>
                                <HoveredLink href="/analytics">Web Analytics</HoveredLink>
                                <HoveredLink href="/email">Email Marketing</HoveredLink>
                                <HoveredLink href="/content">Content Marketing</HoveredLink>
                                <HoveredLink href="/branding">Branding</HoveredLink>
                            </div>
                        </MenuItem>
                    </Menu>
                </div>

                <div className="flex md:hidden">
                    {isDropDownVisible ? (
                        <div
                            onClick={toggleDropDown}
                            className="w-8 h-8 text-white cursor-pointer"
                        >
                            <X />
                            <DropDownMenu onClose={closeDropDown} />
                        </div>
                    ) : (
                        <AlignJustify
                            onClick={toggleDropDown}
                            className="w-8 h-8 text-white cursor-pointer"
                        />
                    )}
                </div>

                <div className="hidden md:flex">
                    <Link
                        href="/contact"
                        className="
                            inline-flex h-12 animate-shimmer items-center justify-center
                            rounded-2xl border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                            bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2
                            focus:ring-white focus:ring-offset-2 focus:ring-offset-black
                        ">
                        Let's Talk
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
