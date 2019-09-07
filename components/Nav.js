import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
  color: white;
  margin-right: 70px;
  height: fit-content;
  padding: 10px;
  font-size: 1.1rem;
  &:hover {
    cursor: pointer;
  }
`

const StyledNav = styled.nav`
  background: ${props => props.theme.color1}; /* fallback for old browsers */
  background: ${props => props.theme.gradient};
  height:  80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Nav = () => (
  <StyledNav>
    <Link href="/">
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/speakers">
      <StyledLink>Confernecias</StyledLink>
    </Link>
    <Link href="/workshops">
      <StyledLink>workshops</StyledLink>
    </Link>
    <Link href="/registro">
      <StyledLink>Ingresa</StyledLink>
    </Link>
  </StyledNav>
);

export default Nav;
