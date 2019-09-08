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
`;

const Item = styled.li`
  height: 50%;
  width: 250px;
  padding: 0;
  margin: 0;
  font-size: 12px;
  display: grid;
  grid-template-columns: 30px auto;
  border-right: 2px solid ${props => props.theme.black};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color1};
  width: 30px;
  margin: auto 0;
`;

const Subtitle = styled.h3`
  font-size: 1rem;
  color: ${props => props.theme.grey};
  margin: 0;
`;

const DescriptionWrapper = styled.div`
  margin: 15px 0px 0px 20px;
`;

const InfoContainer = () => (
  <Wrapper>
    <Item>
      <StyledFontAwesomeIcon icon={faMapMarkerAlt} />
      <DescriptionWrapper>
        <Subtitle>UPIITA IPN</Subtitle>
        <p>Descripcion</p>
      </DescriptionWrapper>
    </Item>
    <Item>
      <StyledFontAwesomeIcon icon={faCalendarAlt} />
      <DescriptionWrapper>
        <Subtitle>3 dias de actividades</Subtitle>
        <p>Descripcion</p>
      </DescriptionWrapper>
    </Item>
    <Item>
      <StyledFontAwesomeIcon icon={faMicrophoneAlt} />
      <DescriptionWrapper>
        <Subtitle>Mas de 10 speakers</Subtitle>
        <p>Descripcion</p>
      </DescriptionWrapper>
    </Item>
    <Item id="last">
      <StyledFontAwesomeIcon icon={faTools} />
      <DescriptionWrapper>
        <Subtitle>5 workshops</Subtitle>
        <p>Descripcion</p>
      </DescriptionWrapper>
    </Item>
  </Wrapper>
);

export default InfoContainer;
