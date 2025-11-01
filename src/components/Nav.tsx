import { Container, Group, Anchor, Button } from "@mantine/core";

export default function Nav() {
  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" align="center" h="100%">
        <Anchor href="/" fw={700} fz="lg">
          AR
        </Anchor>
        <Group gap="md">
          <Anchor href="/">Home</Anchor>
          <Anchor href="#projects">Projects</Anchor>
          <Anchor href="#contact">Contact</Anchor>
          <Button
            component="a"
            href="/Adam_Rodi_Resume.pdf"
            variant="light"
            size="sm"
          >
            Resume
          </Button>
        </Group>
      </Group>
    </Container>
  );
}