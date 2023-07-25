import React, { useEffect } from "react";
import Card from "../components/Card";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const product = products.products;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading Data</div>;
  }

  return (
    <div
      className="card-wrapper"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {product?.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}
