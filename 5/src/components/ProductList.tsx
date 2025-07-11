import { useCart } from "../context/CartContext";
import { products } from "../types/cartType";

const ProductList = () => {
  const { addToCart, loading } = useCart();

  return (
    <div className="mb-2">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      <ul className="flex gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded flex flex-col items-center">
            <span>{product.name}</span>
            <button
              className="mt-2 bg-blue-600 hover:bg-blue-800 text-white px-3 py-1 rounded"
              disabled={loading}
              onClick={() => addToCart({ ...product, qty: 1 })}>
              Beli
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;