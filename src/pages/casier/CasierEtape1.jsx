import React from "react";
import { extraitNaissance } from "../../data";
import { message } from "antd";
import InvoiceButton from "../../components/Checkout";

export default function CasierEtape1({
    nextStep,
    handleChange,
    handleFileChange,
    values,
}) { 
    // validate
    const [messageApi, contextHolder] = message.useMessage();

    const validate = () => {
        if (
            !values.nom ||
            !values.numero ||
            !values.extraitDeNaissane ||
            !values.pieceParent
        ) {
           messageApi.open({
               type: "warning",
               content: "merci de remplir tout les champs du formulaire",
           });
            return 
        }
        nextStep();
    }
    return (
        <>
            {contextHolder}
            <div className="userDetail-container">
                {contextHolder}
                <div className="window">
                    <div className="content">
                        <div className="welcome">details personnel</div>
                        <div className="subtitle">
                            Les document demander doivent être en format PDF,
                            JPEG ou PNG
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
                                    onChange={handleChange("numero")}
                                ></input>
                            </label>
                            <label>
                                Email
                                <input
                                    type="text"
                                    className="input-line full-width"
                                    onChange={handleChange("email")}
                                    value={values.email}
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
                                <button onClick={validate} className=" btn">
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
