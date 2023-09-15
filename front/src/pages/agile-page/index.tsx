import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../theme";

interface AContent {
  title: string;
  body: string;
}

const agileContent: AContent[] = [
  { title: "Summersby", body: "Summersby smells like agile" },
  {
    title: "Roskilde Festival",
    body: "Roskilde Festival smells like agile too",
  },
  {
    title: "Le Petit Prince",
    body: "Le Petit Prince se tres, tres petit, hein",
  },
];

const AgilePage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<AContent | null>(null);

  return (
    <AgileContainer data-alias="agile-container">
      <SidebarMenu data-alias="sidebar-menu">
        {agileContent.map((ACItem: AContent) => (
          <MenuItem
            data-alias="menu-item"
            key={ACItem.title}
            onClick={() => setSelectedTopic(ACItem)}
          >
            {ACItem.title}
          </MenuItem>
        ))}
      </SidebarMenu>
      <MainContent data-alias="main-content">
        {selectedTopic ? (
          <div>
            <h2>{selectedTopic.title}</h2>
            <p>{selectedTopic.body}</p>
          </div>
        ) : (
          <p>Please select a topic from the menu</p>
        )}
      </MainContent>
    </AgileContainer>
  );
};

const AgileContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.background};
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  height: 100%;
  background-color: ${Theme.colors.highlight};
  padding-top: 5%;
  order: 2;
`;

const MenuItem = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 10%;
  background-color: ${Theme.colors.highlight};
  border-bottom: 1px solid ${Theme.colors.branding};
  cursor: pointer;
  color: ${Theme.colors.primary};

  &:hover {
    background-color: ${Theme.colors.branding};
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  order: 1;
  padding: 10%;
`;

export default AgilePage;
