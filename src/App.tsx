import { AppShell, Container, Group, Anchor, Button, Box } from '@mantine/core';
import Home from './pages/Home';

export default function App() {
  return (
    <AppShell header={{ height: 56 }} padding="md">
      <AppShell.Header> ...header code... </AppShell.Header>
      <AppShell.Main>
        <Box style={{ background: 'var(--mantine-color-body)' }}>
          <Home />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}