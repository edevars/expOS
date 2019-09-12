import React, { Component } from "react";
import Meta from "./Meta";
import Nav from "./Nav";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Footer from "./footer";

const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 12px;
    margin: 0;
    padding: 0;
    background-color: #F6F9F9;
}
`;

const theme = {
  color1: "#190E4F",
  color2: "#E04090",
  color3: "#00689E",
  color4: "#19F3FF",
  color5: "#340044",
  dark: "#292929",
  grey: "#656D7A",
  light: "#ffffff",
  light_dimmed: "#F6F9F9",
  get gradient() {
    return `linear-gradient(to left,${this.color1},${this.color5})`;
  }
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Nav />
          <GlobalStyled></GlobalStyled>
          {this.props.children}
          <Footer></Footer>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
