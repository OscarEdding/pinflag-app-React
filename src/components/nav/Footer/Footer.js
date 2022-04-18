import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook, ImYoutube, ImLinkedin2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import "./Footer.css"

import PinflagLogo from "../../../assets/img/pinflag-logo-footer.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="main-footer">
        <div className="column-footer">
          <ul className="list-unstyled">
            <li>
              <Link>
                <img
                  src={PinflagLogo}
                  height="80"
                  display="flex"
                  alt=""
                />
              </Link>
            </li>
            <li>2021 PinFlag Chile</li>
          </ul>
        </div>
        <div className="column-footer">
          <h4>Empresa</h4>
          <ul className="list-unstyled">
            <li>
              <Link>Iniciar Sesión</Link>
            </li>
            <li>
              <Link>¿Cómo funciona?</Link>
            </li>
            <li>
              <Link to="/hablemos">Hablemos</Link>
            </li>
            <li>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li>
              <Link to="/blog" className="hover">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="column-footer">
          <h4>Productos</h4>
          <ul className="list-unstyled">
            <li>
              <Link>¿Eres cliente?</Link>
            </li>
            <li>
              <Link>¿Eres E-commerce?</Link>
            </li>
            <li>
              <Link>¿Eres una tienda física?</Link>
            </li>
          </ul>
        </div>
        <div className="column-footer">
          <h4>Soporte</h4>
          <ul className="list-unstyled">
            <li>
              <Link>Políticas de privacidad</Link>
            </li>
            <li>
              <Link>contacto@pinflag.cl</Link>
            </li>
            <li className="networks">
              <ImFacebook />
              <ImYoutube />
              <GrInstagram />
              <ImLinkedin2 />
            </li>
          </ul>
        </div>
      </div>
      <div className="row lower-footer">
        <p>
          ¿Te gustó nuestra página? ¡La creó
          <Link className="marketing"> Hi Marketing</Link>!
        </p>
      </div>
    </div>
  );
};

export default Footer;
