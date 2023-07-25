import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const addCart = (data) => {
    dispatch(addToCart(data));
  };
  return (
    <div className="card">
      <img src={data.thumbnail} alt="Product image" style={{ width: "100%" }} />
      <h5>{data.title}</h5>
      <p>${data.price}</p>
      <button className="buttonAdd" onClick={() => addCart(data)}>
        Add To Cart
      </button>
    </div>
  );
}
