"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";



export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);

  const router = useRouter();
const searchParams = useSearchParams();

useEffect(() => {
  const urlCategory = searchParams.get("category");
  const urlPrice = searchParams.get("price");
  const urlSearch = searchParams.get("search");

  if (urlCategory) setCategory(urlCategory);
  if (urlPrice) setMaxPrice(Number(urlPrice));
  if (urlSearch) setSearch(urlSearch);
}, []);




  const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.title.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  const matchesPrice = product.price <= maxPrice;

  return matchesSearch && matchesCategory && matchesPrice;
});




  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header Placeholder */}
      <Header search={search} setSearch={setSearch} />


      {/* Main Layout */}
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-8 gap-8">


        {/* Sidebar */}
        <Sidebar
  selectedCategory={category}
  setSelectedCategory={setCategory}
  maxPrice={maxPrice}
  setMaxPrice={setMaxPrice}
/>




        {/* Product Section */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6">
            Product Listing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-6">
              No products found.
            </p>
          )}

        </section>



      </main >

      {/* Footer Placeholder */}
      <footer className="bg-blue-900 text-white py-10 mt-16">
  <div className="w-full px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

    {/* Filters Section */}
    <div>
      <h4 className="font-semibold mb-3 text-lg">Filters</h4>
      <ul className="space-y-2 text-gray-300">
        <li className="hover:text-white cursor-pointer">All</li>
        <li className="hover:text-white cursor-pointer">Electronics</li>
        <li className="hover:text-white cursor-pointer">Clothing</li>
        <li className="hover:text-white cursor-pointer">Home</li>
      </ul>
    </div>

    {/* About Section */}
    <div>
      <h4 className="font-semibold mb-3 text-lg">About Us</h4>
      <ul className="space-y-2 text-gray-300">
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
        <li className="hover:text-white cursor-pointer">Careers</li>
      </ul>
    </div>

    {/* Social Section */}
    <div>
      <h4 className="font-semibold mb-3 text-lg">Follow Us</h4>
      <div className="flex gap-4 mt-2">
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
          F
        </div>
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
          T
        </div>
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer">
          I
        </div>
      </div>
    </div>

  </div>

  <div className="text-center text-gray-400 text-sm mt-10 border-t border-blue-800 pt-6">
    © 2026 Whatbytes. All rights reserved.
  </div>
</footer>


    </div>
  );
}
