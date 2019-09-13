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
  @media screen and (max-width: 425px) {
    margin: 0 auto;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100%;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    margin: 0;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.color1};
  text-align: center;
  font-size: 5rem;
  @media screen and (max-width: 425px) {
    font-size: 3rem;
  }
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
  overflow: hidden;
`;

const WorkshopsItem = styled.div`
  display: grid;
  max-width: 600px;
  grid-template-columns: auto 1fr;
  border: 1px solid black;
  padding: 40px 0;
  margin: 35px 30px;
  h3 {
    font-size: 24px;
    color: ${props => props.theme.color3};
    margin: 15px 70px;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    h3 {
      margin: 15px 20px;
    }
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
  &:hover {
    cursor: pointer;
  }
`;

const Date = styled.p`
  margin-top: 0;
  font-weight: bold;
  font-size: 0.8rem;
`;

const Home = () => (
  <>
    <Title>Workshops</Title>
    <Div>
      <WorkshopsWrappers>
        <WorkshopsItem>
          <IconWrapper>
            <StyledFontAwesomeIcon icon={faLinux}></StyledFontAwesomeIcon>
          </IconWrapper>
          <Content>
            <h3>Introducción a Linux y Git</h3>
            <Date>19 de septiembre | 17:00 a 20:30 hrs</Date>
            <Link href="https://forms.gle/KbS25CeiYKwvRm9V9" target="_blank">
              Registrarse
            </Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <IconWrapper>
            <StyledFontAwesomeIcon icon={faPython}></StyledFontAwesomeIcon>
          </IconWrapper>
          <Content>
            <h3>Python for No0bs</h3>
            <Date>18 de septiembre | 11:30 a 13:00 hrs</Date>
            <Date>19 de septiembre | 11:30 a 13:00 hrs</Date>
            <Date>20 de septiembre | 11:30 a 13:00 hrs</Date>
            <Link href="https://forms.gle/xmHhByaQ4S95sT8N9" target="_blank">
              Registrarse
            </Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <IconWrapper>
            <StyledFontAwesomeIcon icon={faFileAlt}></StyledFontAwesomeIcon>
          </IconWrapper>
          <Content>
            <h3>Introducción a LATEX</h3>
            <Date>19 de septiembre | 10:00 a 11:30 hrs</Date>
            <Date>20 de septiembre | 10:00 a 11:30 hrs</Date>
            <Link href="https://forms.gle/rRQVGo4Qhp5gRm1z8" target="_blank">
              Registrarse
            </Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <IconWrapper>
            <StyledFontAwesomeIcon icon={faGoogle}></StyledFontAwesomeIcon>
          </IconWrapper>
          <Content>
            <h3>Libera tu celular de las garras de google</h3>
            <Date>18 de septiembre | 10:00 a 13:00 hrs</Date>
            <Link href="https://forms.gle/Q9qYPmcFQhu3pHaU7" target="_blank">
              Registrarse
            </Link>
          </Content>
        </WorkshopsItem>
        <WorkshopsItem>
          <IconWrapper>
            <StyledFontAwesomeIcon icon={faCogs}></StyledFontAwesomeIcon>
          </IconWrapper>
          <Content>
            <h3>Diseño con FreeCAD</h3>
            <Date>18 de septiembre | 16:00 a 19:00 hrs</Date>
            <Link href="https://forms.gle/dmJqjxd7uPSzvFNg9" target="_blank">
              Registrarse
            </Link>
          </Content>
        </WorkshopsItem>
      </WorkshopsWrappers>
    </Div>
  </>
);

export default Home;
