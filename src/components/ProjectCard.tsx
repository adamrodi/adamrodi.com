import { Card, Image, Stack, Text, Title, Box } from "@mantine/core";
import { Link  } from "react-router-dom";
import { IconArticle } from "@tabler/icons-react";

interface ProjectCardProps {
  title: string;
  category: string;
  heroImage: string;
  hook: string;
  proof: string;
  link: string;
}

export default function ProjectCard({
  title,
  category,
  heroImage,
  hook,
  proof,
  link,
}: ProjectCardProps) {

  return (
    <Card
      withBorder
      radius="xl"
      shadow="sm"
      p={0}
      component={Link}
      to={link}
      style={{
        cursor: "pointer",
        transition:
          "transform 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--mantine-color-amber-5)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.1)";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.03)";
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
        if (img) img.style.transform = "scale(1)";
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
          height={700}
          fit="cover"
          style={{
            transition: "transform 0.5s ease",
          }}
        />
      </Box>

      {/* STORY TEASER */}
      <Stack p="lg" gap={10} style={{ position: "relative" }}>
        {/* Corner Icon */}
        <Box
          className="corner-icon"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 36,
            height: 36,
            border: "1px solid var(--mantine-color-dark-4)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "transform 0.5s ease, background-color 0.5s ease, color 0.5s ease",
          }}
        >
          <IconArticle size={18} />
        </Box>

        <Text tt="uppercase" size="xs" fw={700} c="dimmed" lts={1}>
          {category}
        </Text>

        <Title order={3} lh={1.2}>
          {title}
        </Title>

        <Text size="md" lh={1.6}>
          {hook}
        </Text>

        <Text size="sm" c="dimmed">
          {proof}
        </Text> 

        <Text mt={6} size="sm" fw={600} c="amber.5">
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
