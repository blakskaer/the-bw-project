import React from "react";
import styled from "styled-components";
import Theme from "../common/styles/theme";
import WaterJumbo from "../assets/images/water-jumbo.jpeg";

const HomePage = () => {
  return (
    <Hero data-alias="hero-section">
      <Overlay data-alias="hero-overlay">
        <Heading data-alias="hero-heading" fontSize="100px">
          Be Water
        </Heading>
        <Subtitle data-alias="hero-subtitle" fontSize="32px">
          Agile Consultancy
        </Subtitle>
      </Overlay>
    </Hero>
  );
};

interface TextProps {
  color?: string;
  fontSize?: string;
}

const Hero = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${WaterJumbo});
  background-size: cover;
`;

const Overlay = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(81, 94, 196, 0.4);
  // background: lightblue;
  // background-color: rgba(173, 216, 230, 0.5);
  color: white;
`;

const Heading = styled.h1<TextProps>`
  color: ${({ color }) => color || Theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize || Theme.scaledText.fiveHundred};
  margin: 30px 0;
`;

const Subtitle = styled.h3<TextProps>`
  color: ${({ color }) => color || Theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize || Theme.scaledText.twoHundred};
  margin: 0;
`;

export default HomePage;
