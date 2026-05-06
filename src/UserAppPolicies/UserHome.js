import { useNavigate } from "react-router-dom";
import React from "react";

// UserHome Component
const UserHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 gap-5 p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-lg">
        <button
          onClick={() => navigate("/user/privacy-policy")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-400"
        >
          Privacy And Policy
        </button>

        <button
          onClick={() => navigate("/user/terms-and-conditions")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-400"
        >
          Terms And Conditions
        </button>

        {/* <button
          onClick={() => navigate("/user/shipping-policy")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-amber-600 hover:bg-amber-700 text-white focus:ring-2 focus:ring-amber-400"
        >
          Shipping Policy
        </button> */}

        <button
          onClick={() => navigate("/user/cancellation-refund")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-red-600 hover:bg-red-700 text-white focus:ring-2 focus:ring-red-400"
        >
          Cancellation Policy
        </button>
      </div>
    </div>
  );
};

export default UserHome;