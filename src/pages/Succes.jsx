import React, { useEffect } from "react";
// import { Navigate } from 'react-router-dom';
import swal from "sweetalert";

export default function Succes() {
    const getBack = (e) =>
        (window.location.href =
            "https://beniservice.up.railway.app/");
    useEffect(() => {
        swal({
            title: "Felicitation!",
            text: "votre demande a bien été envoyé!",
            icon: "success",
            button: "okay",
            closeOnClickOutside: false,
        });
     const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log(token);
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
