import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import foto from "./img/contato.jpg";
import "./css/Contato.css";
import Head from "./Head";

const Contatos = () => {
  return (
    <div>
      <Header />
      <section className="contato-container animeLeft">
        <Head
          title={"Porão Store | Contato"}
          description={`Entre em contato conosco e peça já o seu produto.`}
        />
        <img className="contato-img" src={foto} alt="máquina de escrever" />

        <div>
          <nav className="contato-dados">
            <h1>Entre em contato conosco</h1>
            <ul>
              <li>contato@basement.live</li>
              <li>+55 11 4002-8922</li>
              <li>Rua Heróis do Baseado, 420, São Paulo - SP</li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contatos;
