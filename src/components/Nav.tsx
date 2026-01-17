import { Box, Container, Group, Anchor } from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navVisibility } from "../config/nav";
import { useMemo } from "react";
import { useMediaQuery } from "@mantine/hooks";
import PrimaryButton from "./PrimaryButton";

type LinkItem = {
  key: keyof typeof navVisibility;
  label: string;
  to: string;
  usesRouter?: boolean;
};

const LINKS: LinkItem[] = [
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

  return (
    <Anchor
      component={isHashLink ? "a" : (Link as any)}
      to={!isHashLink ? to : undefined}
      href={isHashLink ? to : undefined}
      title={label}
      className="headerLink"
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
    >
      {label}
    </Anchor>
  );
}

export default function Nav() {
  const isMobile = useMediaQuery("(max-width: 48em)");
  const isTinyMobile = useMediaQuery("(max-width: 350px)");

  // Option B: keep mobile nav extremely short (2 links + CTA)
  const desktopLinks = useMemo(
    () => LINKS.filter((l) => navVisibility[l.key]),
    [
      /* LINKS is constant; navVisibility is imported config */
    ]
  );

  const mobileLinks = useMemo(
    () =>
      LINKS.filter((l) => navVisibility[l.key]).filter(
        (l) => l.key === "projects" || l.key === "contact" || l.key === "about"
      ),
    [
      /* LINKS is constant; navVisibility is imported config */
    ]
  );

  return (
    <Box bg="dark.8" h="100%">
      <Container size="lg" h="100%" px={32}>
        <Group justify="space-between" align="center" h="100%">
          {!isTinyMobile && (
          <Anchor
            component={Link}
            to="/"
            fw={700}
            fz={isMobile ? "lg" : "xl"}
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
          )}

          <Group gap={isMobile ? "md" : "xl"} align="center" wrap="nowrap">
            {(isMobile ? mobileLinks : desktopLinks).map((link) => {
              return (
                <NavItem
                  key={link.key}
                  to={link.to}
                  label={link.label}
                  usesRouter={link.usesRouter}
                />
              );
            })}

            {navVisibility.resume && !isMobile && (
              <PrimaryButton target="_blank" href="/Adam_Rodi_Resume.pdf">
                {isMobile ? "Resume" : "Resume"}
              </PrimaryButton>
            )}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
