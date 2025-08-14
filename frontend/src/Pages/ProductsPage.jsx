import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            {/* Product Title */}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p>

            {/* Product Info */}
            <div className="flex justify-between items-center mb-3">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  product.type === "physical"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {product.type}
              </span>
              <span className="font-bold text-lg">${product.price}</span>
            </div>

            {/* Stock */}
            <p className="text-sm text-gray-500">
              Stock: {product.stock_quantity}
            </p>

            {/* Created date */}
            <p className="text-xs text-gray-400 mt-2">
              Added: {new Date(product.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
