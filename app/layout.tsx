import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scroll-Driven Hero Section Animation",
  description: "Scroll-driven hero section animation assignment"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}