import React from "react";
import { GlobalContext } from "./GlobalStorage";

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <button style={{ marginTop: "2rem" }} onClick={limparDados}>
      Limpar
    </button>
  );
};

export default Limpar;
