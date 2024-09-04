import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your privacy is important to us. This Privacy Policy explains how The Clicks Full-Service Digital Marketing Agency collects, uses, and discloses your information",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
