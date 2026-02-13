"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Star } from "lucide-react";



import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { FacebookIcon, Instagram, InstagramIcon, TwitterIcon } from "lucide-react";



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

const featuredProduct = filteredProducts.find(
  (p) => p.title === "Smartphone"
);

const normalProducts = filteredProducts.filter(
  (p) => p.title !== "Smartphone"
);





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
        <section className="flex-1 bg-white rounded-xl shadow p-8">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Product Listing
          </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Normal Products */}
  {normalProducts.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      rating={product.rating}
    />
  ))}

  {/* Featured Smartphone */}
  {featuredProduct && (
    <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">

      {/* Image */}
      <div className="md:w-1/2 h-72 rounded-lg overflow-hidden bg-white">
        <img
          src={featuredProduct.image}
          alt={featuredProduct.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="md:w-1/2 flex flex-col justify-between">

        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {featuredProduct.title}
          </h2>

          <p className="text-xl font-medium text-gray-800 mt-2">
            ${featuredProduct.price}
          </p>

          <div className="flex gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className={
                  i < featuredProduct.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            {featuredProduct.description}
          </p>

          <p className="text-gray-500 mt-4 text-sm">
            Category: {featuredProduct.category}
          </p>
        </div>

        <button
          onClick={() =>
            alert("Add to Cart handled via detail page or card")
          }
          className="mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-medium w-full"
        >
          Add to Cart
        </button>

      </div>
    </div>
  )}

</div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 mt-6">
              No products found.
            </p>
          )}

        </section>



      </main >

      {/* Footer Placeholder */}
      <footer className="bg-blue-900 text-white mt-16 py-10">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-8 text-sm">
    <div>
      <h4 className="font-semibold mb-3">Filters</h4>
      <p>All</p>
      <p>Electronics</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">About Us</h4>
      <p>About Us</p>
      <p>Contact</p>
    </div>

    <div>
      <h4 className="font-semibold mb-3 items-center">Follow Us</h4>
      <div className="flex gap-3 mt-2">
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center "> 
          <FacebookIcon />
        </div>
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center "><TwitterIcon /></div>
        <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center"> <InstagramIcon /></div>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-400 mt-8 text-sm">
    © 2024 American
  </div>
</footer>



    </div>
  );
}
