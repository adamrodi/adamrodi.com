import { AppShell, Box, Container } from "@mantine/core";
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
    <AppShell header={{ height: 80 }} padding={0} >
      <AppShell.Header bd={0}>
        <Nav />
      </AppShell.Header>
      <AppShell.Main px={0}>
        <Box px={0} style={{ minHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>

            <Container size="lg" px={0}>
              <Outlet />
            </Container>

          <Footer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
