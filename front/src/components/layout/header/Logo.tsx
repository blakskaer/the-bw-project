import React from "react";
import styled from "styled-components";
import Theme from "../../../theme";
import { Link } from "react-router-dom";

interface LogoProps {
  onLogoClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onLogoClick }) => {
  return (
    <StyledLink to="/">
      <LogoContainer onClick={onLogoClick} data-alias="logo-container">
        <BrandName>BW</BrandName>
      </LogoContainer>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.secondary};
  background-color: ${Theme.colors.branding};
  height: 100%;
  width: auto;
  padding: 5%;
  cursor: pointer;
`;

const BrandName = styled.h1`
  display: inline-block;
`;

const TagLine = styled.p`
  display: inline-block;
`;

export default Logo;
