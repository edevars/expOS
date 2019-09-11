import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Modal = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(25, 14, 79, 0.5);
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  height: 100%;

  label {
    font-size: 1.3rem;
    margin-top: 50px;
  }

  .input {
    border: none;
    width: 100%;
    margin: 10px auto;
    font-size: 18px;
    border-bottom: 2px solid ${props => props.theme.color2};
    outline: none;
  }
  .submit {
    width: 100%;
    color: ${props => props.theme.light};
    font-size: 1.3rem;
    font-weight: bold;
    height: 50px;
    background-color: ${props => props.theme.color1};
    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 15px;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color1};
  font-size: 20px;
`;

const Title = styled.h4`
  font-size: 2rem;
`;

const FormWrapper = styled.div`
  background-color: ${props => props.theme.light};
  flex-direction: column;
  width: 700px;
  height: 450px;
  border-radius: 10px;
  position: relative;
  display: flex;
`;

const SignIn = props => {
  const [name, useName] = useState("");
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");

  return (
    <Modal>
      <FormWrapper>
        <Button onClick={props.handleModalSignInVisible}>
          <StyledFontAwesomeIcon icon={faTimesCircle} />
        </Button>
        <Form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <Title>Registrate</Title>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            className="input"
            name="name"
            autoComplete="username"
            placeholder="Hola amigo!"
            onChange={e => useName(e.target.value)}
          />
          <br />
          <label>Correo</label>
          <br />
          <input
            type="email"
            className="input"
            name="email"
            placeholder="youremail@example.com"
            autoComplete="username"
            onChange={e => useEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            className="input"
            name="password"
            autoComplete="current-password"
            onChange={e => usePassword(e.target.value)}
          />
          <br />
          <br />
          <input
            type="submit"
            className="submit"
            value="Submit"
            onClick={() => {
              console.log(email);
              props.signIn(name, email, password);
            }}
          ></input>
        </Form>
      </FormWrapper>
    </Modal>
  );
};

export default SignIn;
