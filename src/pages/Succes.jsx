import React, { useEffect } from "react";
// import { Navigate } from 'react-router-dom';
import swal from "sweetalert";

export default function Succes() {
    const getBack = (e) =>
        (window.location.href =
            "https://17de-2c0f-ecf0-618-f700-f9cc-5e29-7e1e-12f.ngrok.io/");
    useEffect(() => {
        swal({
            title: "Felicitation!",
            text: "votre demande a bien été envoyé!",
            icon: "success",
            button: "okay",
            closeOnClickOutside: false,
        });
    }, []);

    return (
        <div
            style={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <button className=" btn" onClick={getBack}>
                retour
            </button>
        </div>
    );
}
