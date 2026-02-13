"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";


type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
    const { cart } = useCart();

const totalItems = cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);

  return (
    <header className="bg-blue-700 text-white px-8 py-4">
      <div className="flex items-center justify-between w-full">

        
        <div className="text-2xl font-bold tracking-wide">
  Logo
</div>


        <div className="flex-1 px-10">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"

          />
        </div>
<Link href="/cart">
        <button className="relative flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-900 transition">
  <ShoppingCart size={18} />
  Cart

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-1 rounded-full">
      {totalItems}
    </span>
  )}
</button>
</Link>
<div className="w-9 h-9 bg-white rounded-full ml-4"></div>



      </div>
    </header>
  );
}
