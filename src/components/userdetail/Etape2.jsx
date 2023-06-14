import React, { useState } from "react";
import { extraitNaissance } from "../../data";
import "./userDetail.css";
import { message } from "antd";
import { Livraison } from "../../data";
import InvoiceButton from "../../components/Checkout";
import axios from "axios";

const Etape2 = ({ nextStep, prevStep, values, handleChange }) => {
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
        command_name: "demande extrait de naissance",
        item_name: "Demande d'extrait de naissance", // Seul le nom est requis
        item_price: `${values.nmbreCopie}`,
        custom_field: JSON.stringify(values),
        ref_command: generateUniqueId(),
        ipn_url:
            "https://beniserviceserver-production.up.railway.app/api/v1/demande/extrait",
    };
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        API_KEY: process.env.REACT_APP_API_KEY,
        API_SECRET: process.env.REACT_APP_API_SECRET,
    };
    const handleSubmit = () => {
        setDisabled(true);
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
        console.log(values);

        if (
            !values.nmbreCopie ||
            !values.numero ||
            !values.email ||
            !values.sexe ||
            !values.lieu_Livraison ||
            values.numero.length <= 8
        ) {
            messageApi.open({
                type: "warning",
                content: "merci de remplir tout les champs du formulaire",
            });
            return;
        }
        handleSubmit();
    };
    return (
        <>
            <div className="userDetail-container">
                <div className="window">
                    {contextHolder}
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
                                    onChange={handleChange("numero")}
                                    value={values.numero}
                                    required
                                ></input>
                            </label>
                            <label>
                                Email
                                <input
                                    type="text"
                                    placeholder="ex: jean@gmail.com"
                                    className="input-line full-width"
                                    onChange={handleChange("email")}
                                    value={values.email}
                                    required
                                ></input>
                            </label>
                            <label className="input-line full-width">
                                sexe
                                <select
                                    name="sexe"
                                    className="input-line full-width"
                                    onChange={handleChange("sexe")}
                                    value={values.sexe}
                                >
                                    <option value="Masculin">Masculin</option>
                                    <option value="Féminin">Féminin</option>
                                </select>
                            </label>
                            <label className="input-line full-width">
                                Lieu de livraison
                                <select
                                    name="Lieu_de_livraison"
                                    className="input-line full-width"
                                    onChange={handleChange("lieu_Livraison")}
                                    value={values.lieu_Livraison}
                                    required
                                >
                                    <option value="">...</option>
                                    {Livraison.map((item, index) => (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="input-line full-width">
                                Nombre de copie
                                <select
                                    name="nmbreCopie"
                                    className="input-line full-width"
                                    onChange={handleChange("nmbreCopie")}
                                    value={values.nmbreCopie}
                                >
                                    <option value="#">...</option>
                                    <option value="5500">
                                        01 (5.500 FCFA)
                                    </option>
                                    <option value="8500">02 (8.500 FCFA)</option>
                                    <option value="11500">03 (11.500 FCFA)</option>
                                    <option value="14500">04 (14.500 FCFA)</option>
                                    <option value="17500">05 (17.500 FCFA)</option>
                                    <option value="20500">06 (20.500 FCFA)</option>
                                    <option value="23500">07 (23.500 FCFA)</option>
                                    <option value="27500">08 (27.500 FCFA)</option>
                                    <option value="30500">09 (30.500 FCFA)</option>
                                    <option value="33500">10 (33.500 FCFA)</option>
                                </select>
                            </label>
                        </div>
                        <div className="control">
                            <div>
                                <button onClick={prevStep} className=" btn">
                                    precedent
                                </button>
                            </div>
                            <InvoiceButton
                                data={values}
                                handleSubmit={validate}
                                disable={disable}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Etape2;
