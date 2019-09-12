import React from "react";
import styled from "styled-components";
import Speaker from "../components/speaker";
import EnriqueDevars from "../images/Enrique_Devars.jpg";
import Fausto_Romero from "../images/Fausto_Romero.jpg";
import DiegoBarriga from "../images/DiegoBarriga.jpg";
import PaulAguilar from "../images/PaulAguilar.png";
import Jorge_Hernandez from "../images/Jorge_Hernandez.jpg";
import Axel_Vargas_Sosa from "../images/Axel_Vargas_Sosa.jpg";
import Carlos_Ramirez_Cardona from "../images/Carlos_Ramirez_Cardona.jpg";

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
        link="https://forms.gle/cEYek76jzxhdEgQDA"
        description="Definición del diseño, Programas de Diseño 3D, FreeCAD, Diseñó Libre, Cultura Libre"
        speaker="Diseñador CAD/CAM en BERSERK.DESIGN y CAD/AM en Ixel Paredes. Ha participado en otros eventos como el Congreso de Ingenieros Industriales de Guanajuato en la Escuela de Invierno de Robótica."
      ></Speaker>
      <Speaker
        image={EnriqueDevars}
        title="Érase una vez Open Source"
        name="Enrique Devars Caballero"
        date="18 de septiembre, 2019"
        time="14:30 hrs"
        link="https://forms.gle/eeEGQ9PKeXndeU1LA"
        description="La fascinante historia de la evolución y el impacto del software libre."
        speaker="Miembro de Open Source, Fullstack developer, entusiasta de la tecnología y amante del chocolate. 
        "
      ></Speaker>
      <Speaker
        image={Fausto_Romero}
        title="Introducción al control de versiones con Git"
        name="José Fausto Romero Lujambio"
        date="18 de septiembre, 2019"
        time="16:00 hrs"
        link="https://forms.gle/fZCzPLMnW5PGjuUs6"
        description="Eficiencia y confiabilidad del manejo de versiones de aplicaciones a través de Git"
        speaker="Estudiante mecatrónico, programador por convicción y no por circunstancia, amante de las gorras."
      ></Speaker>
      <Speaker
        image={DiegoBarriga}
        title="Software Libre para sobrevivir a la universidad"
        name="Diego Alberto Barriga Martínez"
        date="18 de septiembre, 2019"
        time="17:30 hrs"
        link="https://forms.gle/Em6CEgwjJ3wqXbdg8"
        description="Poner a disposición del público estudiantil diferentes herramientas de software libre, aplicadas a las ingenierías, como alternativas para el desarrollo de trabajos escolares, proyectos y posible adopción para la vida diaria."
        speaker="Pasante de Ing. en Computación en la FI-UNAM. Apasionado por el software libre, procesamiento del lenguaje natural aplicado a lenguas mexicanas y programación en python. Es parte de la Comunidad Elotl, miembro del laboratorio de desarrollo e investigación de software libre y tesorero del capítulo estudiantil de la ACM UNAM-FI."
      ></Speaker>
      <Speaker
        title="Ciberseguridad y Open Source"
        name="Ing. Juan Carlos Ramírez Cardona"
        image={Carlos_Ramirez_Cardona}
        date="19 de septiembre, 2019"
        time="14:30 hrs"
        description=": El uso de herramientas Open Source para la detección de amenazas de ciberseguridad y la estrategia de seguridad para las empresas al utilizar software Open Source."
        link="https://forms.gle/o5nDVfttYGnPreav9"
        speaker="Ingeniero en comunicaciones y electrónica egresado del IPN, Especialista en seguridad de la información con 5 años de experiencia en seguridad ofensiva, trabajando para la iniciativa privada y el sector gubernamental, entusiasta de la tecnología, el cine y la música con certificaciones en CEH, CHFI, Security+ y actual aspirante a la certificación OSCP."
      ></Speaker>
      <Speaker
        image={PaulAguilar}
        title="The Firefox Privacy Guide For Dummies!"
        name="Paul Sebastian Aguilar Enriquez"
        date="19 de septiembre, 2019"
        time="16:00 hrs"
        link="https://forms.gle/BmvLW5NLZiKpTCZXA"
        description="Proporcionar una guía sencilla (en la medida de lo posible) sobre una configuración mejorada de la privacidad del navegador web Firefox procurando rompe el menor número posible de sitios web."
        speaker="Paul Aguilar. Estudiante de Ing. en Computación en la FI-UNAM y de Matemáticas en la FC-UNAM. Colaborador en LIDSOL y Comunidad Elotl, a veces en Mozilla México. Miembro de la familia SocialTIC en el área de Seguridad Digital."
      ></Speaker>
      <Speaker
        image={Jorge_Hernandez}
        title="Open Source: Un estilo de vida"
        name="Jorge Hernandez Cigarroa"
        date="19 de septiembre, 2019"
        time="17:30 hrs"
        link="https://forms.gle/4iLkXFDYt525jBai7"
        description="En esta conferencia se abordará contenido sobre lo que es el
        open source, cómo puede ayudarte esta filosofía y modelo en
        tu vida estudiantil, laboral asi como también en las
        comunidades; beneficios, desventajas y casos de uso
        compartiendo ejemplos y sugerencias sobre proyectos Open
        Source.
        "
        speaker="
        iembro de GDG IPN, Estudiante de la UPIICSA
Jefe de área de sistemas de la información en contax 2017-2018
Área de sistemas de la información en contax 2017"
      ></Speaker>
      <Speaker
        image={Axel_Vargas_Sosa}
        title="¡Blockchain a la vista!"
        name="Jorge Hernandez Cigarroa"
        date="19 de septiembre, 2019"
        time="17:30 hrs"
        link="https://forms.gle/nkQEftZiYkEJnnUE6"
        description="
        Se explicará brevemente el origen y funcionamiento de Blockchain,el fenómeno de las criptomonedas, cómo comprarlas,¿qué es un Smart contracts?,¿qué es una Dapps?, Solidity y cómo hacer un “hola mundo”
        "
        speaker="Soy un emprendedor y artista tecnológico. Me he desarrollado en el mundo
        empresarial del software desde los 18 años algo de lo más relevante es
        haber sido desarrollador de software y analista de DB en Mediaccess,
        desarrollador de IA Jr. en Empower Data, empecé adentrarme en
        Blockchain cómo Co-fundador de Electchain.io el cual fue publicado en
        diversos medios digitales cómo “Entrepreneur en español”, “El financiero”,
        “Forbes”, “El criptógrafo” y algunos más, apoyando en el desarrollo de una
        ICO para Kapytal y actualmente soy CEO & co-fundador de Itzamná
        además estoy incursionando cómo consultor de Blockchain."
      ></Speaker>
    </SpeakersWrapper>
  </>
);

export default Speakers;
