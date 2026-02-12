"use client";

import { ShoppingCart } from "lucide-react";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <header className="bg-blue-700 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="text-xl font-bold">
          Logo
        </div>

        <div className="flex-1 px-10">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none"
          />
        </div>

        <button className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-900 transition">
          <ShoppingCart size={18} />
          Cart
        </button>

      </div>
    </header>
  );
}
