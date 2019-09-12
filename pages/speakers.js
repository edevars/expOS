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
        image="data:image/png;base64,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"
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
