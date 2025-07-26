import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MeetingRoom = () => {
  const navigate = useNavigate();
  const [meetingRooms, setMeetingRooms] = useState([]);

  useEffect(() => {
    axios
      .get("https://rent-my-space.vercel.app/api/spaces/category/meetingroom")
      .then((res) => {
        setMeetingRooms(res.data);
      })
      .catch((err) => {
        console.error("Error fetching meeting rooms:", err);
      });
  }, []);

  const handleViewDetails = (listing) => {
    navigate(`/details/${listing._id}`, { state: { listing } });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Meeting Rooms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {meetingRooms.map((room) => (
          <div
            key={room._id}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition hover:shadow-xl"
            onClick={() => handleViewDetails(room)}
          >
            <img
              src={room.imageUrl}
              alt={room.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{room.description}</p>
              <p className="text-green-700 font-bold mt-2">₹ {room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingRoom;
