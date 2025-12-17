import { Container, Group, Anchor } from "@mantine/core";
import { Link, useMatch } from "react-router-dom";
import { navVisibility } from "../config/nav";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

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
  const [hover, setHover] = useState(false);

  return (
    <Anchor
      component={Link}
      to={to}
      title={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: "var(--mantine-color-white)",
        opacity: active || hover ? 1 : 0.75,
        // Underline effect
        textDecorationColor: "transparent",
        backgroundImage:
          "linear-gradient(var(--mantine-color-amber-5), var(--mantine-color-amber-5))",
        backgroundSize: hover ? "100% 2px" : "0% 2px",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        transition:
          "background-size 200ms ease-in-out, opacity 150ms ease-in-out, transform 150ms ease-in-out",
      }}
    >
      {label}
    </Anchor>
  );
}

export default function Nav() {
  const visibleLinks = LINKS.filter((l) => navVisibility[l.key]);

  return (
    <Container size="lg" h="100%" >
      <Group justify="space-between" align="center" h="100%">
        <Anchor
          component={Link}
          to="/"
          fw={700}
          fz="xl"
          aria-label="Go to home"
          title="Home"
          style={{
            color: "var(--mantine-color-white)",
            opacity: 1,
            textDecorationColor: "transparent",
          }}
        >
          Adam
          <span style={{ color: "var(--mantine-color-amber-5)" }}>. </span>
        </Anchor>

        <Group gap="xl" align="center">
          {visibleLinks.map((link) => {
            const exact = link.to === "/";
            return (
              <NavItem
                key={link.key}
                to={link.to}
                label={link.label}
                exact={exact}
              />
            );
          })}

          {navVisibility.resume && (
            <PrimaryButton target="_blank" href="/Adam_Rodi_Resume.pdf">Resume</PrimaryButton>
          )}
        </Group>
      </Group>
    </Container>
  );
}
