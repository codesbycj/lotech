import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, Home, ProductDetails } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
