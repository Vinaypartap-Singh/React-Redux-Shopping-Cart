import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoryProducts() {
  const [categories, setCategories] = useState([]);

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

  if (categories.length === 0) {
    return <div>Loading categories...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "30vh",
      }}
    >
      {categories.map((category, index) => (
        <Link
          to={`/category/${category}`}
          key={index}
          style={{
            color: "white",
            textDecoration: "underline",
            textTransform: "capitalize",
          }}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
