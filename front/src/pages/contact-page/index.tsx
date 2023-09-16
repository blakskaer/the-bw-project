import React from "react";
import styled from "styled-components";
import Theme from "../../common/styles/theme";
import LILogo from "../../assets/logos/LI-In-Bug.png";
import { Link } from "react-router-dom";
import Pen from "../../assets/images/pen.jpg";
import { contactData } from "./contactData";

interface TextProps {
  color?: string;
  fontSize?: string;
}

const ContactPage: React.FC = () => {
  return (
    <ContactContainer data-alias="hero-section">
      <Heading data-alias="contact-heading" fontSize="280%">
        {contactData.contactHeader}
      </Heading>
      <LinkedinLink
        href={contactData.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LILogo} alt="Linkedin logo" />
      </LinkedinLink>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${Theme.colors.highlight};
`;

const LinkedinLink = styled.a`
  width: 5%;
  height: auto;
`;

const Heading = styled.h6<TextProps>`
  color: ${({ color }) => color || Theme.colors.primary};
  font-size: ${({ fontSize }) => fontSize || Theme.scaledText.twoHundred};
  margin: 3% 0;
`;

export default ContactPage;
