import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.light};
  font-size: 20px;
  margin: auto auto;
`;

const StyledLink = styled.a`
  color: white;
  margin-right: 70px;
  height: fit-content;
  padding: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  *:after,
  *::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  &:hover {
    cursor: pointer;
    outline: none;
  }
  &::after,
  &::before {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  &::before {
    margin-right: 10px;
    content: "[";
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  &::after {
    margin-left: 10px;
    content: "]";
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }

  @media screen and (max-width: 768px) {
    all: unset;
    width: 250px;
    color: white;
    border: 3px solid white;
    text-align: center;
    padding: 15px;
    font-size: 1.8rem;
    font-weight: bold;

    *:after,
    *::before {
      all: unset;
      width: 250px;
      color: white;
      border: 3px solid white;
      text-align: center;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: bold;
    }

    &::after,
    &::before {
      all: unset;
      width: 250px;
      color: white;
      border: 3px solid white;
      text-align: center;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: bold;
    }

    &::before {
      all: unset;
      width: 250px;
      color: white;
      border: 3px solid white;
      text-align: center;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: bold;
    }

    &::after {
      all: unset;
      width: 250px;
      color: white;
      border: 3px solid white;
      text-align: center;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: bold;
    }

    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
      all: unset;
      width: 250px;
      color: white;
      border: 3px solid white;
      text-align: center;
      padding: 15px;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
`;

const StyledNav = styled.nav`
  background: ${props => props.theme.color1}; /* fallback for old browsers */
  background: ${props => props.theme.gradient};
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  top: 0;
  z-index: 2;
  width: 100%;
  @media screen and (max-width: 768px) {
    all: unset;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    background: rgba(50, 0, 66, 0.85);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99998;
  }
`;

const Toggle = styled.div`
  @media screen and (max-width: 768px) {
    .ToggleOff {
      transition: 0.7s;
      left: -100vw;
    }
    .ToggleOn {
      transition: 0.7s;
      left: 0;
    }
  }
`;

const Button = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 15px;
    margin-left: 15px;
    z-index: 99999;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 50%;
    background: ${props => props.theme.color3};
  }
`;

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Toggle>
      <Button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <StyledFontAwesomeIcon icon={faBars}></StyledFontAwesomeIcon>
      </Button>
      <StyledNav className={toggle ? "ToggleOn" : "ToggleOff"}>
        <Link href="/">
          <StyledLink
            onClick={() => {
              setToggle(!toggle);
              console.log("Cambiando de ruta");
            }}
          >
            Home
          </StyledLink>
        </Link>
        <Link href="/speakers">
          <StyledLink
            onClick={() => {
              setToggle(!toggle);
              console.log("Cambiando de ruta");
            }}
          >
            Speakers
          </StyledLink>
        </Link>
        <Link href="/workshops">
          <StyledLink
            onClick={() => {
              setToggle(!toggle);
              console.log("Cambiando de ruta");
            }}
          >
            Workshops
          </StyledLink>
        </Link>
      </StyledNav>
    </Toggle>
  );
};

export default Nav;
