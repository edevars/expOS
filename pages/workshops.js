import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinux,
  faPython,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import { faFileAlt, faCogs } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color1};
  font-size: 100px;
  margin: auto 20px;
`;

const Title = styled.h1`
  color: ${props => props.theme.color1};
  text-align: center;
  font-size: 5rem;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const WorkshopsWrappers = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  margin-bottom: 300px;
  overflow: hidden;
`;

const WorkshopsItem = styled.div`
  display: grid;
  max-width: 600px;
  grid-template-columns: 100px auto;
  border: 1px solid black;
  padding: 40px 0;
  margin: 35px 30px;
  h3 {
    font-size: 24px;
    color: ${props => props.theme.color3};
    margin: 15px 70px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  width: 100px;
  font-size: 18px;
  background-color: ${props => props.theme.color2};
  color: ${props => props.theme.light};
  text-align: center;
  padding: 5px 10px; 
  &:hover{
    cursor: pointer;
  }
`;

const Home = () => (
  <>
    <Title>Workshops</Title>
    <Div>
      <WorkshopsWrappers>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faLinux}></StyledFontAwesomeIcon>
          <Content>
            <h3>Introducción a Linux</h3>
            <Link>Registrarse</Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faPython}></StyledFontAwesomeIcon>
          <Content>
            <h3>Python for No0bs</h3>
            <Link>Registrarse</Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faFileAlt}></StyledFontAwesomeIcon>
          <Content>
            <h3>Introducción a Latex</h3>
            <Link>Registrarse</Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faGoogle}></StyledFontAwesomeIcon>
          <Content>
            <h3>Libera tu celular de las garras de google</h3>
            <Link>Registrarse</Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <StyledFontAwesomeIcon icon={faCogs}></StyledFontAwesomeIcon>
          <Content>
            <h3>Diseño de FreeCAD</h3>
            <Link>Registrarse</Link>
          </Content>
        </WorkshopsItem>
      </WorkshopsWrappers>
    </Div>
  </>
);

export default Home;
