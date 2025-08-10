// src/Pages/Products.jsx
import { useState } from "react";
import { useProducts } from "../context/ProductsContext";
import CreateProductModal from "../components/CreateProductsModal";

export default function Products() {
  const { products } = useProducts();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Products</h1>

      {/* If no products */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-lg">
          <p className="text-gray-500 mb-4">You have no products yet.</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            + Click here to add new
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 flex flex-col"
            >
              {product.image && (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
              )}
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-500">${product.price}</p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-auto text-blue-600 hover:underline text-sm"
              >
                See More
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Create product modal */}
      {showCreateModal && (
        <CreateProductModal onClose={() => setShowCreateModal(false)} />
      )}

      {/* Product details modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {selectedProduct.image && (
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-60 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-xl font-bold mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-gray-600 mb-2">
              <strong>Type:</strong> {selectedProduct.type}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Stock:</strong> {selectedProduct.stock}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
