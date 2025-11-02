import { Title, SimpleGrid } from "@mantine/core";
import ProjectCard from "../components/ProjectCard";

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
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            tags={project.tags}
            link={`/projects/${project.slug}`}
            state={{ from: "projects" }}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
