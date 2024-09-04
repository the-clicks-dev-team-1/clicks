import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licensing",
  description:
    "The Clicks Full-Service Digital Marketing Agency is committed to complying with all applicable licenses and regulations. This page outlines our licensing information",
};

export default function LicensingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
