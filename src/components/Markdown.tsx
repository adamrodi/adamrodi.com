import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Text, Title, List, Image, Code, Anchor } from "@mantine/core";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <Text mb="lg">{children}</Text>,

        h1: ({ children }) => (
          <Title order={1} mt="md" mb="lg">
            {children}
          </Title>
        ),
        h2: ({ children }) => (
          <Title order={2} mt="md" mb="lg">
            {children}
          </Title>
        ),
        h3: ({ children }) => (
          <Title order={3} mt="md" mb="lg">
            {children}
          </Title>
        ),
        h4: ({ children }) => (
          <Title order={4} mt="md" mb="lg">
            {children}
          </Title>
        ),

        ul: ({ children }) => (
          <List withPadding mb="lg" mt="-8px">
            {children}
          </List>
        ),
        ol: ({ children }) => (
          <List type="ordered" withPadding mb="lg" mt="-8px">
            {children}
          </List>
        ),
        li: ({ children }) => <List.Item mb="sm">{children}</List.Item>,
        // Inline code vs block code
        code: ({ children }) => <Code>{children}</Code>,

        pre: ({ children }) => (
          <Code block my="sm" >
            {children}
          </Code>
        ),

        img: ({ src, alt, title }) => (
          <figure
            style={{ margin: "50px -200px 0px -200px", textAlign: "center" }}
          >
            <Image
              src={src ?? ""}
              alt={alt ?? ""}
              radius="lg"
              maw="1100px"
              w="100%"
            />
            {title ? (
              <Text size="sm" c="dimmed" ta="center" mt="xs">
                {title}
              </Text>
            ) : null}
          </figure>
        ),

        a: ({ href, children }) => {
          return (
            <Anchor
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underlineLink"
            >
              {children}
            </Anchor>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
