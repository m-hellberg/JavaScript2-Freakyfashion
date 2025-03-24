import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Products from "../pages/Admin/Products";
import NewProduct from "../pages/Admin/NewProduct";

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<NewProduct />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
