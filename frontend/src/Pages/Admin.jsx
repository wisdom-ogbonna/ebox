import { Link } from "react-router-dom";
import {
  FaUsersCog,
  FaUserShield,
  FaChartPie,
  FaArrowLeft,
  FaClipboardCheck,
} from "react-icons/fa";

export default function Admin() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Super Admin Dashboard</h2>
          <p className="text-sm text-gray-600">Manage platform, users, and performance analytics.</p>
        </div>
        <Link to="/dashboard" className="text-sm text-gray-600 hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Main Dashboard
        </Link>
      </header>

      {/* Admin Controls */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-100 rounded-lg shadow p-5 flex items-center gap-4">
          <FaUsersCog className="text-black text-2xl" />
          <div>
            <h3 className="text-lg font-bold">User Management</h3>
            <p className="text-sm text-gray-700">View and control all registered users.</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow p-5 flex items-center gap-4">
          <FaUserShield className="text-black text-2xl" />
          <div>
            <h3 className="text-lg font-bold">Seller Approvals</h3>
            <p className="text-sm text-gray-700">Review and approve new sellers.</p>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg shadow p-5 flex items-center gap-4">
          <FaChartPie className="text-black text-2xl" />
          <div>
            <h3 className="text-lg font-bold">Platform Analytics</h3>
            <p className="text-sm text-gray-700">Monitor overall platform KPIs.</p>
          </div>
        </div>
      </section>

      {/* User List Table Placeholder */}
      <section>
        <h3 className="text-xl font-semibold mb-4">User Accounts Overview</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">User ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              <tr className="border-b">
                <td className="px-4 py-2">U-001</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">Seller</td>
                <td className="px-4 py-2">Pending</td>
                <td className="px-4 py-2">
                  <button className="text-sm text-blue-600 hover:underline">Approve</button>
                </td>
              </tr>
              {/* Future dynamic mapping here */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Approval Log Placeholder */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Recent Approvals</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2">Approval ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">A-012</td>
                <td className="px-4 py-2">Michael Johnson</td>
                <td className="px-4 py-2">Seller</td>
                <td className="px-4 py-2">2025-07-03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}