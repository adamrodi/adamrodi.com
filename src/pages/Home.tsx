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
  IconArrowRight,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import ProjectCard from "../components/ProjectCard";
import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <>
      {/* HERO */}
      <Box
        id="hero"
        pt={isMobile ? 30 : 0}
        pb={60}
        style={{
          background:
            "linear-gradient(180deg, var(--mantine-color-dark-8) 0%, var(--mantine-color-dark-7) 150%)",
        }}
      >
        <Container size="lg" px={32}>
          <Box
            mih="calc(100vh - 80px)"
            pt={0}
            pb={60}
            px={0}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box w="100%">
              <Grid align="center" gutter={{ base: "xl", md: 48 }}>
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap={30} align="flex-start">
                    <Stack gap={0}>
                      <Title order={2}>Hi! 👋 My name is</Title>
                      <Title
                        order={1}
                        c="amber.5"
                        size={isMobile ? "3rem" : "4rem"}
                      >
                        Adam Rodi.
                      </Title>
                    </Stack>

                    <Text size="xl" c="dimmed" p={0} mr={5}>
                      I'm a junior computer science student at Southeastern
                      Louisiana University focused on software engineering.
                    </Text>
                    {!isMobile && (
                      <Group py="lg">
                        <PrimaryButton
                          href="#projects"
                          size="lg"
                          rightSection={<IconArrowRight size={20} />}
                          smooth-scroll
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
                    )}
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Container py={isMobile ? 30 : 0} px={0}>
                    <Box
                      maw={500}
                      mx="auto"
                      style={{
                        boxShadow: "0 0 120px rgba(255, 197, 22, 0.22)",
                        borderRadius: "50%",
                      }}
                    >
                      <Card radius="xl" shadow="sm" p={0} maw={500} mx="auto">
                        <Image
                          src="/hero.webp"
                          alt="Headshot of Adam Rodi"
                          fit="cover"
                          height={500}
                          maw={500}
                        />
                      </Card>
                    </Box>
                  </Container>
                  {isMobile && (
                    <Box mt={30} w="100%" ta="center">
                      <PrimaryButton
                        href="/Adam_Rodi_Resume.pdf"
                        size="lg"
                        target="_blank"
                      >
                        View Resume
                      </PrimaryButton>
                    </Box>
                  )}
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box id="projects" bg="dark.7" py={200}>
        <Container size="lg" px={32}>
          <Stack align="center" gap={14} mb={80}>
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
              Click a project to read its case study. Each is a story about the
              problem, the decisions behind the solution, and what I learned
              along the way.
            </Text>
          </Stack>

          <Stack gap={64}>
            <ProjectCard
              title="Cargo Games"
              heroImage="/cargo_games/hero_light_cargo_games.png"
              hook="Realtime multiplayer server in Rust, designed for low-latency."
              proof="Typed message protocol / State synchronization / Deployed on live VM"
              link="/projects/cargo-games"
            />
            <ProjectCard
              title="Activ-Ate"
              heroImage="/activ-ate/activ-ate_macros_wide.png"
              hook="Full-stack fitness and nutrition tracking web app."
              proof="API design / Relational data model / React UI"
              link="/projects/activ-ate"
            />
          </Stack>
        </Container>
      </Box>

      {/* About Me */}
      <Box id="about" bg="dark.8" mih="100vh" py={200}>
        <Container size="lg" px={32}>
          <Stack align="center" gap={14} mb={80}>
            <Text tt="uppercase" size="sm" fw={700} c="dimmed" lts={1}>
              My Story
            </Text>

            <Title order={2} size="3rem" lh={1.1} ta="center">
              About{" "}
              <Text span inherit c="amber.5">
                Me
              </Text>
            </Title>
            <Text ta="center" c="dimmed" maw={600}>
              A quick story on how I got here.
            </Text>
          </Stack>

          <Box w="100%">
            <Grid align="center" gutter={{ base: "xl", md: 48 }}>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack gap={30} align="flex-start">
                  <Stack gap={18}>
                    <Text>Hello! I'm Adam, and I like building with code.</Text>
                    <Text>
                      {" "}
                      My interest in programming started in high school when I
                      took an intro to JavaScript, HTML, and CSS course from{" "}
                      <Anchor
                        href="https://www.operationspark.org"
                        target="_blank"
                        className="underlineLink"
                      >
                        Operation Spark
                      </Anchor>
                      . During this time, I built 4 web projects and showed them
                      off on{" "}
                      <Anchor
                        className="underlineLink"
                        href="https://adamrodi.github.io"
                        target="_blank"
                      >
                        my first ever (rough) portfolio site.
                      </Anchor>
                    </Text>

                    <Text>
                      In university, that curiosity continued to grow. My
                      professors noticed the questions I kept asking and helped
                      open doors through{" "}
                      <Anchor
                        href="https://www.linkedin.com/posts/adamrodi_i-am-honored-to-be-selected-as-a-recipient-activity-7378447035513094145-zllo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW8c_QBKyisDa3TvdmoFMfFTp_crS4y0zU"
                        target="_blank"
                        className="underlineLink"
                      >
                        scholarships
                      </Anchor>{" "}
                      and research opportunities, giving me room to explore
                      beyond the syllabus.
                    </Text>

                    <Text>
                      During my sophomore summer, I interned at{" "}
                      <Anchor
                        className="underlineLink"
                        href="https://aws.amazon.com/"
                        target="_blank"
                      >
                        one of the largest technology companies on Earth
                      </Anchor>
                      . This was easily the most rapid period of learning in my
                      life so far. The peers and mentors I worked alongside
                      raised my own standards for my work. (
                      <Anchor
                        href="https://www.linkedin.com/posts/adamrodi_wrapping-up-my12-week-internship-at-amazon-activity-7369850411421327360-acGz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEW8c_QBKyisDa3TvdmoFMfFTp_crS4y0zU"
                        target="_blank"
                        style={{ fontStyle: "italic" }}
                        className="underlineLink"
                      >
                        internship recap
                      </Anchor>
                      ).
                    </Text>

                    <Text>
                      Today, I'm a junior Computer Science student, most excited
                      by working on tough, impactful engineering problems with
                      people who push me to grow.
                    </Text>
                  </Stack>
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 5 }}>
                <Card radius="xl" shadow="sm" p={0} maw={400} mx="auto">
                  <Image
                    src="/about_me.jpg"
                    alt="Adam Rodi working on a laptop in the library"
                    fit="cover"
                    height={450}
                    maw={400}
                    loading="lazy"
                  />
                </Card>
              </Grid.Col>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CONTACT */}
      <Box id="contact" bg="dark.8" py={200}>
        <Container size="lg" px={32}>
          <Stack align="center" gap={14} mb={80}>
            <Text tt="uppercase" size="sm" fw={700} c="dimmed" lts={1}>
              Contact Me
            </Text>

            <Title order={2} size="3rem" lh={1.1} ta="center">
              Let's{" "}
              <Text span inherit c="amber.5">
                Connect
              </Text>
            </Title>

            <Text ta="center" c="dimmed" maw={600}>
              Questions, feedback, or just want to connect? Feel free to reach
              out on LinkedIn.
            </Text>
          </Stack>
          <Box w="100%" ta="center">
            <PrimaryButton
              justify="center"
              href="https://www.linkedin.com/in/adamrodi/"
              size="lg"
              target="_blank"
            >
              <Group align="center" gap={8}>
                <IconBrandLinkedin size={20} />
                <span>Connect on LinkedIn</span>
              </Group>
            </PrimaryButton>
          </Box>
        </Container>
      </Box>
    </>
  );
}
