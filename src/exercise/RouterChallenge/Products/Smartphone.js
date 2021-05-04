import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalStorage";

const Smartphone = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      {global.dados
        .filter((dado) => {
          return dado.nome === "Smartphone";
        })
        .map((n) => (
          <div key={n.id}>
            <Link to={`/galery/${n.id}`}>
              <img className="product-img" src={n.fotos[0].src} alt="" />
            </Link>
          </div>
        ))}
    </>
  );
};

export default Smartphone;
