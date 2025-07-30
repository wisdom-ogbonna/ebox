import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaPlus,
  FaClipboardList,
  FaChartBar,
  FaCogs,
  FaBoxes,
  FaMoneyBill,
  FaPercent,
  FaTags,
  FaExclamationTriangle,
  FaUpload,
  FaStar,
  FaComments,
  FaHistory,
  FaBell,
  FaUserCircle,
  FaTruck,
  FaUndo,
  FaGlobe,
  FaCoins,
  FaPaperPlane,
  FaUsers,
  FaChartPie,
} from "react-icons/fa";

export default function Seller() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Seller Dashboard</h2>
          <p className="text-sm text-gray-600">
            Your control center for managing sales, inventory, and performance.
          </p>
        </div>
        <Link
          to="/dashboard"
          className="text-sm text-gray-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </header>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <GlassCard
          icon={<FaPlus />}
          title="Add New Product"
          desc="Upload new inventory and manage listings."
          onClick={() => setShowModal(true)}
        />
        <GlassCard
          icon={<FaClipboardList />}
          title="View Orders"
          desc="Track all recent and pending orders."
        />
        <GlassCard
          icon={<FaChartBar />}
          title="Sales Report"
          desc="Analyze revenue trends and performance."
        />
      </section>

      {/* Management Sections */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard icon={<FaBoxes />} title="Product Listings" desc="Edit, remove, or duplicate items." />
        <GlassCard icon={<FaMoneyBill />} title="Payout Settings" desc="Configure bank details and schedules." />
        <GlassCard icon={<FaPercent />} title="Discount Manager" desc="Set promotions and voucher codes." />
        <GlassCard icon={<FaTags />} title="Category Manager" desc="Organize products into categories." />
        <GlassCard icon={<FaExclamationTriangle />} title="Inventory Alerts" desc="Low-stock notifications and restock logs." />
        <GlassCard icon={<FaUpload />} title="Bulk Upload" desc="Upload multiple products via CSV." />
        <GlassCard icon={<FaStar />} title="Reviews Manager" desc="Moderate customer feedback." />
        <GlassCard icon={<FaComments />} title="Seller Support Chat" desc="Chat with platform admins." />
        <GlassCard icon={<FaHistory />} title="Activity Logs" desc="Track all seller actions for audit." />
        <GlassCard icon={<FaBell />} title="Notification Center" desc="View platform notices." />
        <GlassCard icon={<FaUserCircle />} title="Profile Settings" desc="Edit personal and business info." />
        <GlassCard icon={<FaTruck />} title="Shipping Settings" desc="Manage shipping options and fees." />
        <GlassCard icon={<FaUndo />} title="Return Policy" desc="Define and edit return policies." />
        <GlassCard icon={<FaGlobe />} title="Language Settings" desc="Choose languages for your store." />
        <GlassCard icon={<FaCoins />} title="Currency Settings" desc="Set accepted payment currencies." />
        <GlassCard icon={<FaPaperPlane />} title="Admin Messages" desc="Receive direct platform updates." />
        <GlassCard icon={<FaUsers />} title="Customer Segments" desc="Segment buyers for campaigns." />
        <GlassCard icon={<FaChartPie />} title="Analytics" desc="Heatmaps and sales funnels." />
        <GlassCard icon={<FaCogs />} title="Advanced Settings" desc="Integrations, API keys, and webhooks." />
      </section>

      {/* Placeholder Product Table */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">My Products</h3>
        <div className="overflow-x-auto rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-white/40 text-gray-800">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="backdrop-blur bg-white/20">
              <tr className="border-b border-white/30">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Black Wireless Mouse</td>
                <td className="px-4 py-2">$19.99</td>
                <td className="px-4 py-2">56</td>
                <td className="px-4 py-2">Active</td>
                <td className="px-4 py-2">
                  <button className="text-sm text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal */}
      {showModal && <CreateProductModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

/** GlassCard component */
function GlassCard({ icon, title, desc, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg p-5 flex items-center gap-4 transition hover:bg-white/40"
    >
      <div className="text-black text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  );
}

/** Create Product Modal component */
function CreateProductModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-3xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Create New Product</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., Bluetooth Headset"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              rows="3"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., This is a high-quality Bluetooth headset with noise cancellation."
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Product Type</label>
            <select className="w-full border rounded px-3 py-2 text-sm">
              <option value="">Select Type</option>
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Price ($)</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., 29.99"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., 100"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
