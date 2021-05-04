import React from "react";
import "../css/Galery.css";
import { GlobalStorage } from "../GlobalStorage";
import Header from "../Header";
import Galery from "./Galery";

const GaleryPage = () => {
  return (
    <>
      <Header />
      <GlobalStorage>
        <Galery />
      </GlobalStorage>
    </>
  );
};

export default GaleryPage;
