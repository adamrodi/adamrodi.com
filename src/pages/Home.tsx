import { Container, Title, Text } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Title order={1} mb="xs">
        Adam Rodi
      </Title>
      <Text mb="xs">
        Computer Science & Data Science student building software and systems.
      </Text>
      <Text c="dimmed">AWS internship · Rust / React / C#</Text>
    </Container>
  );
}
