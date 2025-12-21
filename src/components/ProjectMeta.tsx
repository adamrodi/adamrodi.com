import { Anchor, Group, SimpleGrid, Stack, Text } from "@mantine/core";

export type ProjectLink = {
  type: "live" | "github" | "docs" | "video";
  label?: string;
  href: string;
};

export type ProjectMetaProps = {
  type?: string;
  stack?: string[];
  links?: ProjectLink[];
};

export function ProjectMeta({
  type,
  stack,
  links,
}: ProjectMetaProps) {
  const hasAnyMeta =
    type || (stack && stack.length) || (links && links.length);
  if (!hasAnyMeta) return null;

  return (
    <SimpleGrid cols={3} spacing="md" verticalSpacing="md" mt="lg">
      {type && <MetaCol label="Type">{type}</MetaCol>}

      {stack && stack.length > 0 && (
        <MetaCol label="Stack">
          <Stack gap={6}>
            {stack.map((tech) => (
              <Text key={tech} size="sm">
                {tech}
              </Text>
            ))}
          </Stack>
        </MetaCol>
      )}


      {links && links.length > 0 && (
        <MetaCol label="Links">
          <Stack gap={6}>
            {links.map((link) => (
              <LinkRow key={`${link.type}:${link.href}`} link={link} />
            ))}
          </Stack>
        </MetaCol>
      )}
    </SimpleGrid>
  );
}

function MetaCol({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap={10}>
      <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts={0.6}>
        {label}
      </Text>
      {typeof children === "string" ? (
        <Text size="sm">{children}</Text>
      ) : (
        children
      )}
    </Stack>
  );
}

function LinkRow({ link }: { link: ProjectLink }) {
  const label =
    link.label ??
    {
      live: "View Site",
      github: "GitHub",
      docs: "Docs",
      video: "Video",
    }[link.type];

  return (
    <Group gap={6} wrap="nowrap">
        
      <Anchor
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        fw={600}
      >
        {label}
      </Anchor>
    </Group>
  );
}
