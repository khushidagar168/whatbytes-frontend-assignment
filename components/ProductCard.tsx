
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";


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
  <div className="bg-white rounded-xl shadow-md p-6 flex gap-6 items-center justify-between transition duration-200  flex-col border border-gray-100 cursor-pointer hover:-translate-y-1 transform 
">


      
     {/* Image */}
<div className="w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />
</div>

{/* Content */}
<div className="mt-4 text-center">
 <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
  {title}
</h3>

  <div className="flex justify-center gap-1 mt-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className="fill-yellow-400 text-yellow-400"
      />
    ))}
  </div>

  <p className="text-gray-600 font-medium mt-2">
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
  className="mt-4 w-full bg-blue-700 text-white py-2.5 rounded-lg hover:bg-blue-800 transition font-medium"
>
  Add to Cart
</button>



    </div>
    </Link>
  );
}
