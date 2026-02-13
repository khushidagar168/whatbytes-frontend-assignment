
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";


type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: number;
};


export default function ProductCard({
    id,
  title,
  price,
  image,
  rating,
}: ProductCardProps) {

    const { addToCart } = useCart();

  return (
    <Link href={`/product/${id}`}>
  <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col

">


      
     {/* Image */}
 <div className="w-full h-40 rounded-md overflow-hidden">

  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />
</div>

{/* Content */}
<div className="mt-4 text-center">
 <h3 className="text-base font-semibold text-gray-800 mt-3">
  {title}
</h3>

  <div className="flex justify-center gap-1 mt-2">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      size={16}
      className={
        i < rating
          ? "fill-yellow-400 text-yellow-400"
          : "text-gray-300"
      }
    />
  ))}
</div>



  <p className="text-gray-700 font-medium mt-1">
    ${price}
  </p>
</div>

{/* Button */}
<button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, title, price, image });
  }}
className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
>
  Add to Cart
</button>



    </div>
    </Link>
  );
}
