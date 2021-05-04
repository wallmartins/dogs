import React from "react";
import { GlobalContext } from "../GlobalStorage";
import Notebook from "./Notebook";
import Smartphone from "./Smartphone";
import Head from "../Head";
import Smartspeaker from "./Smartspeaker";
import Smartwatch from "./Smartwatch";
import Camera from "./Camera";
import Tablet from "./Tablet";
import "../css/Product.css";

const Product = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;

  return (
    <div className="animeLeft">
      <Head
        title={"Porão Store | Home"}
        description={`Essa é a home page do site da Porão Store.`}
      />

      <section>
        <nav className="product-nav">
          <ul>
            <li>Notebook</li>
            <li>Smartphone</li>
            <li>Tablet</li>
            <li>Smartspeaker</li>
            <li>Smartwatch</li>
            <li>Câmera</li>
          </ul>
        </nav>
      </section>
      <section className="product-container">
        <div className="product-content">
          <Notebook />
        </div>

        <div className="product-content">
          <Smartphone />
        </div>

        <div className="product-content">
          <Tablet />
        </div>

        <div className="product-content">
          <Smartspeaker />
        </div>

        <div className="product-content">
          <Smartwatch />
        </div>

        <div className="product-content">
          <Camera />
        </div>
      </section>
    </div>
  );
};

export default Product;
