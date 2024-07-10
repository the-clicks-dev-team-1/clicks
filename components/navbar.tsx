'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlignJustify,X } from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';
import DropDownMenu from './drop-down-menu';

const Navbar = () => {

        const [isDropDownVisible, setIsDropDownVisible] = useState(false);

        const toggleDropDown = () => {
            setIsDropDownVisible(!isDropDownVisible);
        }

        const closeDropDown = () => {
            setIsDropDownVisible(false);
        }

    return ( 
    <div>
        <div className="p-6 md:p-10 flex items-center justify-between z-50">
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
            <div className="cursor-pointer hidden 
            md:flex space-x-10 items-center
            text-slate-300 text-center 
            bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50 
            to bg-neutral-400 bg-opacity-50"
            >
                <Link href="/services" className="hover:text-gray-50">Services</Link>
                <Link href="/pricing" className="hover:text-gray-50">Pricing</Link>
                <Link href="/cases" className="hover:text-gray-50">Case Studies</Link>
                <Link href="/about" className="hover:text-gray-50">About Us</Link>
                <Link href="/blog" className="hover:text-gray-50">Blog</Link>
                <Link href="/portal" className="hover:text-gray-50">Client Portal</Link>


            </div>

            <div className="flex md:hidden">
                {isDropDownVisible ? (
                    <div
                    onClick={toggleDropDown}
                    className="w-8 h-8 text-slaye-300 cursor-pointer"
                    >
                        <X />
                        <DropDownMenu onClose={closeDropDown} />
                    </div>
                ) : (
                    <AlignJustify
                    onClick={toggleDropDown}
                    className="w-8 h-8 text-slate-300 cursor-pointer"
                    />
                )}
            </div>

            <div className="hidden md:flex">
                <Link 
                href="/contact" 
                className="
                inline-flex h-12 animate-shimmer items-center justify-center
                rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 
                focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                ">
                Contact
                </Link>
               
            </div>
        </div>
    </div>
     );
}
 
export default Navbar;