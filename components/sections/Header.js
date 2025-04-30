"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-8 md:px-12 z-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <Image src={"/vibecraft.svg"} height={70} width={70} alt="logo" />
          {/* VibeCraft */}
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="/color-palette"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Color Palette
          </Link>
        </nav>

        <div className="flex space-x-4">
          <a
            href="https://github.com/ibrahimmemonn/VibeCraft"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center text-gray-800 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
