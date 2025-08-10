import { useProducts } from "../context/ProductsContext";

export default function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">My Products</h2>
      <div className="overflow-x-auto rounded-lg backdrop-blur bg-white/30 border border-white/20 shadow-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-white/40 text-gray-800">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="backdrop-blur bg-white/20">
            {products.map((p, i) => (
              <tr key={i} className="border-b border-white/30">
                <td className="px-4 py-2">{i + 1}</td>
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">${p.price.toFixed(2)}</td>
                <td className="px-4 py-2">{p.stock}</td>
                <td className="px-4 py-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}