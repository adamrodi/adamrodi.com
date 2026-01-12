import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppShell header={{ height: 80 }} padding={0}>
      <AppShell.Header bd={0} p={0} m={0}>
        <Nav />
      </AppShell.Header>
      <AppShell.Main px={0}>
        <Outlet />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
