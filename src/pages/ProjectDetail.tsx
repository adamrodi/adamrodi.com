import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Title, Text, Anchor } from "@mantine/core";
import { PROJECTS } from "../data/projects";
import { ProjectMeta } from "../components/ProjectMeta";

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
      <ProjectMeta
        type={project.type}
        stack={project.stack}
        links={[
          ...(project.links?.live_demo
            ? [{ type: "live" as const, href: project.links.live_demo }]
            : []),
          ...(project.links?.repo
            ? [{ type: "github" as const, href: project.links.repo }]
            : []),
        ]}
      />

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
