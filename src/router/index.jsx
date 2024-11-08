import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";
import ProjectsPage from "../views/ProjectsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "projects",
      element: <ProjectsPage />,
    },
]);

export default router