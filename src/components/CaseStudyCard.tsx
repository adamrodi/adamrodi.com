import { Card, Image, Stack, Text, Title, Box } from "@mantine/core";
import { useNavigate } from "react-router-dom";

interface CaseStudyCardProps {
  title: string;
  category: string;
  heroImage: string;
  hook: string;
  proof: string;
  link: string;
}

export default function CaseStudyCard({
  title,
  category,
  heroImage,
  hook,
  proof,
  link,
}: CaseStudyCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      withBorder
      radius="xl"
      shadow="sm"
      p={0}
      onClick={() => navigate(link)}
      style={{
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* HERO IMAGE */}
      <Box>
        <Image
          src={heroImage}
          alt={title}
          height={360}
          fit="cover"
        />
      </Box>

      {/* STORY TEASER */}
      <Stack p="lg" gap={10}>
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

        <Text
          mt={6}
          size="sm"
          fw={600}
          c="amber.5"
        >
          Read case study →
        </Text>
      </Stack>
    </Card>
  );
}