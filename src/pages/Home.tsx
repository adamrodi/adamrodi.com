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
import {
  IconMail,
  IconArrowRight,
} from "@tabler/icons-react";
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

          <Text ta="center" c="dimmed" maw={600}>
            Click a project to read its case study. Each is a deep dive into the
            problem, the decisions behind the solution, and what I learned along
            the way.
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

      {/* About Me */}
      <Box id="about" mih="100vh" py={120}>
        <Stack align="center" gap={14} mb={64}>
          <Text tt="uppercase" size="sm" fw={700} c="dimmed" lts={1}>
            My Story
          </Text>

          <Title order={2} size="3rem" lh={1.1} ta="center">
            About{" "}
            <Text span inherit c="amber.5">
              Me
            </Text>
          </Title>
        </Stack>

        <Box w="100%">
          <Grid align="center" gutter={{ base: "xl", md: 48 }}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap={30} align="flex-start">
                <Stack gap={18}>
                  <Text>
                    Hello! I’m Adam and I like building with code. My interest
                    in programming started in high school (10th grade) when I
                    took an intro to JavaScript, HTML, and CSS course from{" "}
                    <Anchor
                      href="https://www.operationspark.org"
                      target="_blank"
                    >
                      Operation Spark
                    </Anchor>
                    . During this time, I built 4 web projects and showed them
                    off on{" "}
                    <Anchor href="https://adamrodi.github.io" target="_blank">
                      my first ever (cringe-worthy) portfolio site.
                    </Anchor>
                  </Text>

                  <Text>
                    Fast forward to university, and I have been fortunate to
                    have supportive professors and mentors who recognize my
                    curiosity and help me pursue it through{" "}
                    <Anchor
                      href="https://www.linkedin.com/posts/adamrodi_i-am-honored-to-be-selected-as-a-recipient-activity-7378447035513094145-zllo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW8c_QBKyisDa3TvdmoFMfFTp_crS4y0zU"
                      target="_blank"
                    >
                      scholarships
                    </Anchor>{" "}
                    and research opportunities.
                  </Text>

                  <Text>
                    My sophomore summer, I had the privilege of interning at{" "}
                    <Anchor href="https://aws.amazon.com/" target="_blank">
                      one of the largest technology companies on Earth
                    </Anchor>
                    , where peers and mentors raised my standards for my work (
                    <Anchor
                      href="https://www.linkedin.com/posts/adamrodi_wrapping-up-my12-week-internship-at-amazon-activity-7369850411421327360-acGz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW8c_QBKyisDa3TvdmoFMfFTp_crS4y0zU"
                      target="_blank"
                      style={{ fontStyle: "italic" }}
                    >
                      internship recap
                    </Anchor>
                    ).
                  </Text>

                  <Text>
                    Today, I’m a senior Computer Science student most excited by
                    working on tough and impactful engineering problems
                    alongside people who challenge me to grow.
                  </Text>
                </Stack>
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

      {/* CONTACT */}
      <Box id="contact" py={120}>
        <Stack align="center" gap={14} mb={64}>
          <Text tt="uppercase" size="sm" fw={700} c="dimmed" lts={1}>
            Contact Me
          </Text>

          <Title order={2} size="3rem" lh={1.1} ta="center">
            Let’s{" "}
            <Text span inherit c="amber.5">
              Connect
            </Text>
          </Title>

          <Text ta="center" c="dimmed" maw={600}>
            If you have any feedback or would like to discuss potential
            opportunities, please reach out! I would love to connect and
            learn about exciting projects and roles.
          </Text>
        </Stack>
        <Box w="100%" ta="center">
          <PrimaryButton
            justify="center"
            href="mailto:adamcrodi123@yahoo.com"
            size="lg"
          >
            <Group align="center" gap={8}>
              <IconMail size={20} />
              <span>Email Me</span>
            </Group>
          </PrimaryButton>
        </Box>
      </Box>
    </Container>
  );
}
