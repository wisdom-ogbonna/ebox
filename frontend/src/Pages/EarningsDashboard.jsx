import React, { useState, useEffect } from "react";
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
  FaMoneyCheckAlt,
} from "react-icons/fa";
import EboxzLogo from "../Components/EboxzLogo";
import Copyright from "../Components/Copyright";

export default function EarningsDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [nextPayoutDate, setNextPayoutDate] = useState("");
  const [paymentPlatform, setPaymentPlatform] = useState("Paystack");
  const [accountDetails, setAccountDetails] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Sidebar Navigation ---
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

  // --- Handle Auto Pay Toggle ---
  const handleToggleAutoPay = () => {
    const newState = !autoPayEnabled;
    setAutoPayEnabled(newState);

    if (newState) {
      const now = new Date();
      const nextDate = new Date(now);
      // next payout = same day next month
      nextDate.setMonth(now.getMonth() + 1);
      nextDate.setDate(now.getDate());
      setNextPayoutDate(
        nextDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    } else {
      setNextPayoutDate("");
    }
  };

  // --- Handle Manual Payout ---
  const handleManualPayout = () => {
    if (!accountDetails) {
      alert("Please enter your payout account details before withdrawing.");
      return;
    }
    alert(`Manual payout initiated via ${paymentPlatform}.`);
  };

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
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
          {navLink("/earnings", <FaMoneyCheckAlt />, "Earnings")}
          <button className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition">
            <FaSignOutAlt />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="flex flex-col items-center mb-8">
          <EboxzLogo className="w-40 h-20 mb-4" />
          <h1 className="text-3xl font-semibold text-center">
            Earnings Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Monitor your payout performance and activity.
          </p>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="bg-[var(--card)] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-medium mb-2">Total Earnings</h2>
            <p className="text-3xl font-bold text-[var(--accent)]">$12,480</p>
            <p className="text-sm opacity-70 mt-2">All-time revenue</p>
          </div>

          <div className="bg-[var(--card)] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-medium mb-2">Pending Payouts</h2>
            <p className="text-3xl font-bold text-yellow-500">$1,340</p>
            <p className="text-sm opacity-70 mt-2">Awaiting processing</p>
          </div>

          <div className="bg-[var(--card)] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-lg font-medium mb-2">Withdrawn</h2>
            <p className="text-3xl font-bold text-green-500">$11,140</p>
            <p className="text-sm opacity-70 mt-2">Transferred successfully</p>
          </div>
        </div>

        {/* Withdrawal Settings */}
        <section className="bg-[var(--card)] p-6 rounded-2xl shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Withdrawal Settings</h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            {/* Payment Method */}
            <div className="flex flex-col w-full md:w-1/2 text-left">
              <label className="text-sm font-medium mb-2">
                Payment Platform
              </label>
              <select
                value={paymentPlatform}
                onChange={(e) => setPaymentPlatform(e.target.value)}
                className="p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="Paystack">Paystack</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank">Bank Transfer</option>
              </select>
            </div>

            {/* Account Details */}
            <div className="flex flex-col w-full md:w-1/2 text-left">
              <label className="text-sm font-medium mb-2">
                Account Details / Email
              </label>
              <input
                type="text"
                value={accountDetails}
                onChange={(e) => setAccountDetails(e.target.value)}
                placeholder="Enter your Paystack email or account ID"
                className="p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          {/* Auto Payment */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm font-medium">Automatic Monthly Payment</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoPayEnabled}
                onChange={handleToggleAutoPay}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:bg-cyan-500 transition-all"></div>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full peer-checked:translate-x-5 transition-all"></span>
            </label>
          </div>

          {autoPayEnabled && (
            <p className="text-sm text-gray-500 mb-4">
              Next automatic payout scheduled for{" "}
              <span className="text-[var(--accent)] font-medium">
                {nextPayoutDate}
              </span>
            </p>
          )}

          {/* Manual Withdraw Button */}
          <button
            onClick={handleManualPayout}
            className="mt-4 bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Withdraw Now
          </button>
        </section>

        {/* Payout History */}
        <section className="bg-[var(--card)] p-6 rounded-2xl shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Recent Payouts</h2>
          <table className="w-full text-sm text-center border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)]">
                <th className="py-3 font-medium">Date</th>
                <th className="py-3 font-medium">Amount</th>
                <th className="py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition">
                <td className="py-3">Oct 15, 2025</td>
                <td className="py-3">$500</td>
                <td className="py-3 text-green-500 font-medium">Paid</td>
              </tr>
              <tr className="border-b border-[var(--border)] hover:bg-[var(--muted)] transition">
                <td className="py-3">Oct 1, 2025</td>
                <td className="py-3">$840</td>
                <td className="py-3 text-yellow-500 font-medium">Pending</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-10 text-center">
          <Copyright />
        </div>
      </main>
    </div>
  );
}
