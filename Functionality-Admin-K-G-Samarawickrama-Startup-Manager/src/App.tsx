import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminDataStore } from './admin/AdminDataStore';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import Products from './admin/pages/Products';
import ProductForm from './admin/pages/ProductForm';
import Orders from './admin/pages/Orders';
import OrderDetails from './admin/pages/OrderDetails';
import Tailoring from './admin/pages/Tailoring';
import Customers from './admin/pages/Customers';
import Settings from './admin/pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <AdminDataStore>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/products/add" element={<ProductForm />} />
          <Route path="/admin/products/:id/edit" element={<ProductForm />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/orders/:id" element={<OrderDetails />} />
          <Route path="/admin/tailoring" element={<Tailoring />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </AdminDataStore>
    </BrowserRouter>
  );
}
