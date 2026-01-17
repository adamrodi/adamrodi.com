import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { Global } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        primaryColor: "amber",
        primaryShade: 7,
        black: "#0b0d10",
        white: "#ffffff",
        colors: {
          dark: [
            "#d5d7e0", // dark[0]
            "#acaebf", // dark[1]
            "#8c8fa3", // dark[2]
            "#666980", // dark[3]
            "#4d4f66", // dark[4]
            "#34354a", // dark[5]
            "#25262b", // dark[6]
            "#1a1b1e", // dark[7]
            "#141517", // dark[8]
            "#0b0d10", // darkest background
          ],

          amber: [
            "#fff8e1",
            "#ffefc2",
            "#fde59c",
            "#f9da74",
            "#f5cd4b",
            "#f0b429",
            "#d89e1f",
            "#b78319",
            "#8f6513",
            "#66480d",
          ],
        },
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
        headings: { fontWeight: "700" },
        defaultRadius: "lg",
        components: {
          Anchor: {
            styles: {
              root: {
                textDecoration: "none",
              },
            },
          },
        },
      }}
    >
      <Global
        styles={(theme) => ({
          "html, body": {
            backgroundColor: theme.colors.dark[8],
          },
          html: {
            scrollBehavior: "smooth",
          },
          "html:focus-within": { scrollBehavior: "smooth" },
          "@media (prefers-reduced-motion: reduce)": {
            "html, html:focus-within": { scrollBehavior: "auto" },
          },

          ":focus": { outline: "none" },
          ":focus-visible": {
            outline: `2px solid ${theme.colors.amber[5]}`,
            outlineOffset: "2px",
            borderRadius: "8px",
          },

          ".underlineLink": {
            position: "relative",
            textDecoration: "none",
            backgroundImage:
              "linear-gradient(var(--mantine-color-amber-5), var(--mantine-color-amber-5))",
            backgroundSize: "0% 2px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "no-repeat",
            transition: "background-size 200ms ease-in-out",
          },
          ".underlineLink:hover, .underlineLink:focus-visible": {
            backgroundSize: "100% 2px",
          },

          ".headerLink": {
            color: "var(--mantine-color-white)",
            opacity: 0.85,
            textDecoration: "none",
            backgroundImage: "none",
            transition: "color 200ms ease, opacity 200ms ease, transform 200ms ease",
          },
          ".headerLink:hover, .headerLink:focus-visible": {
            color: "var(--mantine-color-amber-4) !important",
            opacity: 1,
            transform: "translateY(-1px)",
          },

          ".footerLink": {
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--mantine-color-dimmed)",
            opacity: 0.85,
            backgroundImage: "none",
            transition: "color 200ms ease, opacity 200ms ease, transform 200ms ease",
          },
          ".footerLink:hover, .footerLink:focus-visible": {
            color: "var(--mantine-color-amber-5) !important",
            opacity: 1,
            transform: "translateY(-1px)",
          },
        })}
      />
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
