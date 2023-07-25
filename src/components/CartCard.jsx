import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/cartSlice";

export default function CartCard({ data }) {
  const dispatch = useDispatch();
  const addCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const qtyInc = (id) => {
    dispatch(increaseQuantity(id));
  };

  const qtyDec = (id) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "20px",
        alignItems: "center",
      }}
    >
      <img src={data.thumbnail} alt="Product image" style={{ width: "100%" }} />
      <h5>Name: {data.title}</h5>
      <p>Price: ${data.price}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => {
            qtyDec(data.id);
          }}
        >
          -
        </button>
        <p>Quantity {data.quantity} </p>
        <button onClick={() => qtyInc(data.id)}>+</button>
      </div>
      <button
        className="buttonAdd"
        style={{ width: "100%", marginTop: "20px" }}
        onClick={() => addCart(data.id)}
      >
        Remove
      </button>
    </div>
  );
}
