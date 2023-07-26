import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const cartLength = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Categories",
      link: "/categories",
    },
  ];
  return (
    <div>
      <header>
        <div className="brand">
          <b>Shopping Cart</b>
        </div>

        <nav>
          <ul>
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={`${link}`}>{name}</Link>
                </li>
              );
            })}
            <button onClick={() => navigate("/cart")}>
              Cart {cartLength.length}
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
