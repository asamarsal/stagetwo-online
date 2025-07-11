import { LucideTrash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

type Item = {
  id: number;
  name: string;
  qty: number;
};

const CartItem = ({ id, name, qty }: Item) => {
  const { updateStok, removeItem, loading } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-2">
      <span className="w-32">{name}</span>
      <input
        type="number"
        min={1}
        value={qty}
        disabled={loading}
        onChange={(e) => updateStok(id, Number(e.target.value))}
        className="border rounded px-4 w-24 h-8 "
      />
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        disabled={loading}
        onClick={() => removeItem(id)}>
        <LucideTrash2 className="w-6 h-6" onClick={() => removeItem(id)}/>
      </button>
    </div>
  );
};

export default CartItem;