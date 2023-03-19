import React from "react";
import Contacte from "../../components/contacte/Contacte";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";
import Topbar from "../../components/topbar/Topbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
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
                    Lorem i Voluptatibus magnam veric quo et ad, corrupti veam
                    inventore culpa error mollitia, recusandae possimus facilis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis in sequi dolorem eligendi dolores temporibus
                    dolore atque alias consequuntur fuga odio mollitia suscipit
                    natus minima consequatur ducimus possimus, odit pariatur?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dicta dolore qu
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dicta dolore qu
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nisi dicta dolore qu
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
