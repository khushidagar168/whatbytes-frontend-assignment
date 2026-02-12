"use client";

import { useCart } from "@/context/CartContext";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function AddToCartButton({
  id,
  title,
  price,
  image,
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({ id, title, price, image })
      }
      className="bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-medium"
    >
      Add to Cart
    </button>
  );
}
