import { Anchor, Card, Text, Title } from "@mantine/core";

export default function ThanksForReading() {
  return (
    <Card p="xl" bg="dark.9" shadow="lg">
      <Title order={2}>Thanks for reading till the end!</Title>
      <Text mt="sm">
        Questions or feedback? Please reach out to me on{" "}
        <Anchor
          href="https://www.linkedin.com/in/adamrodi"
          target="_blank"
          rel="noopener noreferrer"
          className="underlineLink"
        >
          LinkedIn
        </Anchor>
        . 
      </Text>
    </Card>
  );
}
