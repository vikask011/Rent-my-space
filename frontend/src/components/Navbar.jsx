import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userPhoto = localStorage.getItem("userPhoto") || "https://i.pravatar.cc/300";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userPhoto");
    navigate("/signin");
    window.location.reload(); // Refresh to update navbar state
  };

  return (
    <nav className="bg-transparent text-black px-6 py-4 flex justify-between items-center shadow-md relative">
      {/* Logo + Title */}
      <Link to="/" className="flex items-center space-x-3 ">
        <img 
          src="rent my space.jpeg"
          alt="logo"
          className="w-20 h-10"
        />
        <span className="text-xl font-bold tracking-wide">RENT-MY-SPACE</span>
      </Link>

      {/* Right Side Links */}
      <div className="flex space-x-6 text-sm font-medium items-center relative">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        <Link to="/categories" className="hover:text-blue-600 transition">Categories</Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/admin"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            >
              Admin
            </Link>

            <Link to="/profile">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt="profile"
                className="w-9 h-9 rounded-full cursor-pointer border-2 border-blue-500"
              />
            </Link>


          </>
        ) : (
          <Link
            to="/signin"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
