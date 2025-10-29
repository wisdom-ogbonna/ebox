import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BuyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [buyData, setBuyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/products/${id}/buy`)
      .then((res) => res.json())
      .then((data) => {
        setBuyData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product purchase info.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading purchase details...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600">
        {error}
        <button
          onClick={() => navigate(-1)}
          className="block mx-auto mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const { message, product, payment_link } = buyData || {};

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        {message || "Proceed to purchase"}
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        {/* Product Image */}
        {product?.image && (
          <img
            src={`http://127.0.0.1:8000/storage/${product.image}`}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
        )}

        {/* Product Details */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          {product?.name}
        </h2>
        <p className="text-gray-600 mb-4">{product?.description}</p>

        <div className="flex justify-between items-center mb-3">
          <span
            className={`px-3 py-1 text-xs rounded-full capitalize ${
              product?.type === "physical"
                ? "bg-blue-100 text-blue-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {product?.type}
          </span>
          <span className="text-2xl font-bold text-gray-900">${product?.price}</span>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          Stock: {product?.stock_quantity}
        </p>

        <p className="text-xs text-gray-400 mb-4">
          Added: {new Date(product?.created_at).toLocaleDateString()}
        </p>

        {/* Proceed Button */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Back
          </button>

          <a
            href={payment_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Proceed to Pay
          </a>
        </div>
      </div>
    </div>
  );
}
