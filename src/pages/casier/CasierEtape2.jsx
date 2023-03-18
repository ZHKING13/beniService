import React from 'react'
import { Livraison } from '../../data';
import swal from "sweetalert";
import {Navigate, useNavigate} from 'react-router-dom'
export default function CasierEtape2({ nextStep, handleChange, prevStep, values }) {
    const Confirm = async(e) => {
        e.preventDefault();
      await swal({
          title: "Felicitation!",
          text: "votre demande a bien été envoyé!",
          icon: "success",
          button: "ok!",
          closeOnClickOutside: false,
      })
    
       
    }
  return (
      <>
          <div className="userDetail-container">
              <div className="window">
                  <form className="content">
                      <div className="welcome"></div>
                      <div className="subtitle">
                          merci de bien vouloir remplir le formulaire avec des
                          informations correcte
                      </div>
                      <div className="input-fields">
                          <label className="input-line full-width">
                              Lieu de livraison
                              <select
                                  name="Nombre_de_copie"
                                  className="input-line full-width"
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
                                  name="Nombre_de_copie"
                                  className="input-line full-width"
                              >
                                  <option value="#">...</option>
                                  <option value="01"> 01 (5.500 FCFA)</option>
                                  <option value="02">02 (8.500 FCFA)</option>
                                  <option value="03">03 (11.500 FCFA)</option>
                                  <option value="04">04 (14.500 FCFA)</option>
                                  <option value="05">05 (17.500 FCFA)</option>
                                  <option value="06">06 (20.500 FCFA)</option>
                                  <option value="07">07 (23.500 FCFA)</option>
                                  <option value="08">08 (27.500 FCFA)</option>
                                  <option value="09">09 (30.500 FCFA)</option>
                                  <option value="10">10 (33.500 FCFA)</option>
                              </select>
                          </label>
                      </div>
                      <div className="control">
                          <div>
                              <button onClick={prevStep} className=" btn">
                                  precedent
                              </button>
                          </div>
                          <div>
                              <button onClick={nextStep} className=" btn">
                                  envoyez
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
  );
}
