import React, { Component } from "react";
import axios from "axios"
import Certificat1 from "./Certificat1";
import Certificat2 from "./Certificat2";

export default class Certificat extends Component {
    state = {
        step: 1,
        nom: "",
        numero: "",
        email: "",
        nombreCopie: "",
        extraitDeNaissane: null,
        pieceParent: null,
        Lieu_de_livraison: "",
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };
    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
        console.log(e.target.value);
    };
    handleFileChange = (input) => async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "beni_service");
        axios
            .post("https://api.cloudinary.com/v1_1/zetrey-inc/upload", formData)
            .then((res) => this.setState({ [input]: res.data.secure_url }));
        console.log(file.name);
    };
    render() {
        const { step } = this.state;
        const {
            nom,
            numero,
            email,
            extraitDeNaissane,
            pieceParent,
            nombreCopie,
            Lieu_de_livraison,
        } = this.state;
        const values = {
            email,
            nom,
            numero,
            extraitDeNaissane,
            pieceParent,
            nombreCopie,
            Lieu_de_livraison,
        };
        switch (step) {
            case 1:
               return (
                   <Certificat1
                       nextStep={this.nextStep}
                       values={values}
                       handleChange={this.handleChange}
                       handleFileChange={this.handleFileChange}
                   />
               );
            case 2:
                return (
                   <Certificat2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                    values={values}
                    handleChange={this.handleChange}
                    handleFileChange={this.handleFileChange}
                />
               )
            
            default:
                break;
        }
    }
}
