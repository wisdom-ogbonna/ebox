// Seller.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import EboxzLogo from "../Components/EboxzLogo";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "physical",
    price: "",
    stock_quantity: ""
  });
  const [imagePreview, setImagePreview] = useState(null);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const res = await axios.post("http://127.0.0.1:8000/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(res.data.message);
      setFormData({
        name: "",
        description: "",
        type: "physical",
        price: "",
        stock_quantity: ""
      });
      setImagePreview(null);
      fetchProducts();
    } catch (err) {
      console.error("Error creating product:", err);
      alert("Failed to create product");
    }
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <div className="flex flex-col items-center m-0.5">
        <EboxzLogo className="w-52 h-32" />
      </div>
      <h2 className="text-2xl font-bold">Add Product Dashboard</h2>

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
          className="border-1 border-black p-2 rounded"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          className="border-1 border-black p-2 rounded"
          onChange={handleChange}
          required
        />
        <select
          name="type"
          value={formData.type}
          className="border-1 border-black p-2 rounded"
          onChange={handleChange}
        >
          <option className="bg-gray-100" value="physical">Physical</option>
          <option className="bg-gray-100" value="digital">Digital</option>
        </select>
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Price"
          className="border-1 border-black p-2 rounded"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          className="border-1 border-black p-2 rounded"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          id="image"
          accept=".jpg,.jpeg,.png,.gif,.webp,.bmp,.svg"
          className="border border-black p-2 rounded file:mr-4 file:py-2 file:px-4 
          file:rounded file:border-0 
          file:text-white file:bg-black 
          file:cursor-pointer"
          onChange={handleImageChange}
          required
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-2">
            <p className="text-sm text-gray-600 mb-3">Image Preview:</p>
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-1 w-40 h-40 justify-self-center object-cover border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          className="border-1 border-black p-2 rounded bg-black text-white"
        >
          Add Product
        </button>
      </form>

      <footer>
        <p className="text-sm text-gray-600">© 2025 E-Boxz. All rights reserved.</p>
      </footer>
    </div>
  );
}
