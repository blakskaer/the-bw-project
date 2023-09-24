import React from "react";
import styled from "styled-components";
import Theme from "../common/styles/theme";

export interface PageContent {
  title: string;
  body: string;
}

interface SidebarMenuProps {
  selectedTopic: PageContent | null;
  setSelectedTopic: (item: PageContent) => void;
  menuItems: PageContent[];
  listBgColor: string;
  itemBgColor: string;
  itemBgColorHover: string;
  itemBdrColor: string;
  itemColor: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  selectedTopic,
  setSelectedTopic,
  menuItems,
  listBgColor,
  itemBgColor,
  itemBgColorHover,
  itemBdrColor,
  itemColor,
}) => {
  return (
    <MenuList data-alias="sidebar-menu-list" bgColor={listBgColor}>
      {menuItems.map((item: PageContent) => (
        <MenuItem
          data-alias="menu-item"
          key={item.title}
          onClick={() => setSelectedTopic(item)}
          isSelected={selectedTopic === item}
          bgColor={itemBgColor}
          bdrColor={itemBdrColor}
          bgColorHover={itemBgColorHover}
          color={itemColor}
        >
          {item.title}
        </MenuItem>
      ))}
    </MenuList>
  );
};

interface MenuListProps {
  bgColor: string;
}

const MenuList = styled.ul<MenuListProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  height: 100vh;
  background-color: ${(props) => props.bgColor || Theme.colors.primary_dark};
  padding-top: 15%;
  order: 2;
`;

interface MenuItemProps {
  isSelected: boolean;
  bgColor: string;
  bdrColor: string;
  bgColorHover: string;
  color: string;
}

const MenuItem = styled.div<MenuItemProps>`
  display: flex;
  width: 100%;
  padding: 5% 10%;
  background-color: ${(props) => (props.isSelected ? props.bgColor : "")};
  border-bottom: 1px solid ${(props) => props.bdrColor || Theme.colors.branding};
  cursor: pointer;
  color: ${(props) => props.color || Theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.bgColorHover || Theme.colors.branding};
  }
`;

export default SidebarMenu;
