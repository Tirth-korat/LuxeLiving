import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop1 from "../Main/Shop";
import Home from "../Main/Home";
import { MyContextProvider } from "./MyContext";
import About from "../Main/About";
import Services from "../Main/Services";
import Blog from "../Main/Blog";
import Contact from "../Main/Contact";
import Cart from "../Main/Cart";
import Checkout from "../Main/Checkout";
import Thankyou from "../Main/Thankyou";
const RRD = () => {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default RRD;
