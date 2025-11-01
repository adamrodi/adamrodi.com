import { AppShell, Box, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <AppShell header={{ height: 56 }} padding="md">

      <AppShell.Header>
        <Nav />
      </AppShell.Header>

      <AppShell.Main>
        <Box style={{ background: "var(--mantine-color-body)" }}>
          <Container size="lg" py="xl">
            <Outlet />
          </Container>
        </Box>
      </AppShell.Main>

    </AppShell>
  );
}
