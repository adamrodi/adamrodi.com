import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Anchor, Box, Container, Stack, Text, Title } from "@mantine/core";
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
      <Container size="sm" py="xl">
        <Stack gap="lg">
          <Anchor
            component="button"
            type="button"
            onClick={() => navigate(cameFromHome ? "/" : "/projects")}
          >
            ← Back to {cameFromHome ? "Home" : "Projects"}
          </Anchor>
          <Box>
            <Title order={1}>Project not found</Title>
            <Text c="dimmed" mt="xs">
              This project does not exist yet.
            </Text>
          </Box>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="800px" py="xl">
      <Stack gap="50px">
        <Box>
          <Text size="sm" c="dimmed" fw={600}>
            Case Study
          </Text>
          <Title order={1} mt={6} fz={40} lh={1.15}>
            {project.title}
          </Title>
        </Box>


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


        {/* Summary: keep it readable like the screenshot */}
        <Text c="dimmed" fz="md" lh={1.7}>
          {project.summary}
        </Text>

        <Stack gap="xl" mt="md">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <Title order={3} fz={22} lh={1.25}>
                {section.heading}
              </Title>
              <Text c="dimmed" mt="xs" lh={1.8}>
                {section.body}
              </Text>
            </section>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
