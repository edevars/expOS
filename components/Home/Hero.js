import styled from "styled-components";
import React, { Component } from "react";
import video from "./hero.mp4";
import logo from "../../images/logo.png";

const StyledHero = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
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
  width: 40%;
  height: auto;
  z-index: 2;
  margin-top: 20vh;
`;

const Counter = styled.h1`
  color: ${props => props.theme.light};
  font-size: 46px;
  position: absolute;
  z-index: 2;
  margin-top: 40vh;
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

  state = {
    finalDate: new Date("Sep 18, 2019 00:00:00").getTime(),
    now: new Date().getTime()
  };

  componentDidMount() {
    this.refs.vidRef.play();
    setInterval(() => {
      this.setState({
        finalDate: new Date("Sep 18, 2019 00:00:00").getTime(),
        now: new Date().getTime()
      });
    }, 1000);
  }

  calculateDate = () => {
    let distance = this.state.finalDate - this.state.now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return "Solo faltan " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  };

  render() {
    return (
      <StyledHero>
        <video className="myVideo" muted loop ref="vidRef">
          <source src={video} type="video/mp4" />
        </video>
        <Logo src={logo}></Logo>
        <Mask></Mask>
        <Counter>{this.calculateDate()}</Counter>
      </StyledHero>
    );
  }
}

export default Hero;
