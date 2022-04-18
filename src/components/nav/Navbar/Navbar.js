import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react"

import {
  Container,
  Wrapper,
  ContainerLogo,
  ContainerMenu,
  MobileIcon,
  ContainerLogin,
} from "./Navbar.style.js";

import PinflagLogo from "../../../assets/img/pinflag-logo-navbar.png";

export const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <ContainerLogo>
          <a href="/">
            <img href="/" src={PinflagLogo} alt="" className="img" />
          </a>
        </ContainerLogo>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaBars />
        </MobileIcon>
        <ContainerMenu open={showMobileMenu}>
          <li>
            <a className="item-link" href="/">
              INICIO
            </a>
          </li>
          <li>
            <a className="item-link" href="/hablemos">
              QUIERO SUMARME A LA RED PINFLAG
            </a>
          </li>
          <li>
            <a className="item-link" href="/clientes">
              CLIENTES
            </a>
          </li>
          <li>
            <a className="item-link" href="/blog">
              BLOG
            </a>
          </li>
        </ContainerMenu>
        <ContainerLogin>
          <a className="login-button" href="https://admin.pinflag.cl/">
            INICIAR SESIÓN
          </a>
        </ContainerLogin>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
