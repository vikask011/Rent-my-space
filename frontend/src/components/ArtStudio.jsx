import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ArtStudio = () => {
  const navigate = useNavigate();
  const [artStudios, setArtStudios] = useState([]);

  useEffect(() => {
    const fetchArtStudios = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/spaces/category/artstudio");
        setArtStudios(res.data);
      } catch (error) {
        console.error("Failed to fetch art studios:", error);
      }
    };

    fetchArtStudios();
  }, []);

  const handleViewDetails = (listing) => {
    navigate(`/details/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Art Studios</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artStudios.map((studio) => (
          <div
            key={studio._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-xl"
            onClick={() => handleViewDetails(studio)}
          >
            <img
              src={studio.imageUrl}
              alt={studio.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{studio.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{studio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtStudio;
