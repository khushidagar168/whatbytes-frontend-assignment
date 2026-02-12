type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Price */}
      <p className="text-gray-700 mb-4">
        ${price}
      </p>

      {/* Button */}
      <button className="mt-auto bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
        Add to Cart
      </button>

    </div>
  );
}
