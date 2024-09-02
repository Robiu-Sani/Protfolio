import { createBrowserRouter } from "react-router-dom";
import HomeRoot from "../LandingPages/HomeRoot";
import Error from "./Error";
import Home from "../LandingPages/Home/Home";
import About from "../LandingPages/About/About";
import Projects from "../LandingPages/Projects/Projects";
import Skills from "../LandingPages/Skills/Skills";
import Contact from "../LandingPages/Contact/Contact";
import Test from "../Test";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoot></HomeRoot>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
      {
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/test",
    element: <Test></Test>,
  },
]);
