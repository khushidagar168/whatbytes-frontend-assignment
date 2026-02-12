import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Header Placeholder */}
      <Header />

      {/* Main Layout */}
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-6 py-8 gap-8">

        
        {/* Sidebar */}
        <Sidebar />


        {/* Product Section */}
        <section className="flex-1">
  <h2 className="text-2xl font-semibold mb-6">
    Product Listing
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ))}
  </div>
</section>



      </main >

      {/* Footer Placeholder */}
      <footer className="bg-blue-900 text-white px-8 py-6 text-center">
        Footer
      </footer>

    </div>
  );
}
