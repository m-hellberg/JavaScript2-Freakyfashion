CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    brand TEXT,
    sku TEXT UNIQUE NOT NULL,
    price REAL NOT NULL,
    image TEXT,
    description TEXT,
    slug TEXT NOT NULL,
    publicationDate TEXT,
    isNew INTEGER DEFAULT 0
);

CREATE TRIGGER update_isNew_on_insert
AFTER INSERT ON products
FOR EACH ROW
BEGIN
    UPDATE products
    SET isNew = CASE 
        WHEN julianday('now') - julianday(NEW.publicationDate) <= 7 THEN 1
        ELSE 0
    END
    WHERE id = NEW.id;
END;

CREATE TRIGGER update_isNew_on_update
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
    UPDATE products
    SET isNew = CASE 
        WHEN julianday('now') - julianday(NEW.publicationDate) <= 7 THEN 1
        ELSE 0
    END
    WHERE id = NEW.id;
END;

CREATE TRIGGER update_isPopular
AFTER UPDATE OF purchasesThisMonth ON products
FOR EACH ROW
BEGIN
    UPDATE products
    SET isPopular = CASE 
        WHEN NEW.purchasesThisMonth > 300 THEN 1 
        ELSE 0 
    END
    WHERE id = NEW.id;
END;