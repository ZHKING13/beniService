import React, { useState } from "react";
import { Livraison } from "../../data";
import { message } from "antd";
import InvoiceButton from "../../components/Checkout";
import axios from "axios";
export default function Certificat2({
    nextStep,
    prevStep,
    values,
    handleChange,
}) {
    // send form details
    const [messageApi, contextHolder] = message.useMessage();
    const [disable, setDisabled] = useState(false);
    function generateUniqueId() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (c) {
                var r = (Math.random() * 16) | 0,
                    v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }
        );
    }
  

    const body = {
        command_name: "demande de certificat ",
        item_name: "Demande de certificat", // Seul le nom est requis
        item_price: values.nombreCopie,
        custom_field: JSON.stringify(values),
        ref_command: generateUniqueId(),
        ipn_url:
            "https://beniserviceserver-production.up.railway.app/api/v1/demande/certificat",
        env: process.env.REACT_APP_ENV,
    };
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        API_KEY: process.env.REACT_APP_API_KEY,
        API_SECRET: process.env.REACT_APP_API_SECRET,
    };
    const handleSubmit = () => {
        axios
            .post("https://paytech.sn/api/payment/request-payment", body, {
                headers,
            })
            .then((response) => {
                window.location.href = response.data.redirect_url;
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };
    const validate = () => {
        if (!values.Lieu_de_livraison || !values.nombreCopie) {
            messageApi.open({
                type: "warning",
                content: "merci de remplir tout les champs du formulaire",
            });
            return;
        }
        console.log(values);
        handleSubmit();
    };

    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    {contextHolder}
                    <div className="content">
                        <div className="input-fields">
                            <label className="input-line full-width">
                                Nombre de copie
                                <select
                                    name="Nombre_de_copie"
                                    className="input-line full-width"
                                    onChange={handleChange("nombreCopie")}
                                >
                                    <option value="">...</option>
                                    <option value="5500">
                                        01 (5.500 FCFA)
                                    </option>
                                    <option value="8500">
                                        02 (8.500 FCFA)
                                    </option>
                                    <option value="11500">
                                        03 (11.500 FCFA)
                                    </option>
                                    <option value="14500">
                                        04 (14.500 FCFA)
                                    </option>
                                    <option value="17500">
                                        05 (17.500 FCFA)
                                    </option>
                                    <option value="20500">
                                        06 (20.500 FCFA)
                                    </option>
                                    <option value="23500">
                                        07 (23.500 FCFA)
                                    </option>
                                    <option value="27500">
                                        08 (27.500 FCFA)
                                    </option>
                                    <option value="30500">
                                        09 (30.500 FCFA)
                                    </option>
                                    <option value="33500">
                                        10 (33.500 FCFA)
                                    </option>
                                </select>
                            </label>

                            <label className="input-line full-width">
                                Lieu de livraison
                                <select
                                    name="Lieu_de_livraison"
                                    className="input-line full-width"
                                    onChange={handleChange("Lieu_de_livraison")}
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
                                <InvoiceButton
                                    data={values}
                                    handleSubmit={validate}
                                    disable={disable}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
