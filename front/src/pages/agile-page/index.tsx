import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../common/styles/theme";
import SidebarMenu from "../../components/SidebarMenu";
import { PageContent } from "../../components/SidebarMenu";

const agileContent: PageContent[] = [
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
  const [selectedTopic, setSelectedTopic] = useState<PageContent | null>(null);

  return (
    <AgileContainer data-alias="agile-container">
      <SidebarMenu
        data-alias="sidebar-menu-agile-page"
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        menuItems={agileContent}
        listBgColor={Theme.colors.highlight}
        itemBgColor={Theme.colors.branding}
        itemBgColorHover={Theme.colors.primary_dark}
        itemBdrColor={Theme.colors.branding}
        itemColor={Theme.colors.primary}
      />
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  order: 1;
  padding: 10%;
`;

export default AgilePage;
