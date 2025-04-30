"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const headshotImages = [
  "/headshot1.png",
  "/headshot2.png",
  "/headshot3.png",
  "/headshot4.png",
  "/headshot5.png",
];

export default function Hero() {
  return (
    <section className="pt-14  text-center px-4">
      <div className="max-w-4xl mx-auto">
        {/* Trusted by badge */}
        <div className="flex justify-center mb-7">
          <motion.div
            className="rounded-full px-4 inline-flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex -space-x-3">
              {headshotImages.map((i) => (
                <Image
                  src={i}
                  key={`headshot_${i}`}
                  alt="reviews"
                  height={30}
                  width={30}
                />
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                Trusted by 20+ professionals & founders
              </span>
            </div>
          </motion.div>
        </div>

        {/* Main heading */}
        <div className="relative w-fit mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Design the Identity
            <br />
            Your Brand Deserves.
          </motion.h1>

          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/line.png"
              height={50}
              width={200}
              alt="line under text"
            />
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bring your brand to life with curated styles, colors,
          <br />
          fonts, and icons — all in one tool.
        </motion.p>
      </div>
    </section>
  );
}
