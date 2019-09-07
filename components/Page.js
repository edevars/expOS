import React, { Component } from "react";
import Meta from "./Meta";
import Nav from "./Nav";
import  { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Proza+Libre&display=swap');

body {
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Proza Libre', sans-serif;
}
`;

const theme = {
  color1: "#190E4F",
  color2: "#E04090",
  color3: "#00689E",
  color4: "#19F3FF",
  color5: "#0C7489",
  black: "#292929",
  bs: "#ffffff"
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
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
