// Cart.tsx
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

import loadingLottie from "../assets/animations/loadinggif.json";
import foodLottie from "../assets/animations/food.json";

import Lottie from "lottie-react";

const Cart = () => {
  const { cart, loading } = useCart();

  return (
    <div className="w-full max-w-md mx-auto mt-2">
        <h2 className="text-xl font-bold mb-2">Makanan :</h2>
        {loading && 
        <div className="mb-2 text-blue-600">
            <Lottie animationData={loadingLottie} loop={true} style={{ width: 100, height: 100 }} />
        </div>}
        {cart.length === 0 ? (
            <div className="text-gray-500">
                <Lottie animationData={foodLottie} loop={true} style={{ width: 100, height: 100 }} />
                Makanan Kosong.
            </div>
        ) : (
            <div>
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            </div>
        )}
    </div>
  );
};

export default Cart;