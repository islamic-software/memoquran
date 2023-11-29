import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MemoQuran",
  description: "Test your knowledge of Quran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
