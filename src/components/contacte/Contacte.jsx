import React from 'react';
import "./contacte.css"

function Contacte() {
  return (
      <section id="contacte" className="contact">
          <h1 className="heading">
              <span className="span">contactez-nous</span>
          </h1>
          <div id="contact-form">
              <div className="row">
                  <iframe
                      className="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.386187622329!2d-3.983919127905554!3d5.286628005146886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eeba32bfbf1b%3A0xa1f41688cd35698f!2sZone%204C%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1641315314126!5m2!1sfr!2sci"
                      allowfullscreen=""
                      title="location"
                      loading="lazy"
                  ></iframe>
              </div>

              <div className="form">
                  <form>
                      <input
                          type="text"
                          placeholder="votre nom"
                          className="box"
                      />
                      <input
                          type="email"
                          placeholder="votre email"
                          className="box"
                      />
                      <textarea
                          placeholder="votre message"
                          className="box"
                          cols="20"
                          rows="10"
                      ></textarea>
                      <input
                          type="submit"
                          value="Envoyer"
                          className="btn"
                      />
                  </form>
              </div>
          </div>
      </section>
  );
}

export default Contacte