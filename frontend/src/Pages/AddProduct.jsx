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
    currency: "NGN",
    stock_quantity: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [products, setProducts] = useState([]);
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
        currency: "NGN",
        stock_quantity: "",
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
      <div className="flex flex-col items-center mb-3">
        <EboxzLogo className="w-52 h-32" />
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">Add Product Dashboard</h2>

      {/* Create Product Form */}
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-gray-100 p-5 rounded-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          className="border border-black p-2 rounded w-full"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          className="border border-black p-2 rounded w-full"
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={formData.type}
          className="border border-black p-2 rounded w-full"
          onChange={handleChange}
        >
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <div className="flex flex-col sm:flex-row">
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            className="border border-black p-2 rounded flex-1 mb-4 sm:mb-0 sm:mr-4"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <select
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="border border-black p-2 rounded flex-1 sm:max-w-[40%]"
          >
            <option value="NGN">Naira (₦)</option>
            <option value="USD">US Dollar ($)</option>
            <option value="GBP">British Pound (£)</option>
            <option value="EUR">Euro (€)</option>
            <option value="GHS">Ghanaian Cedi (₵)</option>
            <option value="KES">Kenyan Shilling (KSh)</option>
            <option value="ZAR">South African Rand (R)</option>
            <option value="XOF">West African CFA Franc (CFA)</option>
            <option value="XAF">Central African CFA Franc (FCFA)</option>
            <option value="UGX">Ugandan Shilling (USh)</option>
            <option value="TZS">Tanzanian Shilling (TSh)</option>
            <option value="ZMW">Zambian Kwacha (ZK)</option>
            <option value="MWK">Malawian Kwacha (MK)</option>
            <option value="RWF">Rwandan Franc (FRw)</option>
            <option value="SLL">Sierra Leonean Leone (Le)</option>
            <option value="MZN">Mozambican Metical (MT)</option>
            <option value="BIF">Burundian Franc (FBu)</option>
            <option value="GMD">Gambian Dalasi (D)</option>
            <option value="LRD">Liberian Dollar (L$)</option>
            <option value="GNF">Guinean Franc (FG)</option>
            <option value="CVE">Cape Verdean Escudo (CVE$)</option>
            <option value="STD">Sao Tome and Principe Dobra (Db)</option>
            <option value="XCD">East Caribbean Dollar (EC$)</option>
            <option value="SCR">Seychellois Rupee (₨)</option>
            <option value="NAD">Namibian Dollar (N$)</option>
            <option value="MAD">Moroccan Dirham (د.م.)</option>
            <option value="EGP">Egyptian Pound (£)</option>
            <option value="ETB">Ethiopian Birr (Br)</option>
            <option value="DZD">Algerian Dinar (دج)</option>
            <option value="TND">Tunisian Dinar (د.ت)</option>
          </select>
        </div>

        <input
          type="number"
          name="stock_quantity"
          placeholder="Stock Quantity"
          className="border border-black p-2 rounded w-full"
          value={formData.stock_quantity}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png,.gif,.webp,.bmp,.svg"
          className="border border-black p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-white file:bg-black file:cursor-pointer"
          onChange={handleImageChange}
          required
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-2 flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-40 h-40 object-cover border rounded"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="border border-black p-2 rounded bg-black text-white hover:bg-gray-800"
        >
          {loading ? "Processing..." : "Add Product"}
        </button>
      </form>

      <footer className="mt-5 text-center">
        <p className="text-sm text-gray-600">
          © 2025 E-Boxz. All rights reserved.
        </p>
      </footer>
    </div>
  );
}