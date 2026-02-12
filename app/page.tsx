import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* Header Placeholder */}
      <Header />

      {/* Main Layout */}
      <main className="flex flex-1 max-w-7xl mx-auto w-full px-8 py-6 gap-6">
        
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-lg shadow p-4">
          Sidebar
        </aside>

        {/* Product Section */}
        <section className="flex-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Product Listing
          </h2>
          <div>Products will go here</div>
        </section>

      </main>

      {/* Footer Placeholder */}
      <footer className="bg-blue-900 text-white px-8 py-6 text-center">
        Footer
      </footer>

    </div>
  );
}
