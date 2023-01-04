import React, { Component } from "react";
import Etape2 from "../../components/userdetail/Etape2";
import UserDetail from "../../components/userdetail/UserDetail";

class Extrait extends Component {
    state = {
        step: 1,
        nom: "",
        prenom: "",
        numero: "",
        lieu_naissance: "",
        numero_Acte_naissance: "",
        lieuDeTablissement: "",
        sexe: "",
        email: "",
        nmbreCopie: "",
        lieu_Livraison: "",
        date_naissance:'',
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

    render() {
        const { step } = this.state;
        const {
            nom,
            prenom,
            numero,
            lieuDeTablissement,
            lieu_Livraison,
            sexe,
            email,
            nmbreCopie,
            numero_Acte_naissance,
            date_naissance,
            lieu_naissance
        } = this.state;
        const values = {
            nom,
            prenom,
            numero,
            lieuDeTablissement,
            lieu_Livraison,
            sexe,
            email,
            nmbreCopie,
            numero_Acte_naissance,
            date_naissance,
            lieu_naissance
        };
        switch (step) {
            case 1:
                return (
                    <UserDetail
                        nextStep={this.nextStep}
                        values={values}
                        handleChange={this.handleChange}
                    />
                );
            case 2:
                return (
                    <Etape2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        value={values}
                    />
                );

            default:
                break;
        }
    }
}

export default Extrait;
