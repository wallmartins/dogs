import React from "react";
import Footer from "./Footer";
import { GlobalStorage } from "./GlobalStorage";
import Header from "./Header";
import Product from "./Products/Product";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <GlobalStorage>
        <Product />
      </GlobalStorage>

      <Footer />
    </div>
  );
};

export default Home;
