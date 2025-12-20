import { AppShell, Box, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppShell header={{ height: 80 }} padding={0} >
      <AppShell.Header bd={0} px="16px">
        <Nav />
      </AppShell.Header>

      <AppShell.Main>
        {/*
          Flex column layout:
          - Long pages: footer appears after content (scroll to bottom)
          - Short pages: footer is pushed to bottom of viewport
        */}
        <Box style={{ minHeight: "calc(100vh - 80px)", display: "flex", flexDirection: "column" }}>
          <Box style={{ flex: 1 }}>
            <Container size="lg">
              <Outlet />
            </Container>
          </Box>
          <Footer />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
