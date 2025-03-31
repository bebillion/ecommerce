import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center h-32  w-full md:w-1/3 mb-4 border-r border-gray-700 md:mb-0">
            <h2 className="text-xl font-bold">E-Commerce</h2>
            <p className="text-sm mt-2">
              Your one-stop shop for all your needs. Quality products at the
              best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col  h-32 items-center justify-center w-full md:w-1/3 mb-4 border-r border-gray-700 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

            <ul>
              <li>
                <a href="/about" className="text-sm hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col h-32 items-center w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
