// src/Pages/Aboutpage.jsx

import React from "react";

const Aboutpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-900 text-center mb-10">
          About <span className="text-amber-600">Rent My Space</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
          <span className="font-semibold text-amber-700">Rent My Space</span> is your one-stop platform to rent out underused or idle spaces like
          <span className="font-semibold text-blue-700"> kitchens, garages, office rooms, study rooms, spare rooms,</span> and more.
          Whether you're a student looking for a quiet study space, or a professional in need of a temporary office, we connect you to verified space providers with ease and security.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Empower individuals and businesses to monetize unused spaces while helping others find affordable short-term rentals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h2>
            <p className="text-gray-600">
              A connected community where space is shared, sustainable living is promoted, and everyone benefits.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Why Choose Us?</h2>
            <p className="text-gray-600">
              Simple interface, verified spaces, safe transactions, and personalized categories – all built for your comfort and trust.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-amber-700 mb-4">Who Can Use This?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            From students and freelancers to chefs and entrepreneurs – if you have space to offer or need space to work, cook, meet, or study –
            <span className="font-semibold text-blue-700"> Rent My Space</span> is designed just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
