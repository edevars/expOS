import React from "react";
import styled from "styled-components";
import Speaker from "../components/speaker";
import EnriqueDevars from "../images/Enrique_Devars.jpg";
import Fausto_Romero from "../images/Fausto_Romero.jpg";
import DiegoBarriga from "../images/DiegoBarriga.jpg";
import PaulAguilar from "../images/PaulAguilar.png";
import Jorge_Hernandez from "../images/Jorge_Hernandez.jpg";
import Axel_Vargas_Sosa from "../images/Axel_Vargas_Sosa.jpg";

const Title = styled.h1`
  color: ${props => props.theme.color1};
  text-align: center;
  font-size: 5rem;
  @media screen and (max-width: 425px) {
    font-size: 3rem;
  }
`;

const SpeakersWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 50px;
  justify-items: center;

  @media screen and (max-width: 1580px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

const Speakers = () => (
  <>
    <Title>Speakers</Title>
    <SpeakersWrapper>
      <Speaker
        name="Manuel Alejandro Alvarez Vargas"
        title="Diseño Libre: FreeCAD"
        date="18 de septiembre, 2019"
        time="13:00 hrs"
        link="https://docs.google.com/forms/d/1BBCetbUUvN9e7HgL3Wcv18f8_jsyKpDD08jQkdUr1O0/prefill"
      ></Speaker>
      <Speaker
        image={EnriqueDevars}
        title="Érase una vez Open Source"
        name="Enrique Devars Caballero"
        date="18 de septiembre, 2019"
        time="14:30 hrs"
        link="https://docs.google.com/forms/d/1BBCetbUUvN9e7HgL3Wcv18f8_jsyKpDD08jQkdUr1O0/prefill"
      ></Speaker>
      <Speaker
        image={Fausto_Romero}
        title="Introducción al control de versiones con Git"
        name="José Fausto Romero Lujambio"
        date="18 de septiembre, 2019"
        time="16:00 hrs"
        link="https://docs.google.com/forms/d/1wCOWwIZefes1B2xrNCm33VWIsC5rxfeprIyE-1hOxc8/prefill"
      ></Speaker>
      <Speaker
        image={DiegoBarriga}
        title="Software Libre para sobrevivir a la universidad"
        name="Diego Alberto Barriga Martínez"
        date="18 de septiembre, 2019"
        time="17:30 hrs"
        link="https://docs.google.com/forms/d/1A8us8pNPmmi8QiC_e8GHStmj3Eitc4gbcv5LTFuFKlY/prefill"
      ></Speaker>
      <Speaker
        title="Ciberseguradad"
        name="Miguel Angel Gaspar Galicia"
        date="19 de septiembre, 2019"
        time="14:30 hrs"
        link="https://docs.google.com/forms/d/1m6ODwsGfZxVEmAmn2EEWBRnJ7FK8TRS22Zo6l8li2rM/prefill"
      ></Speaker>
      <Speaker
        image={PaulAguilar}
        title="The Firefox Privacy Guide For Dummies!"
        name="Paul Sebastian Aguilar Enriquez"
        date="19 de septiembre, 2019"
        time="16:00 hrs"
        link="https://docs.google.com/forms/d/1h-16jUxKJxtGITw4UtZUVzf-7wW3z91CkNweFpA3DuU/prefill"
      ></Speaker>
      <Speaker
        image={Jorge_Hernandez}
        title="Open Source: Un estilo de vida"
        name="Jorge Hernandez Cigarroa"
        date="19 de septiembre, 2019"
        time="17:30 hrs"
        link="https://docs.google.com/forms/d/1YQijiEF6pPGa9obdK8Xppl2KXmielnufGeuoP0y9-sA/prefill"
      ></Speaker>
      <Speaker
        image={Axel_Vargas_Sosa}
        title='¡Blockchain a la vista! Que es Blockchain y un "Hola mundo" sobre ella'
        name="Jorge Hernandez Cigarroa"
        date="19 de septiembre, 2019"
        time="17:30 hrs"
        link="https://docs.google.com/forms/d/1PAafwGd0JK4Itxitgk4lF5w0LTKveekp1ysvbGTFi5o/prefill"
      ></Speaker>
    </SpeakersWrapper>
  </>
);

export default Speakers;
