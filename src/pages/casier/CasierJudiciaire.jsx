import React, { Component } from "react";
import CasierEtape1 from "./CasierEtape1";
import CasierEtape2 from "./CasierEtape2";
import axios from "axios";
import CasierConfirm from "./CasierConfirm";
export default class CasierJudiciaire extends Component {
    state = {
        step: 1,
        nom: "",
        numero: "",
        email: "",
        nombreCopie: "",
        extraitDeNaissane: '',
        pieceParent: '',
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
       
        console.log(this.state[input]);
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
        } = this.state;
        const values = {
            email,
            nom,
            numero,
            extraitDeNaissane,
            pieceParent,
            nombreCopie,
        };
        switch (step) {
            case 1:
                return (
                    <CasierEtape1
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                        handleFileChange={this.handleFileChange}
                    />
                );
            case 2:
                return (
                    <CasierConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        handleChange={this.handleChange}
                    />
                );
        }
    }
}
