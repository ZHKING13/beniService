import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./topbar.css";

function Topbar() {
  const [ShowNave, setShowNave] = useState(true);
  const { isAuthentificated } = useSelector((state) => state.user);

  return (
      <header className="header">
          <div
              id="menu-btn"
              onClick={() => setShowNave(!ShowNave)}
              className="fas fa-bars"
          ></div>

          <p className="logo">
              <span>Beni</span>Service
          </p>

          <nav className="navbar" id={ShowNave ? "hiden" : "active"}>
              <a href="#home">Acte de naissance</a>
              <a href="#contacte">Certificat de nationalité</a>
              <a href="#about">Casier judiciaire</a>
          </nav>

          <div id="contact-btn">
              <a href="#contacte" className="btn">
                  Contacte
              </a>
          </div>
      </header>
  );
};

export default Topbar