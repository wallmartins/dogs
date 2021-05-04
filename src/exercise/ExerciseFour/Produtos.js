import React from "react";
import { GlobalContext } from "./GlobalStorage";

const Produtos = () => {
  const { dados } = React.useContext(GlobalContext);

  if (dados === null) return null;

  return (
    <div>
      Produtos:{" "}
      {dados.map((produto) => (
        <li style={{ marginTop: "1rem" }} key={produto.id}>
          {produto.nome}
        </li>
      ))}
    </div>
  );
};

export default Produtos;
