import styled from "styled-components";

const SpeakerWrapper = styled.div`
  background-color: ${props => props.theme.light_dimmed};
  display: grid;
  max-width: 600px;
  grid-template: minmax(300px, 1fr) / 250px auto;
  grid-template-areas: "avatar info";
  margin-top: 60px;
  margin-right: 80px;
  -webkit-box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
  box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
`;

const Profile = styled.img`
  grid-area: avatar;
  width: 200px;
  height: 200px;
  margin: auto auto;
  border-radius: 50%;
`;
const Info = styled.div`
  grid-area: info;
  width: 100%;
`;

const Title = styled.h3`
  color: ${props => props.theme.color1};
  font-size: 2rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: ${props => props.theme.grey};
  font-size: 1rem;
`;

const Link = styled.a`
  display: block;
  width: calc(90% - 20px);
  font-size: 18px;
  background-color: ${props => props.theme.color2};
  color: ${props => props.theme.light};
  padding: 5px 10px;
  text-align: center;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Speaker = props => {
  return (
    <SpeakerWrapper>
      <Profile
        src={
          props.image ||
          "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
        }
      ></Profile>
      <Info>
        <Title>{props.title || "Titulo"}</Title>
        <p style={{fontWeight: "bold", fontSize: ".8rem"}}>{props.time || "00:00hrs"} | {props.date || "18 de septiembre 2019"}</p>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          laboriosam incidunt deserunt animi alias beatae ullam ducimus. Quas
          odio reprehenderit aliquid dignissimos quaerat dolorum, vitae neque,
          sed impedit deserunt culpa?
        </Description>
        <Link href={props.link || " "}>Asistir</Link>
      </Info>
    </SpeakerWrapper>
  );
};

export default Speaker;
