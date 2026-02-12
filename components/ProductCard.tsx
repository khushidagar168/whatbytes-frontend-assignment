import Link from "next/link";
import { useCart } from "@/context/CartContext";


type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
    id,
  title,
  price,
  image,
}: ProductCardProps) {

    const { addToCart } = useCart();

  return (
    <Link href={`/product/${id}`}>
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4 flex flex-col border border-gray-100 cursor-pointer">


      
      {/* Image */}
      <div className="w-full h-52 bg-gray-100 rounded-lg mb-4 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">

        {title}
      </h3>

      {/* Price */}
      <p className="text-gray-600 font-medium mb-4">

        ${price}
      </p>

      {/* Button */}
      <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, title, price, image });
  }}
  className="mt-auto bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition font-medium"
>
  Add to Cart
</button>


    </div>
    </Link>
  );
}
