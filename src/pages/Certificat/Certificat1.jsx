import React from 'react'
import {  message } from "antd";

export default function Certificat1({nextStep,prevStep,values,handleChange,handleFileChange}) {
    const [messageApi, contextHolder] = message.useMessage();
    const validate = () => {
        if (
            !values.nom ||
            !values.numero ||
            !values.extraitDeNaissane ||
            !values.pieceParent ||
            !values.email
        ) {
            messageApi.open({
                type: "warning",
                content: "merci de remplir tout les champs du formulaire",
            });
            console.log(values)
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
                                  onChange={handleChange("numero")}
                              ></input>
                          </label>
                          <label>
                              Email
                              <input
                                  type="text"
                                  className="input-line full-width"
                                  onChange={handleChange("email")}
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
