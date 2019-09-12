import styled from "styled-components";
import React, { Component } from "react";
import video from "./hero.mp4";
import logo from "../../images/logo.png";

const StyledHero = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 650px;
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

const StyledWrapper = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 80%;
  height: auto;
  z-index: 2;
  margin-top: 20vh;
`;

const Title = styled.h1`
  color: ${props => props.theme.light};
  margin: 40px 0px 0px;
  font-size: 3.5rem;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Counter = styled.h2`
  color: ${props => props.theme.light_dimmed};
  font-size: 2.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
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

  async componentDidMount() {
    this.refs.vidRef.play();
    await this.calculateDate();
  }

  calculateDate = () => {
    const timer = setInterval(() => {
      this.setState({
        finalDate: new Date("Sep 18, 2019 00:00:00").getTime(),
        now: new Date().getTime()
      });
    }, 1000);
    let distance = this.state.finalDate - this.state.now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance < 0) {
      clearInterval(timer);
      return "0d 0h 0m 0s";
    }
    return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  };

  render() {
    return (
      <StyledHero>
        <video className="myVideo" muted loop ref="vidRef">
          <source src={video} type="video/mp4" />
        </video>
        <Mask></Mask>
        <StyledWrapper>
          <Logo src={logo}></Logo>
          <Title>¡Solo falta!</Title>
          <Counter>{this.calculateDate()}</Counter>
        </StyledWrapper>
      </StyledHero>
    );
  }
}

export default Hero;
