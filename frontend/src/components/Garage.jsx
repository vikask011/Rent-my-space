// src/Components/Garage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Garage = () => {
  const [garages, setGarages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch garage spaces from backend
    axios
      .get("https://rent-my-space.vercel.app/api/spaces/category/garage") // make sure "garage" matches category
      .then((res) => setGarages(res.data))
      .catch((err) => console.error("Failed to fetch garages:", err));
  }, []);

  const handleViewDetails = (listing) => {
    navigate(`/details/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Garages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {garages.map((garage) => (
          <div
            key={garage._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-xl"
            onClick={() => handleViewDetails(garage)}
          >
            <img
              src={garage.imageUrl}
              alt={garage.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{garage.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{garage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Garage;
