import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTop from "@/components/ScrollToTop";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "The Clicks - Digital Marketing Agency",
    template: "%s | The Clicks",
  },

  description:
    "The Clicks is a digital marketing agency that helps businesses grow online.",
};

// Inject the theme initialization script
const setInitialTheme = `
  (function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })()
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-588PZWKW" />
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <link rel="icon" href="/app/favicon.ico" />
      </head>
      <body className={font.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-588PZWKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
