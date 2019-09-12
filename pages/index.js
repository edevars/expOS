import React from "react";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/info";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  z-index: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (
  <>
    <HeroWrapper>
      <Hero></Hero>
      <Info></Info>
    </HeroWrapper>
  </>
);

export default Home;
