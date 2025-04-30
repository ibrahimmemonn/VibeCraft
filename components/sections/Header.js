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
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Templates
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            Explore
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-800 hover:text-gray-600"
          >
            About Us
          </Link>
        </nav>

        <div className="flex space-x-4">
          <Link
            href="#"
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
              <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
              <path d="M9 12h6"></path>
              <path d="M12 9v6"></path>
            </svg>
          </Link>
          <Link
            href="#"
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
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </Link>
          <Link
            href="#"
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
          <Link
            href="#"
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
