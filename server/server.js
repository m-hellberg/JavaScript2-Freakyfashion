const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");

const port = 8000;
const db = new Database("./db/freakyfashion.db", { verbose: console.log });

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json());


app.get("/api/products", (req, res) => {
    try {
        const products = db.prepare("SELECT * FROM products WHERE isPopular = 1").all();
        res.json(products);
    } catch (error) {
        console.error("Fel vid hämtning av produkter:", error);
        res.status(500).json({ error: "Serverfel vid hämtning av produkter" });
    }
});

app.get("/api/products/:slug", (req, res) => {
    try {
        const { slug } = req.params;
        const product = db.prepare("SELECT * FROM products WHERE slug = ?").get(slug);

        if (!product) {
            return res.status(404).json({ message: "Produkten hittades inte" });
        }

        res.json(product);
    } catch (error) {
        console.error("Fel vid hämtning av produkt:", error);
        res.status(500).json({ error: "Serverfel vid hämtning av produkt" });
    }
});

app.get("/api/search", (req, res) => {
    try {
        const searchQuery = req.query.q; // Hämtar söktermen från query-strängen
        if (!searchQuery) {
            return res.status(400).json({ error: "Ingen sökterm angiven" });
        }

        const products = db.prepare("SELECT * FROM products WHERE name LIKE ?").all(`%${searchQuery}%`);
        res.json(products);
    } catch (error) {
        console.error("Fel vid sökning:", error);
        res.status(500).json({ error: "Serverfel vid sökning av produkter" });
    }
});

app.get("/api/all-products", (req, res) => {
    try {
        const products = db.prepare("SELECT * FROM products").all();
        res.json(products);
    } catch (error) {
        console.error("Fel vid hämtning av alla produkter:", error);
        res.status(500).json({ error: "Serverfel vid hämtning av alla produkter" });
    }
});

app.delete("/api/products/:id", (req, res) => {
    try {
        const { id } = req.params;
        const deleteStmt = db.prepare("DELETE FROM products WHERE id = ?");
        const result = deleteStmt.run(id);

        if (result.changes === 0) {
            return res.status(404).json({ error: "Produkten hittades inte" });
        }

        res.json({ message: "Produkten har raderats" });
    } catch (error) {
        console.error("Fel vid radering av produkt:", error);
        res.status(500).json({ error: "Serverfel vid radering av produkt" });
    }
});

const generateSlug = (name) => {
    return name
        .toLowerCase()
        .replace(/å/g, "a")
        .replace(/ä/g, "a")
        .replace(/ö/g, "o")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
};

app.post("/api/products", (req, res) => {
    try {
        const { name, description, imageUrl, brand, sku, price, publicationDate } = req.body;
        const slug = generateSlug(name); 

        const purchasesThisMonth = Math.floor(Math.random() * 501);

        const isPopular = purchasesThisMonth > 300 ? 1 : 0;

        const insertStmt = db.prepare(
            "INSERT INTO products (name, slug, description, image, brand, sku, price, publicationDate, purchasesThisMonth, isPopular) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        );

        const result = insertStmt.run(name, slug, description, imageUrl, brand, sku, price, publicationDate, purchasesThisMonth, isPopular);

        res.status(201).json({ message: "Produkt tillagd", productId: result.lastInsertRowid, slug });
    } catch (error) {
        console.error("Fel vid tillägg av produkt:", error);
        res.status(500).json({ error: "Serverfel vid tillägg av produkt" });
    }
});


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})