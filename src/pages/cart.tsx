import { useCart } from "../context/cartContext";
import Link from "next/link";
import CheckoutButton from "../components/CheckoutButton";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.price.replace("$", ""));
    return total + price;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto mt-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Your Cart is Empty</h2>
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Go back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
      <div className="mt-4">
        {cart.map((product) => (
          <div key={product.id} className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center">
              <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
              <span className="ml-4 text-lg font-semibold">{product.title}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{product.price}</span>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <div className="mt-6">
            <CheckoutButton cartItems={cart} />
          </div>
        </button>
      </div>
    </div>
  );
}
/*

import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 29.99, image: "/product1.jpg", quantity: 1 },
    { id: 2, name: "Product 2", price: 19.99, image: "/product2.jpg", quantity: 1 },
  ]);

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <CheckoutButton cartItems={cart} />
          </div>
        </>
      )}
    </div>
  );
}
*/