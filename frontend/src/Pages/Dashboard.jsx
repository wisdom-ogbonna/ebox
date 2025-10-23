import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaStore,
  FaUsers,
  FaBox,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import EboxzLogo from "../Components/EboxzLogo";
import Copyright from "../Components/Copyright";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Unified navLink function with active route highlighting
  const navLink = (to, icon, label) => {
    const isActive = location.pathname === to;

    return (
      <Link
        key={label}
        to={to}
        className={`flex items-center space-x-3 py-2 px-3 rounded-md transition-colors duration-200 ${
          isActive
            ? "bg-cyan-500/20 text-cyan-400 font-semibold"
            : "text-gray-300 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <span className="text-lg">{icon}</span>
        {isSidebarOpen && <span className="text-sm">{label}</span>}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ease-in-out bg-black text-white ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/20">
          <h1 className="text-xl font-bold">{isSidebarOpen ? "Eboxz" : "EB"}</h1>
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>

        <nav className="flex flex-col space-y-1 px-2 mt-4">
          {navLink("/dashboard", <FaTachometerAlt />, "Dashboard")}
          {navLink("/seller", <FaStore />, "Seller Panel")}
          {navLink("/buyer", <FaUsers />, "Buyer Panel")}
          {navLink("/products", <FaBox />, "Products")}
          {navLink("/analytics", <FaChartLine />, "Analytics")}
          {navLink("/settings", <FaCog />, "Settings")}
          {navLink("/profile", <FaUserAlt />, "My Profile")}

          <button className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition">
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto text-center">
        <header className="mb-8">
          <div className="flex flex-col items-center mb-6 space-y-2">
            <EboxzLogo className="w-50 h-20" />
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="text-sm text-gray-600">
              Welcome to your unified control panel.
            </p>
          </div>
        </header>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 text-center">
          <GlassCard title="Overview" desc="Sales, Users, Inventory at a glance." />
          <GlassCard title="Live Seller Reports" desc="See real-time sales activity." />
          <GlassCard title="Platform Insights" desc="Buyer trends and engagement metrics." />
          <GlassCard title="Revenue Analytics" desc="Monitor total and recurring revenue." />
          <GlassCard title="User Management" desc="Admin control over all accounts." />
          <GlassCard title="Settings & Config" desc="Adjust system-wide options." />
        </section>

        {/* Recent Transactions Table */}
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto rounded-lg bg-white/30 border border-white/20 shadow-lg">
            <table className="min-w-full text-sm text-center">
              <thead className="bg-white/40 text-gray-800">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Activity</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody className="backdrop-blur bg-white/20">
                <tr className="border-b border-white/30">
                  <td className="px-4 py-2">2025-07-01</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">Seller</td>
                  <td className="px-4 py-2">Sold 3 items</td>
                  <td className="px-4 py-2">$129.99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8">
          <Copyright />
        </div>
      </main>
    </div>
  );
}

function GlassCard({ title, desc }) {
  return (
    <div className="rounded-lg bg-white/30 border border-white/20 shadow-lg p-5 transition hover:bg-white/40 text-center">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}