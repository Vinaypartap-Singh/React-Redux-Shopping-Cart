import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch("https://dummyjson.com/products");
        const data = await api.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="card-wrapper"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
}
