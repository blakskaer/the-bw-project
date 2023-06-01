import React from "react";
import styled from "styled-components";
import Header from "./header/index";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer data-alias="layout-container">
      <Header data-alias="header" />
      <Main data-alias="main">{children}</Main>
      <Footer data-alias="footer" />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  height: 100vh;
  padding-top: 10vh;
`;

export default Layout;
