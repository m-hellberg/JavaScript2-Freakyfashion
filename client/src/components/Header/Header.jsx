import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import useCart from "../../context/useCart";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const cartCount = cartItems
    ? cartItems.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src="/images/Logo.png" alt="FreakyFashion Logo" />
          </Link>
        </div>

        <div className="search-icons-wrapper">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Sök efter en produkt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div className="icons">
            <FaHeart className="icon" />
            <Link to="/basket" className="cart-icon-container">
              <FaShoppingCart className="icon" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>

      <nav className="menu">
        <ul>
          <li>
            <a href="#">Nyheter</a>
          </li>
          <li>
            <a href="#">Topplistan</a>
          </li>
          <li>
            <a href="#">Rea</a>
          </li>
          <li>
            <a href="#">Kampanjer</a>
          </li>
          <li>
            {" "}
            <NavLink
              to="/allproducts"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Alla produkter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Om oss
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
