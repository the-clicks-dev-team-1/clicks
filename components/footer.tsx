"use client";
import ActiveLink from "@/components/activelink";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../public/logo/Logo1.svg";
import NewsletterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <motion.section
      className={`w-screen relative overflow-hidden bg-[var(--blue2)] light:bg-[var(--ice-blue)]`}
    >
      <Noise />
      <footer className="relative max-w-7xl mx-auto">
        <div className="px-4 md:px-10 py-6 lg:py-16">
          <div className="grid grid-cols-[4.5fr_5.5fr] lg:grid-cols-[1.5fr_4fr_1.5fr_3fr] gap-2 md:gap-6">
            <div className="">
              <ActiveLink href="/">
                <Image
                  src={logo}
                  alt=" logo"
                  width={100}
                  height={100}
                  className="w-24 h-24 mb-10"
                />
              </ActiveLink>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex items-center">
                {/* <li className="mb-4">
                <a
                  href="https://x.com/theclicks_ca"
                  className="hover:underline flex items-center"
                >
                  <div className="light:text-[var(--gray-100)] text-[var(--ocean-blue)]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35 13.3333V26.6667C35 28.8768 34.122 30.9964 32.5592 32.5592C30.9964 34.122 28.8768 35 26.6667 35H13.3333C11.1232 35 9.00358 34.122 7.44078 32.5592C5.87797 30.9964 5 28.8768 5 26.6667V13.3333C5 11.1232 5.87797 9.00358 7.44078 7.44078C9.00358 5.87797 11.1232 5 13.3333 5H26.6667C28.8768 5 30.9964 5.87797 32.5592 7.44078C34.122 9.00358 35 11.1232 35 13.3333Z"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.3333 35.0002V20.0002C18.3333 16.3535 19.1667 13.3335 25 13.3335M15 21.6668H25"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </li> */}
                <li className="mb-4 mr-4">
                  <a
                    href="https://www.facebook.com/theclicks.ca"
                    className="hover:underline flex items-center"
                  >
                    <div className="light:text-[var(--gray-100)] text-[var(--ocean-blue)]">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35 13.3333V26.6667C35 28.8768 34.122 30.9964 32.5592 32.5592C30.9964 34.122 28.8768 35 26.6667 35H13.3333C11.1232 35 9.00358 34.122 7.44078 32.5592C5.87797 30.9964 5 28.8768 5 26.6667V13.3333C5 11.1232 5.87797 9.00358 7.44078 7.44078C9.00358 5.87797 11.1232 5 13.3333 5H26.6667C28.8768 5 30.9964 5.87797 32.5592 7.44078C34.122 9.00358 35 11.1232 35 13.3333Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3333 35.0002V20.0002C18.3333 16.3535 19.1667 13.3335 25 13.3335M15 21.6668H25"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="mb-4 mr-4">
                  <a
                    href="https://www.instagram.com/the_clicks_marketing/"
                    className="hover:underline flex items-center"
                  >
                    <div className="light:text-[var(--gray-100)] text-[var(--ocean-blue)]">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9999 26.6668C21.768 26.6668 23.4637 25.9645 24.714 24.7142C25.9642 23.464 26.6666 21.7683 26.6666 20.0002C26.6666 18.2321 25.9642 16.5364 24.714 15.2861C23.4637 14.0359 21.768 13.3335 19.9999 13.3335C18.2318 13.3335 16.5361 14.0359 15.2859 15.2861C14.0356 16.5364 13.3333 18.2321 13.3333 20.0002C13.3333 21.7683 14.0356 23.464 15.2859 24.7142C16.5361 25.9645 18.2318 26.6668 19.9999 26.6668Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 26.6667V13.3333C5 11.1232 5.87797 9.00358 7.44078 7.44078C9.00358 5.87797 11.1232 5 13.3333 5H26.6667C28.8768 5 30.9964 5.87797 32.5592 7.44078C34.122 9.00358 35 11.1232 35 13.3333V26.6667C35 28.8768 34.122 30.9964 32.5592 32.5592C30.9964 34.122 28.8768 35 26.6667 35H13.3333C11.1232 35 9.00358 34.122 7.44078 32.5592C5.87797 30.9964 5 28.8768 5 26.6667Z"
                          stroke="currentColor"
                        />
                        <path
                          d="M29.1667 10.8499L29.1834 10.8315"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li className="mb-4 mr-4">
                  <a
                    href="https://www.linkedin.com/company/theclicks/"
                    className="hover:underline flex items-center"
                  >
                    <div className="light:text-[var(--gray-100)] text-[var(--ocean-blue)]">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 28.3333V16.6667M35 13.3333V26.6667C35 28.8768 34.122 30.9964 32.5592 32.5592C30.9964 34.122 28.8768 35 26.6667 35H13.3333C11.1232 35 9.00358 34.122 7.44078 32.5592C5.87797 30.9964 5 28.8768 5 26.6667V13.3333C5 11.1232 5.87797 9.00358 7.44078 7.44078C9.00358 5.87797 11.1232 5 13.3333 5H26.6667C28.8768 5 30.9964 5.87797 32.5592 7.44078C34.122 9.00358 35 11.1232 35 13.3333Z"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.3334 28.3334V22.9167M18.3334 22.9167V16.6667M18.3334 22.9167C18.3334 16.6667 28.3334 16.6667 28.3334 22.9167V28.3334M11.6667 11.6834L11.6834 11.665"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-4 text-xl font-semibold light:text-[var(--gray-70)] text-[var(--gray-blue)]">
                Get our newsletter
              </h2>
              <div className="mb-4">
                <NewsletterForm className="border border-[var(--ocean-blue)] bg-transparent" />
              </div>
              <ul className="light:text-[var(--gray-70)] text-[var(--gray-40)] font-medium">
                <li className="mb-4">
                  <ActiveLink
                    href="/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </ActiveLink>
                </li>
                <li className="mb-4">
                  <ActiveLink href="/licensing" className="hover:underline">
                    Licensing
                  </ActiveLink>
                </li>
                <li className="mb-4">
                  <ActiveLink
                    href="/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms & Conditions
                  </ActiveLink>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-6 text-xl font-semibold text-[var(--ocean-blue)]">
                Company
              </h2>
              <ul className="light:text-[var(--gray-70)] text-[var(--gray-blue)] font-medium">
                <li className="mb-4">
                  <ActiveLink href="#services" className="hover:underline">
                    Services
                  </ActiveLink>
                </li>
                <li className="mb-4">
                  <ActiveLink href="/pricing" className="hover:underline">
                    Pricing
                  </ActiveLink>
                </li>
                <li className="mb-4">
                  <ActiveLink
                    href="/about/about-agency"
                    className="hover:underline"
                  >
                    About
                  </ActiveLink>
                </li>
                <li className="mb-4">
                  <ActiveLink href="/blog" className="hover:underline">
                    Blog
                  </ActiveLink>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-6 text-xl font-semibold text-[var(--ocean-blue)]">
                Location
              </h2>
              <ul className="light:text-[var(--gray-70)] text-[var(--gray-blue)] font-medium">
                <li className="mb-4">
                  860 Main Street, Moncton,
                  <br /> NB, Canada
                </li>
                <li className="mb-4">
                  <a href="mailto:info@theclicks.com" className="">
                    info@theclicks.ca
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+15068718210" className="">
                    +1 506 871 8210
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pb-16 bg-opacity-50 md:flex md:items-center md:justify-between w-full">
          <span className="text-sm light:text-[var(--gray-70)] text-[var(--gray-40)] px-4 md:px-10 max-w-7xl w-full mx-auto">
            © 2024{" "}
            <ActiveLink href="https://theclicks.ca">The Clicks™</ActiveLink>.
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </motion.section>
  );
};

export default Footer;

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/images/noise.webp)",
        backgroundSize: "30%",
      }}
    ></div>
  );
};
