import styled from "styled-components";
import Theme from "../../common/styles/theme";
import WaterJumbo from "../../assets/images/water-jumbo.jpeg";
import { aboutData } from "./aboutData";

const AboutPage = () => {
  return (
    <AboutContainer data-alias="about-container">
      <ContentContainer data-alias="content-container">
        <TextContainer data-alias="text-container">
          <Headline data-alias="about-heading">
            {aboutData.aboutHeader}
          </Headline>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${Theme.colors.background};
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  height: 100%;
  padding: 10% 20%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${WaterJumbo});
  background-size: cover;
  height: 100%;
  margin-top: 10%;
  border-radius: 2%;
`;

const Headline = styled.h2`
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20% 0 0;

  h1 {
    margin-bottom: 2%;
  }
`;

export default AboutPage;
