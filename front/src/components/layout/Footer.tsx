import styled from "styled-components";
import Theme from "../../common/styles/theme";
import { getCurrentYear } from "../../common/helpers/time";

const Footer = () => {
  const currentYear = getCurrentYear();
  return <FooterContainer>&copy; BE WATER {currentYear}</FooterContainer>;
};

interface FooterGridProps {
  background?: string;
}

const FooterContainer = styled.footer<FooterGridProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background || Theme.colors.tertiary};
  height: 5vh;
`;

export default Footer;
