import React from "react";
import Contacte from "../../components/contacte/Contacte";
import Main from "../../components/main/Main";
import Topbar from "../../components/topbar/Topbar";

import "./home.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div id="home">
            <Topbar />
            <Main />
            <div className="about">
                <h2>Qui somme nous?</h2>
                <p>
                    Béni_Service est un service mis en place pour aider la
                    population ivoirienne dans leur demarche administrative Il
                    est donc désormais facile de commander ses documents
                    administratifs sans se déplacer grâce à Béni_Service et sa
                    plateforme en ligne. Nous garantissons la sécurité des
                    échanges et de votre identité sur internet
                </p>
            </div>
            <h1 id="service" className="heading">
                <span className="span">Nos</span> Services
            </h1>
            <div id="service" className="team">
                <div className="box-container">
                    <div className="box">
                        <h2>Extrait de naissance</h2>

                        <p>
                            Faîtes vos demandes d'extrait d'acte de naissance et
                            l'obtenir en Cinq (05) jours ouvrés maximum lorsque
                            la demande se fait dans une Mairie et en Dix (10)
                            jours ouvrés maximum lorsque la demande se fait dans
                            une Sous-Préfecture .
                        </p>
                        <div id="contact-btn">
                            <Link to="Demande_Extrait">
                                <p className="btn">demander</p>
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <h2>certificat de nationalité</h2>

                        <p>
                            Faîtes vos demandes de certificat de nationalité et
                            l'obtenir en Dix (10) jours ouvrés maximum.
                        </p>

                        <div id="contact-btn">
                            <Link to="Demande_CasierJudiciaire">
                                <p className="btn">demander</p>
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <h2>casier judiciaire</h2>

                        <p>
                            Faîtes vos demandes de casier judiciaire et
                            obtener le en Dix (10) jours ouvrés maximum.
                        </p>

                        <div id="contact-btn">
                            <Link to="Demande_CasierJudiciaire">
                                <p className="btn">demander</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Contacte />
        </div>
    );
}

export default Home;
