import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ScrollToTop from "./components/ScrollTop/ScrollToTop.jsx";
import Profile from "./pages/Profile.jsx";
import Payment from "./pages/Payment.jsx";
import History from "./pages/History.jsx";
import AddToCart from "./pages/AddToCart.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ProductPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
