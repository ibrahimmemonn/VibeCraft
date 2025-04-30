import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "VibeCraft - Design the Brand Identity Your Business Deserves",
  description:
    "Create beautiful, cohesive brand palettes in seconds with our AI-powered branding generator.",
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
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
