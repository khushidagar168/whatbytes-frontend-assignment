export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white rounded-xl p-6 space-y-8 shadow-md"
>

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2 text-sm">
          <div className="hover:underline cursor-pointer">All</div>
          <div className="hover:underline cursor-pointer">Electronics</div>
          <div className="hover:underline cursor-pointer">Clothing</div>
          <div className="hover:underline cursor-pointer">Home</div>
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold mb-3">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          className="w-full"
        />
        <div className="text-sm mt-2">0 - 1000</div>
      </div>

      {/* Brand (Optional Section Placeholder) */}
      <div>
        <h3 className="font-semibold mb-3">Brand</h3>
        <div className="text-sm space-y-2">
          <div className="hover:underline cursor-pointer">Brand A</div>
          <div className="hover:underline cursor-pointer">Brand B</div>
        </div>
      </div>

    </aside>
  );
}
