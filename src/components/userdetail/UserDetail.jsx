import React from "react";
import { extraitNaissance } from "../../data";
import { message } from "antd";
import "./userDetail.css";
const UserDetail = ({ nextStep, values, handleChange }) => {
     const [messageApi, contextHolder] = message.useMessage();
     const validate = () => {
         if (
             !values.nom ||
             !values.prenom ||
             !values.date_naissance ||
             !values.numero_Acte_naissance ||
             !values.lieu_naissance ||
             !values.lieuDeTablissement
         ) {
             messageApi.open({
                 type: "warning",
                 content: "merci de remplir tout les champs du formulaire",
             });
             console.log(values);
             return;
         }
         nextStep();
     };
    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    {contextHolder}
                    <div className="content">
                        <div className="welcome">details personnel</div>
                        <div className="subtitle">
                            merci de bien vouloir remplir le formulaire avec des
                            informations correcte
                        </div>
                        <div className="input-fields">
                            <label>
                                Nom
                                <input
                                    type="text"
                                    placeholder="votre Nom"
                                    className="input-line full-width"
                                    value={values.nom}
                                    onChange={handleChange("nom")}
                                ></input>
                            </label>
                            <label>
                                prenom
                                <input
                                    type="text"
                                    placeholder="votre Prenom"
                                    className="input-line full-width"
                                    value={values.prenom}
                                    onChange={handleChange("prenom")}
                                ></input>
                            </label>
                            <label>
                                date de naissance
                                <input
                                    type="text"
                                    className="input-line full-width"
                                    placeholder="ex:  01/01/1994"
                                    onChange={handleChange("date_naissance")}
                                    value={values.date_naissance}
                                ></input>
                            </label>

                            <label>
                                Numero de l'acte de naissance
                                <input
                                    type="text"
                                    placeholder="ex: 253 du 01/01/1994"
                                    className="input-line full-width"
                                    value={values.numero_Acte_naissance}
                                    onChange={handleChange(
                                        "numero_Acte_naissance"
                                    )}
                                ></input>
                            </label>
                            <label>
                                Lieu de naissance
                                <input
                                    type="text"
                                    placeholder="ex: marcory"
                                    className="input-line full-width"
                                    value={values.lieu_naissance}
                                    onChange={handleChange("lieu_naissance")}
                                ></input>
                            </label>
                            <label className="input-line full-width">
                                Lieu d'etablissement de l'acte de naissance
                                <select
                                    name="lieuDeTablissement"
                                    className="input-line full-width"
                                    onChange={handleChange(
                                        "lieuDeTablissement"
                                    )}
                                    value={values.lieuDeTablissement}
                                >
                                    <option value=""></option>
                                    {extraitNaissance.map((item, index) => (
                                        <optgroup
                                            key={index.toString()}
                                            label={item.option}
                                        >
                                            {item.localite
                                                .sort()
                                                .map((item, index) => (
                                                    <option
                                                        key={index.toString()}
                                                        value={item}
                                                    >
                                                        {item}
                                                    </option>
                                                ))}
                                        </optgroup>
                                    ))}
                                </select>
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
};

export default UserDetail;
