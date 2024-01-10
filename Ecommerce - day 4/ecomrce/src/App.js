// 4 nov
import "./App.css";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartPage } from "./Pages/CartPage/CartPage";

function App() {
  return (
  <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/mockman" element={<MockMan/>}>
      <Route path="/product-listing" element={<ProductListingPage/>}>
      <Route path="/cart-page" element={<CartPage/>}>
      <Route path="/wishlist-page" element={<WishListPage/>}>
    </Routes>
    <Toaster position="top-center" toastOptions={{className: "toast", duration: 2000}}/>
  </div>
  );
}

export default App;
