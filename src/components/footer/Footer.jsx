import React from 'react';
import "./footer.css"

function Footer() {
  return (
      <section className="footer">
          <div className="box-containe">
              <div className="boxs">
                  <h3>lien utile</h3>
                  <a href="#!">
                      Extrait de naissance
                  </a>
                  <a href="#!">
                      certificat de nationalité
                  </a>
                  <a href="#!">
                      casier judiciaire
                  </a>
                  <a href="#!">
                      <i className="fas fa-phone"></i> Contacte
                  </a>
              </div>

              <div className="boxs">
                  <h3>reseau socio </h3>
                  <a href="#!">
                      <i className="fab fa-whatsapp"></i> whatsapp
                  </a>
                  <a href="#!">
                      <i className="fab fa-telegram"></i> telegram
                  </a>
                  <a href="#!">
                      <i className="fab fa-facebook"></i> facebook
                  </a>
              </div>
              
          </div>
          
      </section>
  );
}

export default Footer