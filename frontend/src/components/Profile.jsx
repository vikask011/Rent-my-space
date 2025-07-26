import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Pencil, Save } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);
  const [customData, setCustomData] = useState({
    phone: "",
    gender: "Male",
    address: "",
    role: "User",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || !storedUser) {
      navigate("/signin");
    } else {
      if (token && !storedUser.token) {
        storedUser.token = token;
        localStorage.setItem("user", JSON.stringify(storedUser));
      }
      setUser(storedUser);
      setCustomData((prev) => ({
        ...prev,
        ...storedUser,
      }));
    }
  }, [navigate]);

  const handleEditToggle = async () => {
    if (editMode) {
      try {
        const token = user.token || localStorage.getItem("token");
        const res = await axios.put(
          "http://localhost:5000/api/auth/profile",
          {
            email: user.email,
            ...customData,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 200) {
          const updatedUser = { ...user, ...customData };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          setUser(updatedUser);
          alert("Profile updated!");
        } else {
          alert("Update failed.");
        }
      } catch (err) {
        console.error("Update error:", err);
        alert("Something went wrong.");
      }
    }

    setEditMode((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleBookedSlots = () => {
    navigate("/bookedslots");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!user) return null;

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Profile</h2>
          <button
            onClick={handleEditToggle}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
          >
            {editMode ? <Save size={18} /> : <Pencil size={18} />}
            {editMode ? "Save" : "Edit"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
            <p className="mt-4 font-medium text-lg text-gray-800">{user.name}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="text-sm font-semibold">Phone:</p>
              {editMode ? (
                <input
                  type="text"
                  name="phone"
                  value={customData.phone}
                  onChange={handleInputChange}
                  className="border rounded w-full px-2 py-1"
                />
              ) : (
                <p className="text-base">{customData.phone || "N/A"}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold">Gender:</p>
              {editMode ? (
                <select
  name="gender"
  value={customData.gender}
  onChange={handleInputChange}
  className="border rounded w-full px-2 py-1"
>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>

              ) : (
                <p className="text-base">{customData.gender}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <p className="text-sm font-semibold">Address:</p>
              {editMode ? (
                <input
                  type="text"
                  name="address"
                  value={customData.address}
                  onChange={handleInputChange}
                  className="border rounded w-full px-2 py-1"
                />
              ) : (
                <p className="text-base">{customData.address || "Not provided"}</p>
              )}
            </div>

            <div>
              <p className="text-sm font-semibold">Role:</p>
              {editMode ? (
                <input
                  type="text"
                  name="role"
                  value={customData.role}
                  onChange={handleInputChange}
                  className="border rounded w-full px-2 py-1"
                />
              ) : (
                <p className="text-base">{customData.role}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between">
          <button
            onClick={handleBookedSlots}
            className="w-full md:w-auto bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
          >
            View Booked Slots
          </button>
          <button
            onClick={handleLogout}
            className="w-full md:w-auto bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
