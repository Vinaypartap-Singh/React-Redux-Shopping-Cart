import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryProduct } from "../store/categorySlice";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function SingleCategory() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.category);
  const finalData = catData.data.products;
  console.log(name);
  console.log(finalData);

  useEffect(() => {
    dispatch(categoryProduct(name));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {finalData?.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
}
