import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalStorage";

const Camera = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      {global.dados
        .filter((dado) => {
          return dado.nome === "Câmera";
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

export default Camera;
