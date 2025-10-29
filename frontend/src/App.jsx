import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import Auth from './Pages/Auth';
import Admin from './Pages/Admin';
import Seller from './Pages/Seller';
import Buyer from './Pages/Buyer';
import AddProduct from './Pages/AddProduct';
import NotFound from './Pages/Notfound';
import Otp from './Pages/Otp';
import EarningsDashboard from './Pages/EarningsDashboard';
import ProductsPage from './Pages/ProductsPage';
import { ProductsProvider } from "./context/ProductsContext";
import BuyPage from './Pages/BuyPage';


export default function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id/buy" element={<BuyPage />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ProductsProvider>
  );
}