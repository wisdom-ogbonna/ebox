import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

function GetPremium() {
  const navigate = useNavigate();
  const [features] = useState([
    "Upload Unlimited Products",
    "Upload A Customized Logo",
    "Use A Custom Domain",
    "A Fully Customized Website",
    "24 Hours Customer Support",
  ]);

  const [prices] = useState({
    monthly: 7000,
    biannually: 42000,
    yearly: 80000,
  });

  // Track the active plan
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="py-4 flex flex-row gap-5 w-full border-b border-gray-200 px-5 items-center cursor-pointer">
        <Link
          to="/dashboard"
          className="text-gray-600 hover:text-black transition-colors flex flex-row gap-5 justify-center items-center"
        >
          <FaArrowLeft size={18} />
          <h3 className="text-left font-bold text-xl">Pricing Plan</h3>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full max-w-2xl mx-auto px-5 py-10 flex flex-col">
        <div className="text-center mb-10">
          <div className="font-bold text-4xl text-black mb-2">
            <span>₦</span>
            <span>{prices[selectedPlan].toLocaleString()}</span>
            <span className="text-lg text-gray-500 font-normal ml-2">
              / {selectedPlan}
            </span>
          </div>
          <p className="text-gray-500">
            Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Plan Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(prices).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`px-6 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer capitalize
                ${
                  selectedPlan === plan
                    ? "bg-black text-white border-black"
                    : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
                }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h4 className="text-black font-bold mb-4">Features Include:</h4>
          <ul className="space-y-4">
            {features.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-black" size={16} />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button onClick={() => navigate("/earnings")} className="w-full bg-black hover:bg-gray-800 transition-colors font-bold text-white rounded-xl h-14 text-lg shadow-lg">
            Subscribe to{" "}
            {selectedPlan === "biannually"
              ? selectedPlan.slice(0, -2)
              : selectedPlan}{" "}
            plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetPremium;
