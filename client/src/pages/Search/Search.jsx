import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Search.css";
import NewBadge from "../../components/NewBadge/NewBadge";
import WishlistIcon from "../../components/WishlistIcon/WishlistIcon";

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  useEffect(() => {
    if (!query) return;

    fetch(`http://localhost:8000/api/search?q=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Kunde inte hämta produkter");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  if (loading) return <p>Laddar sökresultat...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="search-results-page">
      <h1>
        Hittade {results.length}{" "}
        {results.length === 1 ? "produkt" : "produkter"}
      </h1>
      <div className="search-results-container">
        {results.map((product) => (
          <div key={product.id} className="search-product-card">
            <Link to={`/products/${product.slug}`}>
              {product.isNew === 1 && <NewBadge />}
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                <WishlistIcon />
              </div>
              <h2>{product.name}</h2>
              <p className="product-brand">{product.brand}</p>
              <p className="product-price">{product.price} SEK</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
