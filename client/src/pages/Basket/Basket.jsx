import CartTable from "../../components/CartTable/CartTable";
import { Link } from "react-router-dom";
import "./Basket.css";

const Basket = () => {
  return (
    <div>
      <h1 className="basket-title">VARUKORGEN</h1>
      <CartTable />

      <div className="to-checkout-button-container">
        <Link to="/checkout">
          <button className="to-checkout-button">TILL KASSAN</button>
        </Link>
      </div>
    </div>
  );
};

export default Basket;
