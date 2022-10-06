import { Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";

import CategoryManagement from "./pages/CategoryManagement";
import ProductMaNagement from "./pages/ProductManagement";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/CategoryManagement" element={<CategoryManagement />} />
        <Route path="/ProductManagement" element={<ProductMaNagement />} />
        <Route path="ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
