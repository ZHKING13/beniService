import React from "react";
import { extraitNaissance } from "../../data";
import "./userDetail.css";
const Etape2 = ({ nextStep, prevStep, values, handleChange }) => {
    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    <form className="content">
                        <div className="welcome"></div>
                        <div className="subtitle welcome">
                            merci de bien vouloir remplir le formulaire avec des
                            informations correcte
                        </div>
                        <div className="input-fields">
                            <label>
                                Numero de telephone
                                <input
                                    type="text"
                                    placeholder="ex: 0710101010"
                                    className="input-line full-width"
                                    required
                                ></input>
                            </label>
                            <label>
                                Email
                                <input
                                    type="text"
                                    placeholder="ex: jean@gmail.com"
                                    className="input-line full-width"
                                    required
                                ></input>
                            </label>
                            <label className="input-line full-width">
                                sexe
                                <select
                                    name="Nombre_de_copie"
                                    className="input-line full-width"
                                >
                                    <option value="Masculin">Masculin</option>
                                    <option value="Féminin">Féminin</option>
                                </select>
                            </label>

                            <label className="input-line full-width">
                                Nombre de copie
                                <select
                                    name="Nombre_de_copie"
                                    className="input-line full-width"
                                >
                                    <option value="#">...</option>
                                    <option value="01"> 01 (5.500 FCFA)</option>
                                    <option value="02">02 (8.500 FCFA)</option>
                                    <option value="03">03 (11.500 FCFA)</option>
                                    <option value="04">04 (14.500 FCFA)</option>
                                    <option value="05">05 (17.500 FCFA)</option>
                                    <option value="06">06 (20.500 FCFA)</option>
                                    <option value="07">07 (23.500 FCFA)</option>
                                    <option value="08">08 (27.500 FCFA)</option>
                                    <option value="09">09 (30.500 FCFA)</option>
                                    <option value="10">10 (33.500 FCFA)</option>
                                </select>
                            </label>
                        </div>
                        <div className="control">
                            <div>
                                <button onClick={prevStep} className=" btn">
                                    precedent
                                </button>
                            </div>
                            <div>
                                <button onClick={nextStep} className=" btn">
                                    envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Etape2;
