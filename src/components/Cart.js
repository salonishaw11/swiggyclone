import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const itemsList = useSelector((store) => store.cart.items);
  return (
    <div className="font-bold text-lg m-4 text-center">
      <h1>Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {itemsList.length === 0 && <h1>Please add items to your cart</h1>}
        <ItemList items={itemsList} />
      </div>
    </div>
  );
};
export default Cart;
