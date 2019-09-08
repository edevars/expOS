import styled from "styled-components";
import React, { Component } from "react";
import video from "./hero.mp4";
import logo from "../../images/logo.png";

const StyledHero = styled.div`
  width: 100vw;
  height: 60vh;
  position: relative;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .myVideo {
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    background-size: cover;
    overflow: hidden;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 60%;
  height: auto;
  z-index: 2;
`;

const Mask = styled.div`
  position: absolute;
  background: ${props => props.theme.color1}; 
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;
`;

class Hero extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.refs.vidRef.play();
  }

  render() {
    return (
      <StyledHero>
        <video className="myVideo" muted loop ref="vidRef">
          <source src={video} type="video/mp4" />
        </video>
        <Logo src={logo}></Logo>
        <Mask></Mask>
      </StyledHero>
    );
  }
}

export default Hero;
