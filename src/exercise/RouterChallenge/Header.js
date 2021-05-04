import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">Porão Store</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink activeClassName="active" className="nav-link" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/galery"
              end
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/contato"
              end
            >
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
