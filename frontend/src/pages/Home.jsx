import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Welcome to E-Commerce</h1>
          <p className="text-lg text-gray-700 text-center">
            Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
          </p>

          {/* Example Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 1"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">Product 1</h3>
              <p className="text-gray-600 mt-2">$20.00</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-4 rounded shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 2"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">Product 2</h3>
              <p className="text-gray-600 mt-2">$30.00</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-4 rounded shadow">
              <img
                src="https://via.placeholder.com/150"
                alt="Product 3"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">Product 3</h3>
              <p className="text-gray-600 mt-2">$40.00</p>
              <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;