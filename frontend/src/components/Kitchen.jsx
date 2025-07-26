import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Kitchen = () => {
  const navigate = useNavigate();
  const [kitchenSpaces, setKitchenSpaces] = useState([]);

  useEffect(() => {
    const fetchKitchenListings = async () => {
      try {
        const res = await axios.get("https://rent-my-space.vercel.app/api/spaces/category/kitchen");
        setKitchenSpaces(res.data);
      } catch (error) {
        console.error("Error fetching kitchen listings:", error);
      }
    };

    fetchKitchenListings();
  }, []);

  const handleViewDetails = (listing) => {
    navigate(`/details/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Kitchens</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kitchenSpaces.map((kitchen) => (
          <div
            key={kitchen._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-xl"
            onClick={() => handleViewDetails(kitchen)}
          >
            <img
              src={kitchen.imageUrl}
              alt={kitchen.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{kitchen.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{kitchen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
