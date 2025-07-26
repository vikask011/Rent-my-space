import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OfficeSpace = () => {
  const [officeSpaces, setOfficeSpaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOfficeSpaces = async () => {
      try {
        const res = await axios.get("https://rent-my-space.vercel.app/api/spaces/category/officespace");
        setOfficeSpaces(res.data);
      } catch (error) {
        console.error("Error fetching office spaces:", error);
      }
    };

    fetchOfficeSpaces();
  }, []);

  const handleViewDetails = (listing) => {
    navigate(`/details/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Office Spaces</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {officeSpaces.map((office) => (
          <div
            key={office._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-xl"
            onClick={() => handleViewDetails(office)}
          >
            <img
              src={office.imageUrl}
              alt={office.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{office.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{office.description}</p>
              <p className="text-black font-medium mt-2">₹{office.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeSpace;
