import { Link } from "react-router-dom";
import "./AdminLayout.css";

// Tar emot children-prop, sidans innehåll
const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>Administration</h1>
      </header>

      <div className="admin-container">
        <nav className="admin-sidebar">
          <ul>
            <li>
              <Link to="#">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/products">Produkter</Link>
            </li>
            <li>
              <Link to="#">Orderhantering</Link>
            </li>
            <li>
              <Link to="#">Analysdata</Link>
            </li>
            <li>
              <Link to="#">Inställningar</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
          </ul>
        </nav>

        {/* Dynamiskt visa innehåll*/}
        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
