import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="relative h-[90vh] w-full">
      {/* Background Image */}
      <img
        src="https://wallpapercat.com/w/full/6/8/e/743660-3840x2160-desktop-4k-house-wallpaper-photo.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Discover and Rent Spaces That Fit Your Needs
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          Whether you're hosting a workshop, meeting, or pop-up kitchen — Rent-my-space connects you with the perfect verified location, instantly.
        </p>
        <Link
          to="/categories"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Body;
