import React from "react";
import { Livraison } from "../../data";

export default function Certificat2({ nextStep, prevStep, values }) {
    // send form details
    
    
    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    <div className="content">
                        <div className="input-fields">
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

                            <label className="input-line full-width">
                                Lieu de livraison
                                <select
                                    name="Nombre_de_copie"
                                    className="input-line full-width"
                                >
                                    {Livraison.map((item, index) => (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="control">
                            <div>
                                <button onClick={prevStep} className=" btn">
                                    precedent
                                </button>
                                <button onClick={nextStep} className=" btn">
                                    envoyer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
