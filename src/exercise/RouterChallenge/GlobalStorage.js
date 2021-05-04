import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    async function fetchDados() {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const json = await response.json();
      setDados(json);
    }

    fetchDados();
  }, []);

  return (
    <GlobalContext.Provider value={{ dados }}>
      {children}
    </GlobalContext.Provider>
  );
};
