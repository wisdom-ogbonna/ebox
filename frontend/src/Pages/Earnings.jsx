// import { useMemo } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function Earnings() {
  // Example mock data — replace with real data from context or API
  const totalRevenue = 350000; // in NGN
  const totalCost = 200000; // in NGN
  const lastMonthRevenue = 300000;

  // Computations
  const profit = totalRevenue - totalCost;
  const profitMargin = ((profit / totalRevenue) * 100).toFixed(1);
  const revenueChange = (((totalRevenue - lastMonthRevenue) / lastMonthRevenue) * 100).toFixed(1);

  const isProfit = profit >= 0;

  // Format as NGN currency
  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0
    }).format(value);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Earnings Overview</h2>
          <p className="text-sm text-gray-600">
            Track your sales performance, revenue, and profitability.
          </p>
        </div>
        <Link
          to="/seller"
          className="text-sm text-gray-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Seller Dashboard
        </Link>
      </header>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <KpiCard
          title="Total Revenue"
          value={formatCurrency(totalRevenue)}
          change={`${revenueChange}%`}
          changePositive={revenueChange >= 0}
        />
        <KpiCard
          title="Profit"
          value={formatCurrency(profit)}
          change={`${profitMargin}% Margin`}
          changePositive={isProfit}
        />
        <KpiCard
          title="Total Costs"
          value={formatCurrency(totalCost)}
          change=""
          changePositive={false}
        />
      </section>

      {/* Chart Placeholder */}
      <div className="rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">Monthly Earnings</h3>
        <div className="h-56 flex items-center justify-center text-gray-500">
          {/* Later: Replace with chart.js or recharts */}
          [Chart Placeholder]
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, change, changePositive }) {
  return (
    <div className="rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg p-5 flex flex-col gap-2">
      <h3 className="text-sm text-gray-700">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {change && (
        <div className={`flex items-center gap-1 text-sm font-medium ${changePositive ? "text-green-600" : "text-red-600"}`}>
          {changePositive ? <FaArrowUp /> : <FaArrowDown />}
          {change}
        </div>
      )}
    </div>
  );
}
