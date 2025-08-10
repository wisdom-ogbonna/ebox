import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useProducts } from "../context/ProductsContext"; // import context

function CreateProductModal({ onClose }) {
  const { addProduct } = useProducts(); // get addProduct from context
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    price: "",
    stock: "",
    image: null,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a product object
    const newProduct = {
      ...formData,
      id: Date.now(), // unique ID
      image: imagePreview, // store preview URL for display
    };

    addProduct(newProduct); // add to context
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl relative max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-3xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4">Create New Product</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., Bluetooth Headset"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., High-quality Bluetooth headset."
              required
            />
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium">Product Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              required
            >
              <option value="">Select Type</option>
              <option value="physical">Physical</option>
              <option value="digital">Digital</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., 29.99"
              step="0.01"
              required
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="e.g., 100"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium">Product Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            {imagePreview && (
              <div className="mt-2">
                <img
                  src={imagePreview}
                  alt="Product Preview"
                  className="w-full h-auto rounded"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black flex items-center gap-1.5 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm"
            >
              <FaPlus className="inline" />
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProductModal;