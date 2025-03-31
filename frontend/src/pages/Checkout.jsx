import React, { useState } from "react";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [submittedAddress, setSubmittedAddress] = useState("");
  const [coupon, setCoupon] = useState("");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 20.0,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 30.0,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setSubmittedAddress(address);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    console.log("Order placed with address:", submittedAddress);
    console.log("Cart items:", cartItems);
    console.log("Coupon applied:", coupon);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto max-w-3xl bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>

        {/* Address Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Delivery Address</h2>
          {!submittedAddress ? (
            <form onSubmit={handleAddressSubmit} className="flex flex-col gap-4">
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your full address"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Submit Address
              </button>
            </form>
          ) : (
            <p className="text-gray-700">
              <strong>Order will be delivered to:</strong> {submittedAddress}
            </p>
          )}
        </div>

        {/* Cart Items Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="text-gray-800 font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Coupon Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Apply Discount Coupon</h2>
          <div className="flex gap-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Enter coupon code"
            />
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Apply
            </button>
          </div>
        </div>

        {/* Place Order Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <p className="text-gray-700 mb-4">
            <strong>Total:</strong> ${calculateTotal()}
          </p>
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;