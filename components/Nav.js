import Link from "next/link";
import styled from 'styled-components';


const Nav = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/speakers">
      <a>Confernecias</a>
    </Link>
    <Link href="/workshops">
      <a>workshops</a>
    </Link>
    <Link href="/registro">
      <a>Ingresa</a>
    </Link>
  </>
);

export default Nav;
