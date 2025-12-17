import {
  Container,
  Title,
  Text,
  Card,
  Anchor,
  Box,
  Grid,
  Stack,
  Group,
  Image,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import CaseStudyCard from "../components/CaseStudyCard";

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
      <Box id="projects" py={120}>
        <Stack align="center" gap={14} mb={64}>
          <Text tt="uppercase" size="sm" fw={700} c="dimmed" lts={1}>
            My Work
          </Text>

          <Title order={2} size="3rem" lh={1.1} ta="center">
            Featured{" "}
            <Text span inherit c="amber.5">
              Projects
            </Text>
          </Title>

          <Text ta="center" c="dimmed" maw={720}>
            A collection of my software development projects. Click a project to
            read its case study. Each is a deep dive into the problem, the
            decisions behind the solution, and what I learned along the way.
          </Text>
        </Stack>

        <Stack gap={48}>
          <CaseStudyCard
            title="Multiplayer Game Server"
            category="Backend Systems"
            heroImage="/cargo_games/cargo_games_hero.png"
            hook="I wanted real-time multiplayer to feel instant, so I designed a Rust WebSocket server with a clean protocol, matchmaking, and concurrency in mind."
            proof="Designed structured message types and matchmaking flows to support scalable real-time gameplay."
            link="/projects/multiplayer-game-server"
          />

          <CaseStudyCard
            title="AWS OpenSearch Troubleshooting Bot"
            category="Cloud Automation"
            heroImage="/opensearch_chatbot/chatbot_hero.png"
            hook="Diagnosing OpenSearch cluster issues is slow and error-prone, so I built a guided chatbot to automate yellow-state diagnosis."
            proof="Translated operational runbooks into decision-tree driven Lex flows backed by Lambda."
            link="/projects/opensearch-troubleshooting-bot"
          />

          <CaseStudyCard
            title="Zebrafish Neural Data Mining"
            category="Applied Machine Learning"
            heroImage="/zebrafish_project/zebrafish_hero.png"
            hook="We explored whether unsupervised learning could distinguish neural activity patterns across experimental conditions."
            proof="Applied clustering and visualization techniques to high-dimensional imaging data."
            link="/projects/zebrafish-data-mining"
          />
        </Stack>

        <Box ta="center" mt={64}>
          <PrimaryButton href="/projects">View all projects →</PrimaryButton>
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
            </Text>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
