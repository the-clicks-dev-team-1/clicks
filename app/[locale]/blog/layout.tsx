import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "The Clicks Blog", template: "%s | The Clicks" },
  description:
    "Stay updated with the latest insights, tips, and trends in digital marketing. Our blog is your go-to resource for all things marketing",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
