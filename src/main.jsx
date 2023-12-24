import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { router } from "./pages/_router";
import "./index.css";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme={"auto"}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

router.navigate(window.location.href.split("?")[1]?.split("=")[1]);
