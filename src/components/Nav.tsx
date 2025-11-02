import { Container, Group, Anchor, Button } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";
import { navVisibility } from "../config/nav";

type LinkItem = {
  key: keyof typeof navVisibility;
  label: string;
  to: string;
  usesRouter?: boolean;
};

const LINKS: LinkItem[] = [
  { key: "home", label: "Home", to: "/", usesRouter: true },
  { key: "projects", label: "Projects", to: "/projects", usesRouter: true },
  { key: "contact", label: "Contact", to: "/#contact", usesRouter: false },
  { key: "about", label: "About", to: "/about", usesRouter: true },
];

function NavItem({
  to,
  label,
  exact = false,
}: {
  to: string;
  label: string;
  exact?: boolean;
}) {
  const pattern = exact ? to : `${to}/*`;
  const match = useMatch(pattern);
  const active = Boolean(match);

  return (
    <Anchor
      component={Link}
      to={to}
      style={{ opacity: active ? 1 : 0.85 }}
      title={label}
    >
      {label}
    </Anchor>
  );
}

export default function Nav() {
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
              const exact = link.to === "/";
              return (
                <NavItem
                  key={link.key}
                  to={link.to}
                  label={link.label}
                  exact={exact}
                />
              );
            } 
            else {
              return (
                <Anchor key={link.key} href={link.to} title={link.label}>
                  {link.label}
                </Anchor>
              );
            }
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
