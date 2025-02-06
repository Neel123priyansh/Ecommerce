import React, { useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const CartPage = () => {
  // Manage the visibility of the payment modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Sample cart items with initial quantities
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Solace Watch", price: 6649.99, quantity: 1 },
  ]);

  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // Function to handle increasing quantity
  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-lg p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

        <div className="mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
              <div className="flex items-center">
                <span>{item.name}</span>
              </div>
              <div className="flex items-center">
                {/* Minus Button */}
                <button
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                {/* Display Quantity */}
                <span className="mx-2">{item.quantity}</span>
                {/* Plus Button */}
                <button
                  className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition duration-300"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="font-bold">Total:</span>
          <span className="text-lg font-bold">₹{totalPrice}</span>
        </div>

        <button
          onClick={() => setIsCheckoutOpen(true)}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Checkout
        </button>
      </div>

      {/* Payment Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <p className="mb-4">Select your payment method and proceed.</p>

            <div className="flex gap-4 mb-6">
              <button className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300">
                Credit Card
              </button>
              <button className="w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300">
                PayPal
              </button>
            </div>

            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

