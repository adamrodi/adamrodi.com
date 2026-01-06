import { Container, Group, Anchor } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  { key: "projects", label: "Projects", to: "#projects" },
  { key: "about", label: "About", to: "#about" },
  { key: "contact", label: "Contact", to: "#contact" },
];

function NavItem({
  to,
  label,
  usesRouter = true,
}: {
  to: string;
  label: string;
  usesRouter?: boolean;
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const isHashLink = !usesRouter || to.startsWith("#");

  // Hooks must be called unconditionally. For hash links, use a pattern that will never match.

  const [hover, setHover] = useState(false);

  return (
    <Anchor
      component={isHashLink ? "a" : (Link as any)}
      to={!isHashLink ? to : undefined}
      href={isHashLink ? to : undefined}
      title={label}
      className="underlineLink"
      onClick={(e: { preventDefault: () => void }) => {
        if (!isHashLink) return;
        e.preventDefault();

        const hash = to.startsWith("#") ? to : `#${to}`;

        // If we're not on the home route, navigate there first with the hash.
        if (location.pathname !== "/") {
          navigate(`/${hash}`);
          return;
        }

        // Update the URL hash without a full reload.
        if (location.hash !== hash) {
          navigate(hash, { replace: false });
        }

        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: "var(--mantine-color-white)",
        opacity: hover ? 1 : 0.8,
      }}
    >
      {label}
    </Anchor>
  );
}

export default function Nav() {
  const visibleLinks = LINKS.filter((l) => navVisibility[l.key]);

  return (
    <Container size="lg" h="100%" px={32}>
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
            return (
              <NavItem
                key={link.key}
                to={link.to}
                label={link.label}
                usesRouter={link.usesRouter}
              />
            );
          })}

          {navVisibility.resume && (
            <PrimaryButton target="_blank" href="/Adam_Rodi_Resume.pdf">
              Resume
            </PrimaryButton>
          )}
        </Group>
      </Group>
    </Container>
  );
}
