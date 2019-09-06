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
  background: #43cea2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #185a9d,
    #43cea2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #185a9d,
    #43cea2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
