import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import EboxzLogo from "../Components/EboxzLogo";
import Sidebar from "./Sidebar";

export default function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <EboxzLogo className="h-10 w-auto" />
          </button>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/auth")}
              className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Register
            </button>

            <button
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}