import { useParams } from "react-router-dom";
import { Box, Container, Stack, Text, Title } from "@mantine/core";
import { PROJECTS } from "../data/projects";
import { ProjectMeta } from "../components/ProjectMeta";
import { Markdown } from "../components/Markdown";
import ThanksForReading from "../components/ThanksForReading";
import { usePageMeta } from "../hooks/usePageMeta";

const getProjectName = (title: string) => title.split(":")[0].trim();

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? PROJECTS[slug] : undefined;
  const projectName = project ? getProjectName(project.title) : undefined;

  usePageMeta({
    title: projectName
      ? `Adam Rodi | ${projectName}`
      : "Project not found | Adam Rodi",
    description: project
      ? `${project.title} case study: architecture, implementation decisions, and lessons learned.`
      : "Requested project case study was not found.",
  });

  usePageMeta({
    title: project
      ? `${project.title} | Adam Rodi`
      : "Project not found | Adam Rodi",
    description: project
      ? `${project.title} case study: architecture, implementation decisions, and lessons learned.`
      : "Requested project case study was not found.",
  });

  if (!project) {
    return (
      <Container size="sm" py="xl">
        <Box>
          <Title order={1}>Project not found</Title>
          <Text c="dimmed" mt="xs">
            This project does not exist yet.
          </Text>
        </Box>
      </Container>
    );
  }

  return (
    <Box bg="dark.8">
      <Container size="750px" py="xl">
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

          <Box>
            <Markdown content={project.summary} />
          </Box>

          <Stack gap="50px">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <Title order={2} lh={1.25} mb="md">
                  {section.heading}
                </Title>
                <Box>
                  <Markdown content={section.body} />
                </Box>
              </section>
            ))}
          </Stack>
          <ThanksForReading />
        </Stack>
      </Container>
    </Box>
  );
}
