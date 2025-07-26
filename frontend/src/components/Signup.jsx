import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://rent-my-space.vercel.app/api/auth/signup", {
        name,
        email,
        password,
        phone,
        address,
        gender,
        role,
      });

      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Signup successful!");
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(res.data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Role</label>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              className="text-blue-600 font-medium hover:underline"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
