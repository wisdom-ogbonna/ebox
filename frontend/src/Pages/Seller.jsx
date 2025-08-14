// Seller.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Seller() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "physical",
    price: "",
    stock_quantity: ""
  });
  const [loading, setLoading] = useState(false);

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(res.data.data || []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/products",
        formData
      );
      alert(res.data.message);
      setFormData({
        name: "",
        description: "",
        type: "physical",
        price: "",
        stock_quantity: ""
      });
      fetchProducts();
    } catch (err) {
      console.error("Error creating product:", err);
      alert("Failed to create product");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h2>Seller Dashboard</h2>

      {/* Create Product Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "10px",
          marginBottom: "20px",
          background: "#f5f5f5",
          padding: "15px",
          borderRadius: "8px"
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
          Add Product
        </button>
      </form>

      {/* Products List */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div>
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {products.map((p) => (
                <li
                  key={p.id}
                  style={{
                    background: "#fff",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "6px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                  }}
                >
                  <h4>{p.name}</h4>
                  <p>{p.description}</p>
                  <p>Type: {p.type}</p>
                  <p>Price: ${p.price}</p>
                  <p>Stock: {p.stock_quantity}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
