import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const cartLength = useSelector((state) => state.cart.cart);
  return (
    <div>
      <header>
        <div className="brand">
          <b>Shopping Cart</b>
        </div>

        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart {cartLength.length}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
