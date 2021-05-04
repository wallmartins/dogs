import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalStorage";
import Head from "../Head";

const Galery = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;

  return (
    <div>
      <section className="galery-container">
        {global.dados.map((produto) => (
          <div key={produto.id} className="card-galery animeLeft">
            <Head
              title={"Porão Store | Galeria"}
              description={`Essa é a página de galeria de produtos do site da Porão Store.`}
            />
            <Link to={`/galery/${produto.id}`}>
              <div
                className="img-card"
                style={{
                  background: `url(${produto.fotos[0].src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "400px",
                  width: "400px",
                }}
              ></div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Galery;
