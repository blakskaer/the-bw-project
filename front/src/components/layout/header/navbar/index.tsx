import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Theme from "../../../../theme";
import { menuItems } from "./menuItems";
import {
  useSelectableList,
  MenuItem,
} from "../../../../common/hooks/useSelectableList";

interface NavbarProps {
  onNavItemClick: (item: MenuItem | null) => void;
  selectedItem: MenuItem | null;
  setSelectedItem: (item: MenuItem | null) => void;
}

const Navbar: React.FC<NavbarProps> = React.memo(
  ({ onNavItemClick, selectedItem, setSelectedItem }) => {
    const { listItems } = useSelectableList(
      menuItems,
      selectedItem,
      onNavItemClick,
      setSelectedItem
    );
    return (
      <NavContainer data-alias="navbar-container">
        <StyledUl>{listItems}</StyledUl>
      </NavContainer>
    );
  }
);

interface ContainerProps {
  color?: string;
}

interface UlProps {
  branding?: string;
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`;

const StyledUl = styled.ul<UlProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 80%;

  li {
    border: solid 1px transparent;
    border-radius: 1px;
    cursor: pointer;
    padding: 6px;
    color: ${({ color }) => color || Theme.colors.branding};
    transition: border-top-color 0.143s ease 0s,
      border-right-color 0.143s ease 0.143s,
      border-bottom-color 0.143s ease 0.286s,
      border-left-color 0.143s ease 0.429s;
    &.selected {
      border-left-color: ${({ branding }) => branding || Theme.colors.branding};
    }
  }

  li:hover {
    border-color: ${Theme.colors.branding};
  }
`;

export default Navbar;
