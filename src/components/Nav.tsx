import { Container, Group, Anchor, Button } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import { navVisibility } from "../config/nav";

type LinkItem = {
  key: keyof typeof navVisibility;
  label: string;
  to: string;
  usesRouter?: boolean; // false when using regular anchor (e.g., hash on Home)
};

const LINKS: LinkItem[] = [
  { key: "home", label: "Home", to: "/", usesRouter: true },
  { key: "projects", label: "Projects", to: "/projects", usesRouter: true },
  // Contact is an anchor on the Home page (#contact)
  { key: "contact", label: "Contact", to: "/#contact", usesRouter: false },
  { key: "about", label: "About", to: "/about", usesRouter: true },
];

export default function Nav() {
  const { pathname } = useLocation();
  const visibleLinks = LINKS.filter((l) => navVisibility[l.key]);

  return (
    <Container size="lg" h="100%">
      <Group justify="space-between" align="center" h="100%">
        <Anchor
          component={Link}
          to="/"
          fw={700}
          fz="lg"
          aria-label="Go to home"
          title="Home"
        >
          AR
        </Anchor>

        <Group gap="md">
          {visibleLinks.map((link) => {
            if (link.usesRouter) {
              const active =
                link.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.to);
              return (
                <Anchor
                  key={link.key}
                  component={Link}
                  to={link.to}
                  style={{ opacity: active ? 1 : 0.85 }}
                >
                  {link.label}
                </Anchor>
              );
            }
            return (
              <Anchor key={link.key} href={link.to} title={link.label}>
                {link.label}
              </Anchor>
            );
          })}

          {navVisibility.resume && (
            <Button
              component={Link}
              to="/resume"
              variant="light"
              size="sm"
              aria-label="Open resume"
              title="Resume"
            >
              Resume
            </Button>
          )}
        </Group>
      </Group>
    </Container>
  );
}
