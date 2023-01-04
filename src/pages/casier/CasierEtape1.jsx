import React from "react";
import { extraitNaissance } from "../../data";

export default function CasierEtape1({
    nextStep,
    handleChange,
    handleFileChange,
    values,
}) {
    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    <div className="content">
                        <div className="welcome">details personnel</div>
                        <div className="subtitle">
                            Les document demander doivent être en format PDF 
                        </div>
                        <div className="input-fields">
                            <label>
                                Nom et prenom
                                <input
                                    type="text"
                                    placeholder="votre Nom complet"
                                    className="input-line full-width"
                                    value={values.nom}
                                    onChange={handleChange("nom")}
                                ></input>
                            </label>
                            <label>
                                numero de telephone
                                <input
                                    type="text"
                                    placeholder="ex: 0707101010"
                                    className="input-line full-width"
                                    value={values.numero}
                                    onChange={handleChange("prenom")}
                                ></input>
                            </label>
                            <label>
                                Email
                                <input
                                    type="text"
                                    className="input-line full-width"
                                    onChange={handleChange("date_naissance")}
                                    value={values.date_naissance}
                                    placeholder="ex: Jean@gmail.com"
                                ></input>
                            </label>
                            <label>
                                Extrait de naissance
                                <input
                                    type="file"
                                    className="input-line full-width"
                                    onChange={handleFileChange(
                                        "extraitDeNaissane"
                                    )}
                                ></input>
                            </label>
                            <label>
                                piece d'un des parents
                                <input
                                    type="file"
                                    className="input-line full-width"
                                    onChange={handleFileChange("pieceParent")}
                                ></input>
                            </label>
                        </div>
                        <div className="control">
                            <div>
                                <button onClick={nextStep} className=" btn">
                                    suivant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
