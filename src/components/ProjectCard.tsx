import { Card, Image, Stack, Text, Title, Box } from "@mantine/core";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

interface ProjectCardProps {
  title: string;
  heroImage: string;
  hook: string;
  proof: string;
  link: string;
}

export default function ProjectCard({
  title,
  heroImage,
  hook,
  proof,
  link,
}: ProjectCardProps) {
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <Card
      withBorder
      radius="xl"
      shadow="sm"
      p={0}
      component={Link}
      to={link}
      w="100%"
      maw={800}
      style={{
        cursor: "pointer",
        transition:
          "transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
        overflow: "hidden",
        alignSelf: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--mantine-color-amber-5)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.1)";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = isMobile ? "scale(1.2)" : "scale(1.05)";
        const arrow = e.currentTarget.querySelector(
          ".cta-arrow"
        ) as HTMLElement;
        if (arrow) arrow.style.transform = "translateX(5px)";
        const cornerIcon = e.currentTarget.querySelector(
          ".corner-icon"
        ) as HTMLElement;
        if (cornerIcon) {
          //cornerIcon.style.transform = "translate(3px, -3px)";
          cornerIcon.style.backgroundColor = "var(--mantine-color-amber-5)";
          cornerIcon.style.color = "var(--mantine-color-dark-7)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = isMobile ? "scale(1.15)" : "scale(1)";
        const arrow = e.currentTarget.querySelector(
          ".cta-arrow"
        ) as HTMLElement;
        if (arrow) arrow.style.transform = "translateX(0)";
        const cornerIcon = e.currentTarget.querySelector(
          ".corner-icon"
        ) as HTMLElement;
        if (cornerIcon) {
          cornerIcon.style.transform = "translate(0, 0)";
          cornerIcon.style.backgroundColor = "";
          cornerIcon.style.color = "";
        }
      }}
    >
      {/* HERO IMAGE */}
      <Box style={{ overflow: "hidden" }}>
        <Image
          src={heroImage}
          alt={title}
          width="100%"
          mah={420}
          fit="cover"
          style={{
            transition: "transform 0.5s ease",
            transform: isMobile ? "scale(1.15)" : "scale(1)",
          }}
        />
      </Box>

      {/* STORY TEASER */}
      <Stack
        p={isMobile ? "md" : "lg"}
        gap={isMobile ? 8 : 10}
        style={{ position: "relative" }}
      >
        <Title order={isMobile ? 4 : 3} lh={1.25}>
          {title}
        </Title>

        <Text size={isMobile ? "sm" : "md"} lh="1.6" >
          {hook}
        </Text>

        {!isMobile && (
          <Text size="sm" c="dimmed">
            {proof}
          </Text>
        )}

        <Text
          mt={isMobile ? 6 : 8}
          size="sm"
          fw={600}
          c="amber.5"
        >
          Read case study{" "}
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.5s ease",
            }}
            className="cta-arrow"
          >
            →
          </span>
        </Text>
      </Stack>
    </Card>
  );
}
