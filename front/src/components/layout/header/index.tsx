import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./navbar";
import Theme from "../../../theme";
import { MenuItem } from "../../../common/hooks/useSelectableList";

interface ContainerProps {
  "data-alias"?: string;
  background?: string;
  scrolled?: boolean;
}

const Header: React.FC = React.memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleNavItemClick = (item: MenuItem | null) => {
    setScrolled(true);
    setSelectedItem(item);
  };

  const handleLogoClick = () => {
    setScrolled(true);
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrolled(currentScrollY > 0);
    };
    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container scrolled={scrolled} data-alias="header-container">
      <HeaderGrid>
        <Logo onLogoClick={handleLogoClick} />
        <Navbar
          onNavItemClick={handleNavItemClick}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </HeaderGrid>
    </Container>
  );
});

const Container = styled.header<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: ${({ scrolled }) => (scrolled ? "10vh" : "100vh")};
  background: ${({ background, scrolled }) =>
    scrolled ? Theme.colors.primary_dark : background || Theme.colors.primary};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"};
  transition: height 0.3s ease-in-out, background 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  height: 100%;
`;

export default Header;
