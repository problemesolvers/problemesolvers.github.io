import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Home from './Home';
import About from "./About";
import Docs from "./Docs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/docs",
          element: <Docs />,
        },
      ],
    },
  ]);
  