import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cartLength = useSelector((state) => state.cart.cart);
  const navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Cart",
      link: "/cart",
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
          </ul>
        </nav>
      </header>
    </div>
  );
}
