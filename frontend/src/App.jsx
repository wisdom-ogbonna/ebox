import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Auth from './Pages/Auth';
import Admin from './Pages/Admin';
import Seller from './Pages/Seller';
import Buyer from './Pages/Buyer';
import NotFound from './Pages/Notfound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
