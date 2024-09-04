import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a meeting",
  description: "Book a meeting and we will consult you!",
};

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
