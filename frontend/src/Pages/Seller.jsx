import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaClipboardList } from "react-icons/fa";
import CreateProductModal from "../Components/CreateProductModal";
import { useProducts } from "../context/ProductsContext";

export default function Seller() {
  const [showModal, setShowModal] = useState(false);
  const { products, addProduct } = useProducts();
  const navigate = useNavigate();

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
          //onClick={() => setShowModal(true)}
          onClick={() => navigate("/addproduct")}

        />
        <GlassCard
          icon={<FaClipboardList />}
          title="View Products"
          desc="See all products you have added."
          onClick={() => navigate("/products")}
        />
      </section>

      {/* Modal */}
      {/*{showModal && (
        <CreateProductModal
          onClose={() => setShowModal(false)}
          onCreate={addProduct}
        />
      )}*/}
    </div>
  );
}

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
