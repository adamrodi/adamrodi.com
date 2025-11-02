import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Title, Text, Anchor, Group, Badge, Divider } from "@mantine/core";
import { PROJECTS } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const cameFromHome = location.state?.from === "home";
  const project = slug ? PROJECTS[slug] : undefined;

  if (!project) {
    return (
      <>
        <Anchor
          component="button"
          type="button"
          onClick={() => navigate(cameFromHome ? "/" : "/projects")}
        >
          ← Back to {cameFromHome ? "Home" : "Projects"}
        </Anchor>
        <Title order={1} mt="sm">
          Project not found
        </Title>
        <Text c="dimmed" mt="xs">
          This project does not exist yet.
        </Text>
      </>
    );
  }

  return (
    <>
      <Anchor
        component="button"
        type="button"
        onClick={() => navigate(cameFromHome ? "/" : "/projects")}
      >
        ← Back to {cameFromHome ? "Home" : "Projects"}
      </Anchor>

      <Title order={1} mt="sm">
        {project.title}
      </Title>
      <Text c="dimmed" mt="xs">
        {project.summary}
      </Text>
      <Group mt="sm">
        {project.chips.map((c) => (
          <Badge key={c} variant="light">
            {c}
          </Badge>
        ))}
      </Group>

      <Group mt="md" gap="lg">
        {project.links?.demo && (
          <Anchor href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo
          </Anchor>
        )}
        {project.links?.repo && (
          <Anchor href={project.links.repo} target="_blank" rel="noreferrer">
            GitHub
          </Anchor>
        )}
      </Group>

      <Divider my="lg" />

      {project.sections.map((section) => (
        <section key={section.heading}>
          <Title order={3} mt="lg">
            {section.heading}
          </Title>
          <Text c="dimmed" mt="xs">
            {section.body}
          </Text>
        </section>
      ))}
    </>
  );
}
