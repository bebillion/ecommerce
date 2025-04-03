import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Added axios import
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user); // Fetch user data from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products data using axios
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data'); // fetching all products
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    const userId = user?.userInfo?.id; 
    console.log('Adding Product to Cart:', { userId, productId }); // Debug log
    dispatch(addToCart({ userId, productId, quantity: 1 }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-2" />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;