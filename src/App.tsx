import { AppShell, Box, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <AppShell header={{ height: 80 }} padding={0}>
      <AppShell.Header bd={0} px="16px">
        <Nav />
      </AppShell.Header>

      <AppShell.Main>
        <Box>
          <Container size="lg">
            <Outlet />
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
