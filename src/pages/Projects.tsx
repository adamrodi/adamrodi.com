import { Title, SimpleGrid, Card, Text, Badge } from "@mantine/core";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "multiplayer-game-server",
    title: "Multiplayer Game Server",
    summary: "Real-time Rust backend with WebSockets and matchmaking.",
    tags: ["Rust", "Axum", "Tokio", "React"],
  },
  {
    slug: "opensearch-troubleshooting-bot",
    title: "AWS OpenSearch Troubleshooting Bot",
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
        {projects.map((project) => (
          <Card
            key={project.slug}
            component={Link as any}
            to={`/projects/${project.slug}`}
            withBorder
            radius="lg"
            shadow="sm"
            p="lg"
            state ={{ from: "projects" }}
          >
            <Title order={4} mb="xs">
              {project.title}
            </Title>
            <Text c="dimmed" mb="sm">
              {project.summary}
            </Text>
            <div>
              {project.tags.map((t) => (
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
