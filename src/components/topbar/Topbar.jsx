import React, { useState } from 'react';
import "./topbar.css";
import { Link } from 'react-router-dom';

function Topbar() {
  const [ShowNave, setShowNave] = useState(true);

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
              <Link to={"/Demande_Extrait"}>Acte de naissance</Link>
              <Link to={"/Demande_Certificat"}>Certificat de nationalité</Link>
              <Link to={"/Demande_CasierJudiciaire"}>
                  Casier judiciaire
              </Link>
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