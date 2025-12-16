import { Button, type ButtonProps } from "@mantine/core";
import { useState } from "react";

interface SecondaryButtonProps extends Omit<ButtonProps, "component"> {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

export default function SecondaryButton({
  href,
  children,
  size = "sm",
  target = "_self",
  ...props
}: SecondaryButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Button
      radius="xl"
      component="a"
      href={href}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      target={target}
      variant="outline"
      color="white"
      size={size}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "all 0.3s ease",
        borderColor: "white",
        color: hover ? "black" : "white",
        backgroundColor: hover ? "white" : "transparent",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}