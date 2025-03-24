import CartTable from "../../components/CartTable/CartTable";
import { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  return (
    <div>
      <h1 className="checkout-title">KASSAN</h1>
      <CartTable />

      <div className="checkout-form">
        <h2>Kunduppgifter</h2>
        <form>
          <div className="name-fields">
            <div className="input-field">
              <label htmlFor="first-name">Förnamn</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Ange förnamn"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="last-name">Efternamn</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Ange efternamn"
                required
              />
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">E-post</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ange e-post"
              required
            />
          </div>

          {/* Adress-sektionen */}
          <div className="address-section">
            <h3>Adress</h3>
            <div className="input-field">
              <label htmlFor="street">Gata</label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Ange gata"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="postal-code">Postnummer</label>
              <input
                type="text"
                id="postal-code"
                name="postal-code"
                placeholder="Ange postnummer"
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="city">Stad</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Ange stad"
                required
              />
            </div>
          </div>

          <div className="newsletter-checkbox">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={subscribeNewsletter}
              onChange={() => setSubscribeNewsletter(!subscribeNewsletter)}
            />
            <label htmlFor="newsletter">Jag vill ta emot nyhetsbrev</label>
          </div>

          <div className="submit-button">
            <button type="submit">KÖP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
