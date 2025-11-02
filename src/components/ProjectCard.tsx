import { Card, Title, Text, Group, Badge, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";

export default function ProjectCard({
  title,
  summary,
  tags,
  link,
  state,
}: {
  title: string;
  summary: string;
  tags: string[];
  link: string;
  state?: any;
}) {
  const theme = useMantineTheme();
  // Semi-transparent brand shadow for hover (uses current theme palette)
  const hoverShadow = `0 8px 24px ${theme.colors.blue?.[9] ? theme.colors.blue[9] + "33" : "rgba(59,130,246,0.2)"}`;

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = hoverShadow;
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
  };

  return (
    <Card
      withBorder
      radius="lg"
      shadow="sm"
      p="lg"
      component={Link as any}
      to={link}
      state={state}
      role="article"
      title={title}
      aria-label={`Open ${title} case study`}
      style={{
        textDecoration: "none",
        cursor: "pointer",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Title order={4} mb="sm">
        {title}
      </Title>

      <Text mb="sm" c="dimmed">
        {summary}
      </Text>

      <Group gap="xs" mt="xs">
        {tags.map((tag) => (
          <Badge key={tag} variant="light">
            {tag}
          </Badge>
        ))}
      </Group>

      <Text mt="md">View project →</Text>
    </Card>
  );
}