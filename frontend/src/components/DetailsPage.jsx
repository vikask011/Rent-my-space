import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const DetailsPage = () => {
  const { state } = useLocation();
  const listing = state?.listing;

  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = async () => {
    if (!selectedDate) {
      alert("Please select a date before booking.");
      return;
    }

    try {
      const response = await axios.post("https://rent-my-space.vercel.app/api/payment/create-checkout-session", {
        title: listing.title,
        price: listing.price,
        date: selectedDate, // You can log/store this later on backend
      });

      if (response.data.url) {
        window.location.href = response.data.url; // Redirect to Stripe Checkout
      }
    } catch (error) {
      console.error("Stripe Checkout Error:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  if (!listing) {
    return <div className="p-6">No details found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        {listing.title}
      </h2>

      <img
        src={listing.imageUrl}
        alt={listing.name}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Price: ₹{listing.price}
      </h3>

      <p className="text-gray-600 mb-6">{listing.description}</p>

      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Select Booking Date:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-1/2"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleBooking}
          className="bg-green-600 text-white px-8 py-2 rounded-md hover:bg-green-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
