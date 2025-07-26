import React, { useEffect, useState } from "react";
import axios from "axios";

const BookedSlots = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings/user"); // Replace with actual API
        setBookings(res.data);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-[80vh] px-4 py-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">My Bookings</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No booked slots available.</p>
      ) : (
        <div className="grid gap-4 max-w-4xl mx-auto">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <p><strong>Space:</strong> {booking.spaceName}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.startTime} - {booking.endTime}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookedSlots;
