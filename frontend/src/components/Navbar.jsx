import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown
  const [cartItems, setCartItems] = useState(5); // State to track the number of items in the cart

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
    setShowDropdown(false); // Close dropdown
    console.log("User logged out");
  };

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-gray-200">
      {/* Logo */}
      <div className="text-xl font-bold">
        E-Commerce
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 w-full md:w-auto flex justify-end items-center gap-x-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-64 p-2 border border-gray-300 rounded"
        />
        {!isLoggedIn ? (
          <>
            <button 
            onClick={() => navigate("/login")} 
            className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
            >
              Login
            </button>
            <button 
            onClick={() => navigate("/register")} 
            className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
            >
              Signup
            </button>
          </>
        ) : null}
      </div>

      {/* Icons and User Profile */}
      <div className="flex gap-4 items-center mt-4 md:mt-0">
        {/* Cart Icon with Product Count */}
        <div onClick={() => navigate('/cart')} className="relative">
          <FaCartArrowDown  className="text-2xl cursor-pointer" />
          {cartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 cursor-pointer">
              {cartItems}
            </span>
          )}
        </div>

        {/* User Profile */}
        {isLoggedIn && (
          <div className="relative">
            <div
              className="text-2xl cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <CgProfile />
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => console.log("Profile clicked")}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
