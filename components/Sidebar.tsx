type SidebarProps = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
}: SidebarProps) {
  const categories = ["All", "Electronics", "Clothing", "Home"];

  return (
    <aside className="w-64 bg-blue-700 text-white rounded-xl p-6 space-y-8 shadow-md">
      
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2 text-sm">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer ${
                selectedCategory === cat
                  ? "font-bold underline"
                  : "hover:underline"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price</h3>
        <input type="range" min="0" max="1000" className="w-full" />
        <div className="text-sm mt-2">0 - 1000</div>
      </div>

    </aside>
  );
}
