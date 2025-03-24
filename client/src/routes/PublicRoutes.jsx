import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Search from "../pages/Search/Search";
import Basket from "../pages/Basket/Basket";
import Checkout from "../pages/Checkout/Checkout";
import AllProducts from "../pages/AllProducts/AllProducts";
import { CartProvider } from "../context/CartContext";
import "../App.css";

const PublicRoutes = () => {
  return (
    <CartProvider>
      <PublicLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </PublicLayout>
    </CartProvider>
  );
};

export default PublicRoutes;
