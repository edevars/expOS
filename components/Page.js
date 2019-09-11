import React, { Component } from "react";
import Meta from "./Meta";
import Nav from "./Nav";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import client from "../credentials/client";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//alerts
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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

const errorMessage = e => {
  MySwal.fire({
    type: "error",
    title: "Oops...",
    text: `Algo salio mal: ${e}`
  });
};

const welcomeMessage = () => {
  MySwal.fire(
    "Se ha creado tu cuenta",
    "Por favor verifica tu email para poder acceder",
    "success"
  );
};

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  handleModalVisible = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
    console.log("Manejo de modal", this.state.modalVisible);
  };

  componentDidMount() {
    firebase.initializeApp(client);
  }

  signIn = (name, email, password) => {
    const auth = firebase.auth();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({
          displayName: name
        });

        const config = {
          url: "http://localhost:3000/"
        };

        result.user.sendEmailVerification(config).catch(e => {
          errorMessage(e);
          console.error(e);
        });

        auth.signOut();

        welcomeMessage();
        this.modalVisible();
      })
      .catch(e => {
        errorMessage(e);
        console.error(e);
      });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta />
          <Nav
            modalVisible={this.state.modalVisible}
            handleModalVisible={this.handleModalVisible}
            signIn={this.signIn}
          />
          <GlobalStyled></GlobalStyled>
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
