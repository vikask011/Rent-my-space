import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-green-100 rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800">Admin Dashboard</h2>
        
        <button
          onClick={() => navigate("/addlisting")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg mb-4 w-full hover:bg-green-700 transition"
        >
          Add Listing
        </button>

        <button
          onClick={() => navigate("/viewlisting")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg w-full hover:bg-green-700 transition"
        >
          View Listings
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
