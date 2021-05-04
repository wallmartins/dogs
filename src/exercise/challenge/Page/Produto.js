import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      <h1>{nome}</h1>
      <ul>
        {propriedades.map((prop) => (
          <li key={prop}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
