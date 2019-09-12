import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faMicrophoneAlt,
  faTools
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.ul`
  background: ${props => props.theme.light};
  width: 1200px;
  height: 170px;
  position: absolute;
  bottom: -85px;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  #last {
    border-right: none;
  }
  @media screen and (max-width: 1200px) {
    position: static;
    width: 100%;
    height: auto;
    flex-flow: row wrap;
    justify-content: space-evenly;
    #last {
      border-right: 2px solid ${props => props.theme.black};
    }
  }

  @media screen and (max-width: 768px) {
    position: static;
    width: 100%;
    height: auto;
    flex-flow: column wrap;
    justify-content: space-evenly;
  }
`;

const Item = styled.li`
  width: 250px;
  padding: 0;
  margin: 0;
  font-size: 12px;
  display: grid;
  grid-template-columns: 30px auto;
  border-right: 2px solid ${props => props.theme.black};
  @media screen and (max-width: 1200px) {
    border-left: 2px solid ${props => props.theme.black};
    padding: 40px;
  }

  @media screen and (max-width: 425px) {
    padding: 20px;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color1};
  font-size: 40px;
  margin: auto 0;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme.grey};
  margin: 0;
`;

const DescriptionWrapper = styled.div`
  margin: 15px 0px 0px 20px;
  p {
    font-size: 0.8rem;
  }
`;

const InfoContainer = () => (
  <Wrapper>
    <Item>
      <StyledFontAwesomeIcon icon={faMapMarkerAlt} />
      <DescriptionWrapper>
        <Subtitle>UPIITA IPN</Subtitle>
        <p>
          Av Instituto Politécnico Nacional 2580, La Laguna Ticoman, 07340
          Ciudad de México, CDMX
        </p>
      </DescriptionWrapper>
    </Item>
    <Item>
      <StyledFontAwesomeIcon icon={faCalendarAlt} />
      <DescriptionWrapper>
        <Subtitle>3 dias de actividades</Subtitle>
        <p>18,19 y 20 de septiembre</p>
      </DescriptionWrapper>
    </Item>
    <Item>
      <StyledFontAwesomeIcon icon={faMicrophoneAlt} />
      <DescriptionWrapper>
        <Subtitle>Mas de 10 speakers</Subtitle>
        <p>Expertos y entusiastas del software libre</p>
      </DescriptionWrapper>
    </Item>
    <Item id="last">
      <StyledFontAwesomeIcon icon={faTools} />
      <DescriptionWrapper>
        <Subtitle>5 workshops</Subtitle>
        <p>Aprende cosas nuevas en nuestros diferentes talleres</p>
      </DescriptionWrapper>
    </Item>
  </Wrapper>
);

export default InfoContainer;
