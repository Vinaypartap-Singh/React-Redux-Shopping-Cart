import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./pages/home";
import CategoryProducts from "./components/categoryProducts";
import SingleCategory from "./components/SingleCategory";
import Products from "./components/products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<CategoryProducts />} />
        <Route path="/category/:name" element={<SingleCategory />} />
      </Routes>
    </>
  );
}

export default App;
