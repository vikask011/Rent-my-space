import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-medium mb-1 text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1 text-gray-700">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="example@email.com"
            className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block font-medium mb-1 text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            required
            placeholder="What's your message about?"
            className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1 text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder="Type your message here..."
            className="w-full px-4 py-2 border rounded shadow-sm resize-none focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
