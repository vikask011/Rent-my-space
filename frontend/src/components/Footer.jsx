// src/Components/Footer.jsx
import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-16 shadow-md border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-3 text-gray-900">Rent-My-Space</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover and rent inspiring spaces curated just for you – from work areas to events and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-black transition-colors duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-black transition-colors duration-200">About</a></li>
            <li><a href="/contact" className="hover:text-black transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Categories</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li><a href="/studyroom" className="hover:text-black">Study Rooms</a></li>
            <li><a href="/garage" className="hover:text-black">Garages</a></li>
            <li><a href="/kitchen" className="hover:text-black">Kitchens</a></li>
            <li><a href="/officespace" className="hover:text-black">Office Spaces</a></li>
            <li><a href="/artstudio" className="hover:text-black">Art studio</a></li>
            <li><a href="meetingroom" className="hover:text-black">Meeting Room</a></li>
          </ul>
        </div>

        {/* Social Media / Connect with Me */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Connect with Me</h3>
          <div className="flex gap-5 text-2xl text-gray-600">
            <a
              href="https://github.com/Vikask011"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-k-95o/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        © {new Date().getFullYear()} <strong>Rent-My-Space</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
