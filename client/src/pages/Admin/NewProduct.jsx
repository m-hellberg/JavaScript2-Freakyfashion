import { useState } from "react";
import "./NewProduct.css";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    brand: "",
    sku: "",
    price: "",
    publicationDate: "",
  });

  // Hantera input-ändringar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Det gick inte att lägga till produkten");
    }
    window.location.href = "/admin/products";
  };

  return (
    <div className="new-product">
      <h2>Ny produkt</h2>
      <form onSubmit={handleSubmit} className="new-product-form">
        <div className="form-field">
          <label htmlFor="new-product-name" className="new-product-label">
            Namn
          </label>
          <input
            type="text"
            id="new-product-name"
            name="name"
            className="new-product-input"
            placeholder="Ange namn"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={25}
          />
        </div>

        <div className="form-field">
          <label
            htmlFor="new-product-description"
            className="new-product-label"
          >
            Beskrivning
          </label>
          <textarea
            id="new-product-description"
            name="description"
            className="new-product-textarea"
            placeholder="Ange beskrivning"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-product-imageUrl" className="new-product-label">
            Bild
          </label>
          <input
            type="text"
            id="new-product-imageUrl"
            name="imageUrl"
            className="new-product-input"
            placeholder="Ange URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-product-brand" className="new-product-label">
            Märke
          </label>
          <input
            type="text"
            id="new-product-brand"
            name="brand"
            className="new-product-input"
            placeholder="Ange märke"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-product-sku" className="new-product-label">
            SKU
          </label>
          <input
            type="text"
            id="new-product-sku"
            name="sku"
            className="new-product-input"
            placeholder="Ange SKU"
            value={formData.sku}
            onChange={handleChange}
            required
            pattern="^[A-Z]{3}\d{3}$"
            title="SKU måste följa formatet XXXYYY (t.ex. ABC123)"
          />
        </div>

        <div className="form-field">
          <label htmlFor="new-product-price" className="new-product-label">
            Pris
          </label>
          <input
            type="number"
            id="new-product-price"
            name="price"
            className="new-product-input"
            placeholder="Ange pris"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label
            htmlFor="new-product-publicationDate"
            className="new-product-label"
          >
            Publiceringsdatum
          </label>
          <input
            type="date"
            id="new-product-publicationDate"
            name="publicationDate"
            className="new-product-input"
            value={formData.publicationDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="add-new-button">
          Lägg till
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
