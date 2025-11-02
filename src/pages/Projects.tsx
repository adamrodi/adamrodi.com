import { Title, SimpleGrid, Card, Text, Badge } from "@mantine/core";
import { Link } from "react-router-dom";

const items = [
  {
    slug: "multiplayer-game-server",
    title: "Multiplayer Game Server",
    summary: "Real-time Rust backend with WebSockets and matchmaking.",
    tags: ["Rust", "Axum", "Tokio", "React"],
  },
  {
    slug: "opensearch-diagnostics-bot",
    title: "AWS OpenSearch Diagnostics Bot",
    summary: "Lex + Lambda chatbot for automated cluster health diagnostics.",
    tags: ["AWS", "Lex", "Lambda", "CloudWatch"],
  },
  {
    slug: "zebrafish-data-mining",
    title: "Zebrafish Neural Data Mining",
    summary: "Unsupervised clustering and visualization of imaging data.",
    tags: ["Python", "NumPy", "pandas", "matplotlib"],
  },
];

export default function Projects() {
  return (
    <>
      <Title order={1} mb="lg">
        Projects
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
        {items.map((p) => (
          <Card
            key={p.slug}
            component={Link as any}
            to={`/projects/${p.slug}`}
            withBorder
            radius="lg"
            shadow="sm"
            p="lg"
          >
            <Title order={4} mb="xs">
              {p.title}
            </Title>
            <Text c="dimmed" mb="sm">
              {p.summary}
            </Text>
            <div>
              {p.tags.map((t) => (
                <Badge key={t} variant="light" mr={6}>
                  {t}
                </Badge>
              ))}
            </div>
            <Text mt="md">Case study →</Text>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
