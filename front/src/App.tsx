import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about-page/index";
import ContactPage from "./pages/contact-page/index";
import AgilePage from "./pages/agile-page/index";
import ScrumPage from "./pages/scrum-page/index";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<AgilePage />} />
          <Route path="/scrum" element={<ScrumPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
