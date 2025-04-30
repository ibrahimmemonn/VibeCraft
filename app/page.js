"use client";

import { useState } from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import BrandGenerator from "@/components/sections/BrandGenerator";
import FeaturesSection from "@/components/sections/FeaturesSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Image
        src="/gradient.png"
        height={2500}
        width={2000}
        objectFit="cover"
        alt="cover"
        className="absolute top-[-170px]"
      />
      <Header />

      <main className="flex-1">
        <Hero />
        <BrandGenerator />
        <FeaturesSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}
