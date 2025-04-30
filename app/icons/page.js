"use client";

import { useState } from "react";

export default function IconsPage() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Icon Library
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Browse and download icons for your brand
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {/* Icon cards will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
