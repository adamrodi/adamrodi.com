import { Button, type ButtonProps } from "@mantine/core";
import { useState } from "react";

interface PrimaryButtonProps extends Omit<ButtonProps, "component"> {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

export default function PrimaryButton({
  href,
  children,
  size = "sm",
  target = "_self",
  ...props
}: PrimaryButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Button
      smooth-scroll
      radius="xl"
      component="a"
      href={href}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
      variant="filled"
      color="amber.6"
      c="black"
      size={size}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "all 0.3s ease",
        transform: hover ? "scale(1.02)" : "scale(1)",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
