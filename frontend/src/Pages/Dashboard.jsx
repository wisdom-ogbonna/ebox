import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTachometerAlt,
  FaUserShield,
  FaStore,
  FaUsers,
  FaBox,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ease-in-out bg-black text-white ${
          isSidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-white/20">
          <h1 className="text-xl font-bold">{isSidebarOpen ? "E-Box" : "EB"}</h1>
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>
        </div>
        <nav className="flex flex-col space-y-1 px-2 mt-4">
          {navLink("/dashboard", <FaTachometerAlt />, "Dashboard", isSidebarOpen)}
          {navLink("/super-admin", <FaUserShield />, "Super Admin", isSidebarOpen)}
          {navLink("/seller", <FaStore />, "Seller Panel", isSidebarOpen)}
          {navLink("/buyer", <FaUsers />, "Buyer Panel", isSidebarOpen)}
          {navLink("/products", <FaBox />, "Products", isSidebarOpen)}
          {navLink("/analytics", <FaChartLine />, "Analytics", isSidebarOpen)}
          {navLink("/settings", <FaCog />, "Settings", isSidebarOpen)}
          {navLink("/profile", <FaUserAlt />, "My Profile", isSidebarOpen)}
          <button className="flex items-center space-x-3 py-2 hover:bg-gray-800 rounded px-2 text-left">
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">E-Box Dashboard</h2>
          <p className="text-sm text-gray-600">
            Welcome to your unified control panel.
          </p>
        </header>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <GlassCard title="Overview" desc="Sales, Users, Inventory at a glance." />
          <GlassCard title="Live Seller Reports" desc="See real-time sales activity." />
          <GlassCard title="Platform Insights" desc="Buyer trends and engagement metrics." />
          <GlassCard title="Revenue Analytics" desc="Monitor total and recurring revenue." />
          <GlassCard title="User Management" desc="Admin control over all accounts." />
          <GlassCard title="Settings & Config" desc="Adjust system-wide options." />
        </section>

        {/* Recent Transactions Table */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
          <div className="overflow-x-auto rounded-lg bg-white/30 border border-white/20 shadow-lg">
            <table className="min-w-full text-sm">
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
      </main>
    </div>
  );
}

/** Sidebar Link helper */
function navLink(to, icon, label, isOpen) {
  return (
    <Link
      key={label}
      to={to}
      className="flex items-center space-x-3 py-2 hover:bg-gray-800 rounded px-2"
    >
      {icon}
      {isOpen && <span>{label}</span>}
    </Link>
  );
}

/** GlassCard Component */
function GlassCard({ title, desc }) {
  return (
    <div className="rounded-lg bg-white/30 border border-white/20 shadow-lg p-5 transition hover:bg-white/40">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}
