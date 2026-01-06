import { Box, Container, Group, Anchor} from "@mantine/core";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <Box component="footer" py={28}>
      <Container size="lg" px={32}>
        <Group justify="space-between" align="center" wrap="wrap" gap="md">
          <Anchor
            c="dimmed"
            href="https://github.com/adamrodi/adamrodi.com"
            target="_blank"
            className="footerLink"
          >
            Built by Adam Rodi
          </Anchor>

          <Group gap="xl" wrap="wrap">
            <Anchor
              href="mailto:adamcrodi123@yahoo.com"
              c="dimmed"
              className="footerLink"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <IconMail size={16} />
              Email
            </Anchor>
            <Anchor
              href="https://www.linkedin.com/in/adamrodi"
              target="_blank"
              c="dimmed"
              className="footerLink"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <IconBrandLinkedin size={16} />
              LinkedIn
            </Anchor>
            <Anchor
              href="https://github.com/adamrodi"
              target="_blank"
              c="dimmed"
              className="footerLink"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <IconBrandGithub size={16} />
              GitHub
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
