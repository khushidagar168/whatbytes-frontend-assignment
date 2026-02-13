

import { products } from "@/data/products";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetail({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8 grid md:grid-cols-2 gap-10">

        <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-black">
            {product.title}
          </h1>

          <p className="text-xl text-gray-700 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6">
            Category: {product.category}
          </p>

          <p className="text-gray-500 mb-6">
            This is a sample product description.
          </p>

          <div className="flex items-center text-gray-600 gap-4 mb-6">
            <label className="font-medium  ">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-20 border rounded px-2 py-1 "
            />
          </div>

          <AddToCartButton
  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
/>

        </div>

      </div>
    </div>
  );
}
