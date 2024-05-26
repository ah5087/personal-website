import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About/about";
import Experience from "../pages/Experience/experience";
import Projects from "../pages/Projects/projects";
import Layout from "../components/Layout/Layout";

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;
