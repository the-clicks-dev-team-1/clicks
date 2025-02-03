import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import ScrollToTop from "@/components/ScrollToTop";
import LiveChat from "@/components/LiveChat";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
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
        <GoogleTagManager gtmId="GTM-588PZWKW" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={font.className} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-588PZWKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
