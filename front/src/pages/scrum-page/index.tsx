import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../theme";

interface SContent {
  title: string;
  body: string;
}

const initialContent: SContent = {
  title: "What is Scrum?",
  body: "Scrum is a way of planning and executing work. It is a framework that aims to make work more efficient and less stressfuld while producing better results.\nThe approach differs from more traditional frameworks like Six Sigma or CMMI in that it emphasizes quick initiation, iterations, and continuous improvement rather than the meticulous planning, linear progression, and extensive reporting and documentation required by these traditional methodologies",
};
const scrumContent: SContent[] = [
  {
    title: "The 3 Pilars of Scrum",
    body: "The Monkey Forest stinks of monkeys",
  },
  { title: "The Srum team", body: "Forest Gump stinks indefinably" },
  {
    title: "The Scrum artifacts",
    body: "Nottingham Forest stinks of monkeys too",
  },
  { title: "The five Scrum events", body: "Forest Gump stinks indefinably" },
];

const ScrumPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<SContent | null>(null);

  return (
    <ScrumContainer data-alias="scrum-container">
      <SidebarMenu data-alias="sidebar-menu">
        {scrumContent.map((SCItem: SContent) => (
          <MenuItem
            data-alias="menu-item"
            key={SCItem.title}
            onClick={() => setSelectedTopic(SCItem)}
          >
            {SCItem.title}
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
          <div>
            <h2>{initialContent.title}</h2>
            <p>
              {initialContent.body.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        )}
      </MainContent>
    </ScrumContainer>
  );
};

const ScrumContainer = styled.div`
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
  background-color: lightblue;
  padding-top: 5%;
  order: 2;
`;

const MenuItem = styled.div`
  display: flex;
  width: 100%;
  padding: 5% 10%;
  // background-color: ${Theme.colors.highlight};
  border-bottom: 1px solid ${Theme.colors.highlight_dark};
  cursor: pointer;
  color: ${Theme.colors.primary};

  &:hover {
    background-color: ${Theme.colors.highlight_dark};
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

export default ScrumPage;
