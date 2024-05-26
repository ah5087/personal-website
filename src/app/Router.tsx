import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  RouteObject,
} from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const Projects = React.lazy(() => import("../pages/Projects"));
const Experience = React.lazy(() => import("../pages/Experience"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="about" />,
  },
  {
    path: "about",
    element: (
      <React.Suspense>
        <About />
      </React.Suspense>
    ),
  },
  {
    path: "projects",
    element: (
      <React.Suspense>
        <Projects />
      </React.Suspense>
    ),
  },
  {
    path: "experience",
    element: (
      <React.Suspense>
        <Experience />
      </React.Suspense>
    ),
  },
];

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </HashRouter>
  );
};

export default Router;
