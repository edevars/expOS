import React from "react";
import styled from "styled-components";
import Speaker from "../components/speaker";

const Title = styled.h1`
  color: ${props => props.theme.color1};
  text-align: center;
  font-size: 5rem;
`;

const SpeakersWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Speakers = () => (
  <>
    <Title>Speakers</Title>
    <SpeakersWrapper>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
      <Speaker></Speaker>
    </SpeakersWrapper>
  </>
);

export default Speakers;
