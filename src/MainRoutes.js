import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Navbar";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Products/ProductDetails";
import AuthContextProvider from "./context/AuthContext";
import AddProduct from "./Components/Products/AddProduct";
import EditProducts from "./Components/Products/EditProducts";
import ProductsContextProvider from "./context/ProductContext";
import Auth from "./Components/Auth/Auth";
import BuyProducts from "./Components/Buy/BuyProducts";
import Footer from "./Components/Footer/Footer";
import Buy from "./Components/Buy/Buy";
const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/addProduct" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProducts />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/buyProducts" element={<BuyProducts />} />
            <Route path='/buy' element={<Buy/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
};

export default MainRoutes;
