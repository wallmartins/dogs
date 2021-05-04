import React from "react";

const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

const ExerciseSix = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: "capitalize" }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor, index) => (
          <li key={index}>{cor}</li>
        ))}
      </ul>
    </form>
  );
};

export default ExerciseSix;
