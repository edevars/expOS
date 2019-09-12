import styled from "styled-components";

const SpeakerWrapper = styled.div`
  background-color: ${props => props.theme.light_dimmed};
  display: grid;
  max-width: 600px;
  grid-template: 1fr / 250px auto;
  grid-template-areas: "avatar info";
  -webkit-box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
  -moz-box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
  box-shadow: 0px 4px 26px 3px rgba(199, 199, 199, 1);
  padding: 0px 25px;
  @media screen and (max-width: 768px) {
    grid-template: 250px 1fr / auto;
    grid-template-areas: "avatar" "info";
  }
`;

const Profile = styled.img`
  grid-area: avatar;
  width: 200px;
  height: 200px;
  margin: auto auto;
  border-radius: 50%;
  object-fit: cover;
`;
const Info = styled.div`
  grid-area: info;
  width: 100%;
  .date {
    margin-top: 0;
    font-weight: bold;
    font-size: 0.8rem;
  }
  .name {
    color: ${props => props.theme.color3};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.color1};
  font-size: 1.85rem;
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

  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    margin: 0 auto;
    margin-bottom: 40px;
    width: calc(100% - 20px);
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Speaker = props => {
  return (
    <SpeakerWrapper>
      <ImageWrapper>
        <Profile
          src={
            props.image ||
            "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
          }
        ></Profile>
      </ImageWrapper>
      <Info>
        <Title>{props.title || "Titulo"}</Title>
        <p className="name">{props.name || "Nombre Speaker"}</p>
        <p className="date">
          {props.time || "00:00hrs"} | {props.date || "18 de septiembre 2019"}
        </p>
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
