import React from 'react';
import "./footer.css"

function Footer() {
  return (
      <section className="footer">
          <div className="box-containe">
              <div className="boxs">
                  <h3>lien utile</h3>
                  <a href="#!">Extrait de naissance</a>
                  <a href="#!">certificat de nationalité</a>
                  <a href="#!">casier judiciaire</a>
                  <a href="#!">
                      <i className="fas fa-phone"></i> (+225) 0758164099
                  </a>
              </div>

              <div className="boxs">
                  <h3>reseau socio </h3>
                  <a href="https://wa.me/+2250102335131">
                      <i className="fab fa-whatsapp"></i> whatsapp
                  </a>
                  <a href="http://t.me/Beniservice">
                      <i className="fab fa-telegram"></i> telegram
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100090932037191">
                      <i className="fab fa-facebook"></i> facebook
                  </a>
              </div>
          </div>
      </section>
  );
}

export default Footer