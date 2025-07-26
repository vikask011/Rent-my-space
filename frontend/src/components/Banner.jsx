// src/Components/Banner.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const Banner = () => {
  return (
    <div className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1350&q=80"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
          Rent Unique Spaces
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed drop-shadow">
          Discover kitchens, studios, garages, and more — tailored for your work, creativity, or relaxation needs.
        </p>
        
        {/* ✅ Link to /categories */}
        <Link to="/categories">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium rounded-full transition shadow-md">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
