import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../common/styles/theme";
import SidebarMenu from "../../components/SidebarMenu";
import { PageContent } from "../../components/SidebarMenu";
import blogContent from "./blogContent.json";

const AgilePage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<PageContent | null>(null);

  // Function to parse and render subtitles
  const renderBodyText = (text: string) => {
    // Split the text into sections based on "**Subtitle**" using a regular expression
    const sections = text.split(/\*\*([^*]+)\*\*/);

    return sections.map((section, index) => {
      if (index % 2 === 0) {
        // This is not a subtitle, render it as a paragraph
        return <p key={index}>{section}</p>;
      } else {
        // This is a subtitle, render it in bold
        return (
          <Subtitle key={index}>
            <strong>{section}</strong>
          </Subtitle>
        );
      }
    });
  };

  return (
    <AgileContainer data-alias="agile-container">
      <SidebarMenu
        data-alias="sidebar-menu-agile-page"
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        menuItems={blogContent}
        listBgColor={Theme.colors.highlight}
        itemBgColor={Theme.colors.branding}
        itemBgColorHover={Theme.colors.primary_dark}
        itemBdrColor={Theme.colors.branding}
        itemColor={Theme.colors.primary}
      />
      <MainContent data-alias="main-content">
        {selectedTopic ? (
          <div>
            <Headline>{selectedTopic.title}</Headline>
            {/* Use the renderBodyText function to render subtitles */}
            {renderBodyText(selectedTopic.body)}
          </div>
        ) : (
          <div>
            <Headline>{blogContent[0].title}</Headline>
            {/* Use the renderBodyText function to render subtitles */}
            {renderBodyText(blogContent[0].body)}
          </div>
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

const Headline = styled.h2`
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  // margin-top: 20px;
  margin: 20px 0 5px;
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
