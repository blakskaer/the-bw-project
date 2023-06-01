import React from "react";
import styled from "styled-components";
import Theme from "../../theme";
import WaterJumbo from "../../assets/images/water-jumbo.jpeg";
import { aboutData } from "./aboutData";

const AboutPage = () => {
  return (
    <AboutContainer data-alias="about-container">
      <ContentContainer>
        <TextContainer data-alias="text-container">
          <h1 data-alias="about-heading">{aboutData.aboutHeader}</h1>
          <p
            data-alias="about-text"
            dangerouslySetInnerHTML={{ __html: aboutData.aboutText }}
          />
        </TextContainer>
        <ImageContainer />
      </ContentContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.background};
  padding: 10% 0;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10% 30% 10%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WaterJumbo});
  background-size: cover;
  height: 80%;
  margin-top: 10%;
  border-radius: 2%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5% 0 0;

  h1 {
    margin-bottom: 2%;
  }
`;

export default AboutPage;
