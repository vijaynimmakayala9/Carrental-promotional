import React from "react";
import { useNavigate } from "react-router-dom";

// Owner Home Component (Dashboard)
const OwnerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 gap-5 p-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-2">Varahi Owner Dashboard</h1>
      <div className="flex flex-wrap justify-center gap-4 max-w-lg">
        <button
          onClick={() => navigate("/owner/privacy-policy")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-400"
        >
          Privacy Policy
        </button>

        <button
          onClick={() => navigate("/owner/terms-conditions")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-green-400"
        >
          Terms & Conditions
        </button>

        <button
          onClick={() => navigate("/owner/vehicle-verification")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-amber-600 hover:bg-amber-700 text-white focus:ring-2 focus:ring-amber-400"
        >
          Vehicle Verification
        </button>

        <button
          onClick={() => navigate("/owner/support")}
          className="w-64 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200 transform hover:scale-105 bg-red-600 hover:bg-red-700 text-white focus:ring-2 focus:ring-red-400"
        >
          Support
        </button>
      </div>
    </div>
  );
};

export default OwnerHome;