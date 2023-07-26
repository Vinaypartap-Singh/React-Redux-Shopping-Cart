import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Card from "./Card";
import { categoryProduct } from "../store/categorySlice";

export default function Products() {
  const { data: allProducts, status: allProductStatus } = useSelector(
    (state) => state.product
  );

  const [categoryBtn, setCategoryBtn] = useState("smartphones");
  const [categories, setCategories] = useState([]);
  const [filteredItems, setFIlteredItems] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(categoryProduct(categoryBtn));
  }, [dispatch]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setFIlteredItems(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateCategory = (category) => {
    const fetProducts = fetch(
      `https://dummyjson.com/products/category/${category}`
    )
      .then((res) => res.json())
      .then((res) => setFIlteredItems(res.products));
  };

  if (categories.length === 0) {
    return <div>Loading categories...</div>;
  }

  if (allProductStatus === "loading") {
    return <h1>Loading Products</h1>;
  }

  return (
    <>
      <h1>{categoryBtn === "all" ? "All Products" : "Products"}</h1>
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            color: "white",
            textDecoration: "underline",
            textTransform: "capitalize",
          }}
          onClick={() => setFIlteredItems(allProducts.products)}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => updateCategory(category)}
            key={index}
            style={{
              color: "white",
              textDecoration: "underline",
              textTransform: "capitalize",
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="filter">
        {/* Check if filteredProducts is not empty */}
        {filteredItems.length > 0 ? (
          filteredItems.map((data) => <Card data={data} key={data.id} />)
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </>
  );
}
