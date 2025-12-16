import {
  Container,
  Title,
  Text,
  Card,
  SimpleGrid,
  Anchor,
  Box,
  Grid,
  Stack,
  Group,
  Image,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import ProjectCard from "../components/ProjectCard";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

export default function Home() {
  return (
    <Container size="lg">
      {/* HERO */}
      <Box
        id="hero"
        mih="calc(100vh - 80px)"
        pt={0}
        pb={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Grid align="center" gutter={{ base: "xl", md: 48 }}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap={30} align="flex-start">
                <Stack gap={0}>
                  <Title order={2}>Hi, my name is</Title>
                  <Title order={1} c="amber.5" size="4rem">
                    Adam Rodi.
                  </Title>
                </Stack>

                <Text size="xl" c="dimmed" p={0}>
                  I'm a senior Computer Science and Data Science student at
                  Southeastern Louisiana University focused on full-stack
                  development, cloud infrastructure, and applied AI projects.
                </Text>

                <Group py="lg">
                  <PrimaryButton
                    href="#projects"
                    size="lg"
                    rightSection={<IconArrowRight size={20} />}
                  >
                    View Projects
                  </PrimaryButton>

                  <SecondaryButton
                    href="/Adam_Rodi_Resume.pdf"
                    size="lg"
                    target="_blank"
                  >
                    Resume
                  </SecondaryButton>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Card radius="xl" shadow="sm" p={0}>
                <Image
                  src="/headshot.jpg"
                  alt="Headshot of Adam Rodi"
                  fit="cover"
                  height={450}
                />
              </Card>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box
        id="projects"
        mih="100vh"
        py={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Title order={2} mb="md">
            Featured Projects
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }}>
            <ProjectCard
              title="Multiplayer Game Server"
              summary="Real-time Rust backend with WebSockets and matchmaking."
              tags={["Rust", "Axum", "Tokio", "React"]}
              link="/projects/multiplayer-game-server"
              state={{ from: "home" }}
            />
            <ProjectCard
              title="AWS OpenSearch Troubleshooting Bot"
              summary="Lex + Lambda chatbot for automated cluster health diagnostics."
              tags={["AWS", "Lex", "Lambda", "CloudWatch"]}
              link="/projects/opensearch-troubleshooting-bot"
              state={{ from: "home" }}
            />
            <ProjectCard
              title="Zebrafish Neural Data Mining"
              summary="Unsupervised clustering and visualization of imaging data."
              tags={["Python", "NumPy", "pandas", "matplotlib"]}
              link="/projects/zebrafish-data-mining"
              state={{ from: "home" }}
            />
          </SimpleGrid>
        </Box>
      </Box>

      {/* EXPERIENCE */}
      <Box
        id="experience"
        mih="100vh"
        py={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Title order={2} mb="md">
            Experience
          </Title>
          <Card withBorder radius="lg" shadow="sm" p="lg">
            <Title order={4} mb="xs">
              AWS Cloud Support Associate Intern (Summer 2025)
            </Title>
            <ul style={{ marginTop: 8 }}>
              <li>
                Implemented Lex-driven diagnostic flows for OpenSearch yellow
                states (Lambda, CloudWatch).
              </li>
              <li>
                Built highly available 3-tier app with ALB, EC2, Auto Scaling,
                multi-AZ; validated failover.
              </li>
              <li>
                Completed AWS Solutions Architect – Associate and AWS AI
                Practitioner.
              </li>
            </ul>
          </Card>
        </Box>
      </Box>

      {/* EDUCATION */}
      <Box
        id="education"
        mih="100vh"
        py={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Title order={2} mb="md">
            Education
          </Title>
          <Card withBorder radius="lg" shadow="sm" p="lg">
            <Title order={4} mb="xs">
              Southeastern Louisiana University
            </Title>
            <Text>
              B.S. in Computer Science & Data Science, <b>GPA 4.0</b>
            </Text>
            <Text c="dimmed" mt={6}>
              Relevant coursework: Algorithms, Data Mining, Software
              Engineering, Computer Architecture, Calculus II
            </Text>
            <ul style={{ marginTop: 8 }}>
              <li>
                Unsupervised analysis of zebrafish imaging data; clustered
                brain-region patterns vs controls.
              </li>
              <li>
                Automated chicken-coop controller (Arduino/C++): scheduled
                feeding, temperature relay.
              </li>
              <li>
                Completed full course loads while serving in the Army National
                Guard.
              </li>
            </ul>
          </Card>
        </Box>
      </Box>

      {/* ABOUT */}
      <Box
        id="about"
        mih="100vh"
        py={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Title order={2} mb="md">
            About
          </Title>
          <Card withBorder radius="lg" shadow="sm" p="lg">
            <Text>
              I study Computer Science and Data Science at Southeastern
              Louisiana University. My work focuses on building reliable,
              well-structured systems including web backends, cloud
              infrastructure, and applied data workflows. I enjoy learning new
              technologies, solving real problems, and continuously improving
              the quality of what I build.
            </Text>
          </Card>
        </Box>
      </Box>

      {/* CONTACT */}
      <Box
        id="contact"
        mih="100vh"
        py={120}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box w="100%">
          <Title order={2} mb="md">
            Contact
          </Title>
          <Card withBorder radius="lg" shadow="sm" p="lg">
            <Text>
              Reach me at{" "}
              <Anchor href="mailto:adamcrodi123@yahoo.com" target="_blank">
                adamcrodi123@yahoo.com
              </Anchor>{" "}
              or connect on{" "}
              <Anchor
                href="https://www.linkedin.com/in/adamrodi"
                target="_blank"
              >
                LinkedIn
              </Anchor>{" "}
              and{" "}
              <Anchor href="https://github.com/adamrodi" target="_blank">
                GitHub
              </Anchor>
              .
              <Text span c="dimmed">
                {" "}
                ·{" "}
              </Text>
              <Anchor href="#hero">Back to top</Anchor>
            </Text>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
