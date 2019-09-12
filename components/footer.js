import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import LogoOs from "../images/osLogo.png";

const StyledFooter = styled.footer`
  background: ${props => props.theme.color1};
  width: 100%;
  height: 200px;
  margin-top: 200px;
  display: grid;
  grid-template-areas: "Logo Message Icons";
  position: relative;
  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-areas: "Logo" "Message" "Icons";
    grid-template-columns: 1fr;
    padding-bottom: 64px;
  }
`;

const LogoWrapper = styled.div`
  grid-area: Logo;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;

const Logo = styled.img`
  width: 250px;
`;

const Message = styled.div`
  grid-area: Message;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h6 {
    font-weight: 400;
    color: white;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
  }
  p {
    padding-top: 5px;
    color: #bcd9dd;
    margin: 0;
    a {
      color: ${props => props.theme.color4};
    }
  }
  .icon {
    color: ${props => props.theme.color4};
  }
  .rights {
    padding-top: 15px;
    color: white;
    position: absolute;
    bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
    h6 {
      font-size: 1.1rem;
    }
  }
`;

const IconsContainer = styled.div`
  grid-area: Icons;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .icon {
    font-size: 2rem;
    color: white;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 70px;
    width: 280px;
    margin: 0 auto;
  }
`;

const Footer = () => (
  <StyledFooter>
    <LogoWrapper>
      <Logo src={LogoOs}></Logo>
    </LogoWrapper>
    <Message>
      <h6>
        {" "}
        Hecho con &nbsp;
        <span role="img" aria-label="blue heart">
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </span>
        &nbsp; por Enrique Devars
      </h6>
      <p>
        Desarrollado con{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          NextJS
        </a>
      </p>
      <p className="rights">@2019 | Todos los derechos reservados</p>
    </Message>
    <IconsContainer>
      <a
        href="https://www.facebook.com/os.upiita.ipn/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Siguenos en Facebook"
      >
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </a>

      <a
        href="https://twitter.com/osupiita"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Siguenos en twitter"
      >
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
    </IconsContainer>
  </StyledFooter>
);

export default Footer;
