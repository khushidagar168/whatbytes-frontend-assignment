"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";



export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const filteredProducts = products.filter((product) => {
  const matchesSearch =
    product.title.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || product.category === category;

  return matchesSearch && matchesCategory;
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
/>



        {/* Product Section */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">
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
      <footer className="bg-blue-900 text-white px-8 py-6 text-center">
        Footer
      </footer>

    </div>
  );
}
