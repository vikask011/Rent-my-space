import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddListing = () => {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    price: "",
    description: "",
    image: null,
  });

  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("category", formData.category);
    payload.append("title", formData.title);
    payload.append("price", formData.price);
    payload.append("description", formData.description);
    payload.append("image", formData.image);

    try {
      setUploading(true);
      setSuccess(false);
      setError("");

      const res = await axios.post("https://rent-my-space.vercel.app/api/spaces", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", res.data);
      setSuccess(true);
      setFormData({
        category: "",
        title: "",
        price: "",
        description: "",
        image: null,
      });

      // Redirect to ViewListing page after 1 second
      setTimeout(() => {
        navigate("/viewlisting");
      }, 1000);
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Upload Panel</h2>

      {success && <p className="text-green-600 text-center mb-4">Listing uploaded successfully!</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category Dropdown */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="kitchen">Kitchen</option>
            <option value="garage">Garage</option>
            <option value="studyroom">Study Room</option>
            <option value="officespace">Office Space</option>
            <option value="artstudio">Art Studio</option>
            <option value="meetingroom">Meeting Room</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter title"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter price"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter description"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Room Image</label>

          <label
            htmlFor="image-upload"
            className="block w-full border-2 border-dashed border-gray-300 p-6 rounded text-center bg-gray-50 hover:bg-gray-100 cursor-pointer"
          >
            {formData.image ? (
              <p className="text-green-600 font-medium">
                Selected: {formData.image.name}
              </p>
            ) : (
              <p className="text-gray-600">Click to upload or drag and drop image</p>
            )}
            <input
              id="image-upload"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
              className="hidden"
            />
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={uploading}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Listing"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
