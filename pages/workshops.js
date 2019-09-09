import React from "react";
import styled from "styled-components";
import Hero from "../components/Home/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux,
  faPython,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import { faFileAlt, faCogs } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color1};
  width: 100px;
  margin: auto 20px;
`;

const Title = styled.h1`
  color: ${props => props.theme.color1};
  text-align: center;
  font-size: 5rem;
`;

const Div = styled.div`
  display: flex;
  width: 99vw;
  justify-content: center;
`;

const WorkshopsWrappers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 70px;
  width: 70%;
  margin-bottom: 300px;
  overflow: hidden;
`;
const WorkshopsItem = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 100px auto;
  border: 1px solid black;
  padding: 50px 0;
  h3 {
    font-size: 2rem;
    color: ${props => props.theme.color2};
    margin: auto 70px;
  }
`;

const Home = () => (
  <>
    <Title>Workshops</Title>
    <Div>
      <WorkshopsWrappers>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faLinux}></StyledFontAwesomeIcon>
          <h3>Introducción a Linux</h3>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faPython}></StyledFontAwesomeIcon>
          <h3>Python for No0bs</h3>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faFileAlt}></StyledFontAwesomeIcon>
          <h3>Introducción a Latex</h3>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faGoogle}></StyledFontAwesomeIcon>
          <h3>Libera tu celular de las garras de google</h3>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faCogs}></StyledFontAwesomeIcon>
          <h3>Diseño de FreeCAD</h3>
        </WorkshopsItem>
      </WorkshopsWrappers>
    </Div>
  </>
);

export default Home;
