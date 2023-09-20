import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../common/styles/theme";
import SidebarMenu, { PageContent } from "../../components/SidebarMenu";

const scrumContent: PageContent[] = [
  {
    title: "What is Scrum?",
    body: "Scrum is a way of planning and executing work that results in value.\nIt is a framework that aims to make work more efficient and less stressful while producing better results.\n\nThe approach differs from more traditional frameworks like Six Sigma or CMMI in that it emphasizes quick initiation, iterations, and continuous improvement rather than the meticulous planning, linear progression, and extensive reporting and documentation required by these traditional methodologies",
  },
  {
    title: "The 5 Scrum Values",
    body: "Scrum values are a set of guiding principles that underpin the Scrum framework, fostering a collaborative and effective working environment. There are five Scrum values:\n\nCommitment: Scrum encourages team members to be committed to achieving the goals and objectives they set. Commitment means being dedicated to delivering value, meeting Sprint goals, and continuously improving the work process.\n\nCourage: Courage in Scrum means having the confidence to confront challenges and make difficult decisions. Team members should feel empowered to raise issues, address impediments, and take calculated risks to achieve the Sprint goals.\n\nFocus: Scrum values focus on doing meaningful work and avoiding distractions. Team members concentrate on the tasks at hand, ensuring they contribute to the Sprint goal and add value to the product.\n\nOpenness: Openness promotes transparency and honest communication within the Scrum Team and with stakeholders. Team members should be open about progress, challenges, and uncertainties, as this helps identify problems early and find collaborative solutions.\n\nRespect: Respect is about valuing the contributions and perspectives of all team members, regardless of their role or expertise. It also extends to respecting the Scrum framework and its principles. When team members respect each other and the framework, it leads to a more productive and collaborative work environment.\n\nThese Scrum values guide the behavior and interactions of individuals and teams within the Scrum framework. They promote a culture of trust, accountability, and continuous improvement, which are essential for the successful implementation of Scrum and the delivery of valuable products.",
  },
  {
    title: "The 3 Pilars of Scrum",
    body: "The three pillars – Transparency, Inspection, and Adaptation – work in harmony to keep Scrum projects agile and responsive. They empower teams to navigate the complexities of modern work environments by providing a clear view of where they're headed, regular check-ins to maintain quality, and the flexibility to adjust course as needed.\n\nTransparency: Imagine a glass house where every detail is visible to everyone inside. In Scrum, transparency means that every aspect of a project is clear and easily understandable. This includes the goals, progress, obstacles, and even the work itself. Transparency ensures that team members are on the same page, stakeholders are informed, and everyone knows where the project stands at any given moment. Without this pillar, misunderstandings and miscommunication can lead to chaos.\n\nInspection: In Scrum, regular inspection is like quality control for a project. It involves frequently checking the work being done and the progress being made. By doing this, the team can identify any deviations from the plan early on and address them promptly. This continuous evaluation helps ensure that the project stays on track and that the end result meets the desired quality standards. Think of it as a chef taste-testing a dish while it's being prepared to make sure it turns out just right.\n\nAdaptation: Change is inevitable, and Scrum acknowledges this by embracing adaptability as its third pillar. If during inspection, the team discovers that something isn't going as planned or that new information requires a shift in direction, Scrum allows for quick adjustments. This adaptability ensures that the project remains aligned with the evolving needs and priorities of the stakeholders. It's like a GPS system that recalculates the route when you take a wrong turn, helping you still reach your destination.",
  },
  {
    title: "The Srum Team",
    body: "These roles work closely together to ensure that the Scrum Team delivers value to the customer in an iterative and incremental manner. The Product Owner defines what needs to be done, the Scrum Master ensures that the Scrum process is followed, and the Development Team carries out the work. Collaboration, communication, and shared responsibility among these roles are key to the success of the Scrum Team in delivering high-quality products.\n\nProduct Owner: The Product Owner is like the captain of the ship. They are responsible for defining and prioritizing the items on the product backlog, which is a list of features, user stories, or tasks that need to be completed. The Product Owner represents the voice of the customer and stakeholders, ensuring that the team works on the most valuable and important tasks first. They also provide clarity on project goals and objectives.\n\nScrum Master: The Scrum Master is the team's coach and facilitator. They ensure that the Scrum framework is understood and followed. Their role is to remove obstacles and distractions that may hinder the team's progress. Scrum Masters also promote continuous improvement within the team, helping them become more effective and self-organized. Think of them as a mentor and protector of the Scrum process.\n\nDevelopers: The Development Team is like the engine of the Scrum Team. It consists of cross-functional members who have all the skills necessary to turn product backlog items into a potentially shippable product increment. They work collaboratively to plan and execute the work during each sprint, which is a time-boxed period of usually 2-4 weeks. The Development Team is self-organizing and responsible for deciding how to best accomplish the work. They are also accountable for the quality and completeness of the product increment.",
  },
  {
    title: "The 5 Scrum Events",
    body: "The five Scrum events provide structure to the Scrum framework, ensuring that the team works collaboratively, remains adaptable, and regularly inspects and adapts both the product and their processes. Together, they help teams deliver valuable and high-quality products iteratively and incrementally while continuously improving their work.\n\nSprint: A Sprint is a time-boxed period, typically 2-4 weeks in length, during which a Scrum Team works to complete a set of backlog items (user stories, features, tasks, etc.) that contribute to a potentially shippable product increment. The purpose of a Sprint is to provide focus, create a predictable cadence for delivery, and encourage the team to produce a working product increment within a short time frame.\n\nSprint Planning: This event marks the beginning of each Sprint. During Sprint Planning, the Product Owner and the Development Team collaborate to select backlog items to work on during the upcoming Sprint. The team defines the Sprint Goal and creates a plan for how they will achieve it. The purpose of Sprint Planning is to align the team on what needs to be done and how to do it.\n\nDaily Scrum (Daily Standup): The Daily Scrum is a short, daily meeting (usually 15 minutes or less) held by the Development Team. Each team member shares what they worked on yesterday, what they plan to work on today, and any impediments or blockers they are facing. The purpose of the Daily Scrum is to promote transparency, keep the team synchronized, and identify and address issues early.\n\nSprint Review: At the end of each Sprint, the Scrum Team holds a Sprint Review meeting. During this event, the Development Team demonstrates the work they have completed during the Sprint, and stakeholders provide feedback. The purpose of the Sprint Review is to inspect and adapt the product, gather feedback, and ensure alignment with stakeholder expectations.\n\nSprint Retrospective: Following the Sprint Review, the Scrum Team conducts a Sprint Retrospective. In this meeting, team members reflect on their processes and teamwork during the Sprint. They identify what went well, what could be improved, and develop action items for continuous improvement in the next Sprint. The purpose of the Sprint Retrospective is to foster a culture of continuous improvement and to make the team more effective and efficient over time.",
  },
  {
    title: "The 3 Scrum Artifacts",
    body: "Scrum defines three key artifacts that serve as information radiators and provide transparency within the Scrum framework.\nThese artifacts are essential for ensuring transparency, collaboration, and alignment within the Scrum Team and with stakeholders. They help prioritize work, provide a clear plan for the Sprint, and produce a tangible product increment at the end of each Sprint, allowing for continuous delivery and feedback.\n\nProduct Backlog: The Product Backlog is like a to-do list for the product. It's an ordered list of all the features, user stories, enhancements, and bug fixes that could potentially be part of the product. The items in the backlog are prioritized by the Product Owner based on their value and importance. The purpose of the Product Backlog is to provide a single source of truth for what needs to be built or improved in the product, allowing the team to understand and plan the work.\n\nSprint Backlog: The Sprint Backlog is a subset of items from the Product Backlog that the Development Team commits to completing during a specific Sprint. It's like a short-term task list for the Sprint. The team selects these items during Sprint Planning and decomposes them into tasks as needed. The purpose of the Sprint Backlog is to give the team a clear plan for what they will work on during the Sprint and help them stay focused on the immediate goals.\n\nIncrement: The Increment is the sum of all the completed and potentially shippable product backlog items at the end of a Sprint. It represents the tangible progress made during the Sprint. The Increment is what the team aims to deliver at the end of each Sprint, and it should be in a usable condition. The purpose of the Increment is to provide a visible and working version of the product that can be reviewed during the Sprint Review and potentially released to users.",
  },
];

const ScrumPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<PageContent | null>(null);

  return (
    <ScrumContainer data-alias="scrum-container">
      <SidebarMenu
        data-alias="sidebar-menu-agile-page"
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        menuItems={scrumContent}
        listBgColor={Theme.colors.primary_dark}
        itemBgColor={Theme.colors.highlight}
        itemBgColorHover={Theme.colors.branding}
        itemBdrColor={Theme.colors.branding}
        itemColor={Theme.colors.primary}
      />
      <MainContent data-alias="main-content">
        {selectedTopic ? (
          <>
            <Headline>{selectedTopic.title}</Headline>
            <p>
              {selectedTopic.body.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </>
        ) : (
          <>
            <Headline>{scrumContent[0].title}</Headline>
            <p>
              {scrumContent[0].body.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </>
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

const Headline = styled.h2`
  margin-bottom: 10px;
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
