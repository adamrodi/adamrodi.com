import { useParams, Link } from "react-router-dom";
import { Title, Text, Anchor } from "@mantine/core";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Anchor component={Link} to="/projects">
        ← Back to Projects
      </Anchor>
      <Title order={1} mb="xs">
        {slug ? slug.replace(/-/g, " ") : "Project"}
      </Title>
      <Text c="dimmed">
        This is a placeholder for the "{slug}" project. We'll wire real content next.
      </Text>
    </>
  );
}