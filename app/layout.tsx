import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prindiville Media | Brand Directory",
  description:
    "A managed media directory for Prindiville Media company websites, Google profiles, and social channels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
