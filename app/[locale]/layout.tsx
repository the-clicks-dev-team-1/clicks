import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import FacebookPixel from "@/components/FacebookPixel";
import LiveChat from "@/components/LiveChat";
import ScrollToTop from "@/components/ScrollToTop";
import { routing } from "@/i18n/routing";

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

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* <GoogleTagManager gtmId="GTM-588PZWKW" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={font.className} suppressHydrationWarning>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-588PZWKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4HWD3L1B9T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4HWD3L1B9T');
          `}
        </Script>
        
        <FacebookPixel />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-preference"
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <LiveChat />
        <ScrollToTop />

      </body>
    </html>
  );
}
