"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full px-8">

        <h1 className="text-3xl font-bold mb-8 text-black">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-800">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6 text-black">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-6 flex gap-6 items-center"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">
                      {item.title}
                    </h2>
                    <p className="text-gray-600">
                      ${item.price}
                    </p>
                  </div>

                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        Number(e.target.value)
                      )
                    }
                    className="w-20 border rounded px-2 py-1"
                  />

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit md:w-96 text-black"
>
              <h2 className="text-xl font-semibold mb-4  ">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span className="font-bold ">
                  ${totalPrice}
                </span>
              </div>

              <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition">
                Checkout
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
