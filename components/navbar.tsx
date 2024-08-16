'use client'
import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import DropDownMenu from './drop-down-menu';
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/navbar-menu';
import { PiStrategy, PiMegaphone, PiRocketLaunch } from 'react-icons/pi';
import { TbSeo, TbSettingsAutomation } from 'react-icons/tb';
import { MdDeveloperMode, MdOutlineMarkEmailRead, MdContentPasteSearch, MdBrush } from 'react-icons/md';
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
                <div className="flex flex-1 justify-start items-center">
                    <Link className="cursor-pointer" href="/">
                        <Image
                            priority
                            src="/logo/logo.svg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="w-100 h-100 md:w-14 md:h-14"
                        />
                    </Link>
                </div>
                
                <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                    <Menu setActive={setActive}>
                        <MenuItem setActive={setActive} active={active} item="About us">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="about/about-agency">About agency</HoveredLink>
                                <HoveredLink href="about/team">Our team</HoveredLink>
                                <HoveredLink href="/about/contact">Contact us</HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem setActive={setActive} active={active} item="Services">
                            <div className="text-sm grid grid-cols-3 gap-8 pl-8 pr-0 py-4">
                            <ProductItem
                                title="Web Development"
                                href="/services/webdev"
                                description="Build scalable and robust web applications tailored to your business needs."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <MdDeveloperMode className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Strategy Development"
                                href="/services/stratdev"
                                description="Craft comprehensive strategies to drive your business growth and market presence."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <PiStrategy className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="SEO"
                                href="/services/seo"
                                description="Optimize your website to rank higher on search engines and attract organic traffic."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <TbSeo className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="PPC Advertising"
                                href="/services/ppc"
                                description="Maximize your ROI with targeted and effective pay-per-click advertising campaigns."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <SiGoogleads className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Social Media Marketing"
                                href="/services/smm"
                                description="Engage your audience and grow your brand presence across social media platforms."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <PiMegaphone className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Content Marketing"
                                href="/services/cm"
                                description="Create and distribute valuable content to attract and retain a clearly defined audience."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <MdContentPasteSearch className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Email Marketing"
                                href="/services/em"
                                description="Develop personalized email campaigns to nurture leads and boost conversions."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <MdOutlineMarkEmailRead className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Conversion Rate Optimization"
                                href="/services/cro"
                                description="Improve your website’s performance and turn more visitors into customers."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <GrOptimize className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Analytics and Reporting"
                                href="/services/analytics"
                                description="Gain insights from data to make informed decisions and measure success."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <SiGoogleanalytics className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Marketing Automation"
                                href="/services/automation"
                                description="Streamline your marketing processes and campaigns with automation tools."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <TbSettingsAutomation className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Public Relations"
                                href="/services/pr"
                                description="Build your brand's reputation and connect with your audience through strategic PR services."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <PiRocketLaunch className="text-white text-3xl" />
                                </div>
                            </ProductItem>
                            <ProductItem
                                title="Graphic Design"
                                href="/services/design"
                                description="Elevate your brand with stunning visuals and creative graphic design solutions tailored to your needs."
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-purple-500">
                                    <MdBrush className="text-white text-3xl" />
                                </div>
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

                <div className="flex flex-1 justify-end items-center">
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
            </div>
        </div>
    );
}

export default Navbar;
