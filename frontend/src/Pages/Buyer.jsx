import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaArrowLeft,
  FaUser,
  FaBell,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaCommentDots,
  FaHistory,
  FaStar,
  FaGift,
} from "react-icons/fa";
import Footer from "../Components/Footer";

export default function Buyer() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Header */}
      <header className="flex flex-row-reverse md:flex-row lg:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Buyer Dashboard</h2>
          <p className="text-sm text-gray-600">
            Your central hub to manage orders, settings, and preferences.
          </p>
        </div>
        <Link
          to="/dashboard"
          className="text-sm text-gray-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> <span className="hidden lg:inline">Back to Dashboard</span>
        </Link>
      </header>

      {/* Quick Access Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <GlassCard
          icon={<FaShoppingCart />}
          title="My Orders"
          desc="Track and manage your orders."
        />
        <GlassCard
          icon={<FaHeart />}
          title="Wishlist"
          desc="Save products you love for later."
        />
        <GlassCard
          icon={<FaUser />}
          title="Profile Settings"
          desc="Update your personal details."
        />
        <GlassCard
          icon={<FaBell />}
          title="Notifications"
          desc="View recent alerts and updates."
        />
        <GlassCard
          icon={<FaMapMarkerAlt />}
          title="Addresses"
          desc="Manage shipping addresses."
        />
        <GlassCard
          icon={<FaCreditCard />}
          title="Payment Methods"
          desc="Manage saved payment options."
        />
        <GlassCard
          icon={<FaLock />}
          title="Security Settings"
          desc="Update password and 2FA."
        />
        <GlassCard
          icon={<FaCommentDots />}
          title="Support Chat"
          desc="Talk to customer service."
        />
        <GlassCard
          icon={<FaHistory />}
          title="Order History"
          desc="View all past orders."
        />
        <GlassCard
          icon={<FaStar />}
          title="Product Reviews"
          desc="Manage your submitted reviews."
        />
        <GlassCard
          icon={<FaGift />}
          title="Promotions"
          desc="See active offers and coupons."
        />
      </section>

      {/* Order History Table */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <div className="overflow-x-auto rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-white/40 text-gray-800">
              <tr>
                <th className="px-4 py-2">Order #</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Items</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="backdrop-blur bg-white/20">
              <tr className="border-b border-white/30">
                <td className="px-4 py-2">1025</td>
                <td className="px-4 py-2">2025-07-02</td>
                <td className="px-4 py-2">3 Items</td>
                <td className="px-4 py-2">$89.50</td>
                <td className="px-4 py-2">Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/** GlassCard component for DRY design */
function GlassCard({ icon, title, desc }) {
  return (
    <div className="rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg p-5 flex items-center gap-4 transition hover:bg-white/40">
      <div className="text-black text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  );
}
