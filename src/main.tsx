import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Global } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: "blue",
        primaryShade: 6,
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        headings: { fontWeight: "700" },
        defaultRadius: "lg",
        shadows: {
          sm: "0 4px 12px rgba(0,0,0,0.25)",
          md: "0 8px 24px rgba(0,0,0,0.28)",
        },
      }}
    >
      <Global
        styles={
          {
            /* Smooth scroll for hash links like /#contact */
            "html:focus-within": { scrollBehavior: "smooth" },
            "@media (prefers-reduced-motion: reduce)": {
              "html:focus-within": { scrollBehavior: "auto" },
            },

            /* Electric focus ring for keyboard users */
            ":focus": { outline: "none" },
            ":focus-visible": {
              outline: "2px solid #60a5fa",
              outlineOffset: "2px",
              borderRadius: "8px",
            },

            /* Subtle hover color for links */
            "a:hover": {
              textDecoration: "none",
              color: "#93c5fd",
            },
          }
        }
      />
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
