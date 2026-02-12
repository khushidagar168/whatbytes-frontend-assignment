"use client";

import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          Logo
        </div>

        {/* Search Bar */}
        <div className="flex-1 px-10">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Cart */}
        <button className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-900 transition">
          <ShoppingCart size={18} />
          Cart
        </button>

      </div>
    </header>
  );
}
