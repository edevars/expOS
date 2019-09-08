import Link from "next/link";
import styled from "styled-components";

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
`;

const Bar = styled.nav`
  background: ${props => props.theme.color1}; /* fallback for old browsers */
  background: ${props => props.theme.gradient};
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  opacity: 0.6;
`;

const StyledNav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
`;

const Registrarse = styled.button`
  background-color: ${props => props.theme.color2};
  color: ${props => props.theme.light};
  border: none;
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.05rem;
  font-weight: bold;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

const IniciarSesion = styled.button`
  background-color: ${props => props.theme.color3};
  color: ${props => props.theme.light};
  border: none;
  height: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1.05rem;
  font-weight: bold;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Nav = () => (
  <>
    <Bar></Bar>
    <StyledNav>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/speakers">
        <StyledLink>Speakers</StyledLink>
      </Link>
      <Link href="/workshops">
        <StyledLink>Workshops</StyledLink>
      </Link>
      <Registrarse>Registrarse</Registrarse>
      <IniciarSesion>Iniciar Sesion</IniciarSesion>
    </StyledNav>
  </>
);

export default Nav;
