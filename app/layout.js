import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "VibeCraft - Design the Brand Identity Your Business Deserves",
  description:
    "Create beautiful, cohesive brand palettes in seconds with our AI-powered branding generator.",
  openGraph: {
    title: "VibeCraft - Design the Brand Identity Your Business Deserves",
    description:
      "Create beautiful, cohesive brand palettes in seconds with our AI-powered branding generator.",
    images: "/opengraph.png",
  },
  keywords: [
    "branding",
    "design",
    "color palette",
    "typography",
    "brand identity",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
