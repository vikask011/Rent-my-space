import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/spaces");
      setListings(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching listings:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/spaces/${id}`);
      setListings((prev) => prev.filter((listing) => listing._id !== id));
    } catch (err) {
      console.error("Error deleting listing:", err);
      alert("Failed to delete listing.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Your Listings</h2>

      {loading ? (
        <p className="text-center">Loading listings...</p>
      ) : listings.length === 0 ? (
        <p className="text-center text-gray-500">No listings found.</p>
      ) : (
        listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-white rounded-xl shadow-md p-5 mb-6 border border-gray-200"
          >
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold">{listing.title}</h3>
            <p className="text-gray-700 my-2">{listing.description}</p>
            <p className="text-lg font-bold text-green-600">₹{listing.price}</p>

            <div className="mt-4">
              <h4 className="font-semibold mb-1">Category:</h4>
              <p className="text-gray-800 capitalize">{listing.category}</p>
            </div>

            <button
              onClick={() => handleDelete(listing._id)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Delete Listing
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewListing;
