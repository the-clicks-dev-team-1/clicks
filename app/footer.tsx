"use client";
import ActiveLink from "@/components/activelink";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <WobbleCard containerClassName="bg-gray-900 rounded-t-3xl w-full max-w-screen-xl mx-auto relative">
      <footer className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-4 py-6 lg:py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {/* <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/about/about-agency" className="hover:underline">About Agency</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/about/team" className="hover:underline">Our Team</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/about/careers" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/blog" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div> */}
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://x.com/theclicks_ca"
                    className="hover:underline flex items-center"
                  >
                    <FaSquareXTwitter className="mr-2" />
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/theclicks.ca"
                    className="hover:underline flex items-center"
                  >
                    <FaFacebook className="mr-2" />
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/the_clicks_marketing/"
                    className="hover:underline flex items-center"
                  >
                    <FaInstagram className="mr-2" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
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
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </footer>
      <div className="px-4 py-6 bg-gradient-to-r from-sky-400 to-purple-500 bg-opacity-50 md:flex md:items-center md:justify-between rounded-b-lg absolute bottom-0 left-0 w-full">
        <span className="text-sm text-white dark:text-gray-300 sm:text-center">
          © 2024{" "}
          <ActiveLink href="https://theclicks.ca">The Clicks™</ActiveLink>. All
          Rights Reserved.
        </span>
        {/* <div className="flex mt-4 sm:mt-0 sm:justify-center md:justify-end space-x-5 rtl:space-x-reverse">
          <a
            href="https://www.facebook.com/theclicks.ca"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a
            href="https://x.com/theclicks_ca"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.919 9.919 0 0 1-2.828.775A4.933 4.933 0 0 0 23.337 3a9.86 9.86 0 0 1-3.127 1.197 4.922 4.922 0 0 0-8.384 4.485A13.978 13.978 0 0 1 1.671 3.149a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.903 4.903 0 0 1-2.231-.616v.062c0 2.385 1.693 4.374 3.946 4.828a4.936 4.936 0 0 1-2.224.084c.626 1.956 2.445 3.376 4.604 3.415a9.867 9.867 0 0 1-6.102 2.104c-.398 0-.79-.023-1.175-.067A13.939 13.939 0 0 0 7.548 21 13.946 13.946 0 0 0 21.5 7.862c0-.213-.005-.425-.014-.637A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
            <span className="sr-only">X page</span>
          </a>
          <a
            href="https://www.instagram.com/theclicks.ca"
            className="text-white hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37a4 4 0 1 1-7.92 1.2 4 4 0 0 1 7.92-1.2z"></path>
              <path d="M17.5 6.5h.01"></path>
            </svg>
            <span className="sr-only">Instagram page</span>
          </a>
        </div> */}
      </div>
    </WobbleCard>
  );
};

export default Footer;
