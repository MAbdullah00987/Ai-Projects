import type { Metadata } from "next";
import { Blinker, Sulphur_Point, Outfit } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-blinker",
});

const sulphurPoint = Sulphur_Point({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sulphur-point",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-gilroy", // Using Outfit as a modern alternative for Gilroy
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah — Product Designer & Creative Technologist",
  description: "The creative portfolio of Muhammad Abdullah — product design, web design, and vibe-coded experiments in the Playground.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${blinker.variable} ${sulphurPoint.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <body className="bg-black text-white selection:bg-white/30">
        {children}
      </body>
    </html>
  );
}
