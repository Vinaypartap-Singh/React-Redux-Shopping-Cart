import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  // Check if cartItems is not an array or is empty
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your Cart</h1>
      {cartItems.map((data) => (
        <CartCard data={data} key={data.id} />
      ))}
    </div>
  );
}
