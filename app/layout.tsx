import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Clicks - Digital Marketing Agency",
  description: "The Clicks is a digital marketing agency that helps businesses grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" /> {/* Добавляем favicon здесь */}
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
