"use client";

import Link from "next/link";
import { Button } from "@/@shadcn/ui/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/color-palette"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Color Palette Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/typography"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Typography Explorer
                </Link>
              </li>
              <li>
                <Link
                  href="/icons"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Icon Library
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/yourusername/branding-ai-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <Link
                  href="/contribute"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Star on GitHub
            </h3>
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/ibrahimmemonn/VibeCraft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span className="text-sm">Star this project</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2025 VibeCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
