import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Pricing",
  description: "Choose the plan that suits your needs the best",
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
