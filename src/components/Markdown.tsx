import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Text, Title, List, Image, Code } from "@mantine/core";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <Text mb="sm">{children}</Text>,

        h1: ({ children }) => <Title order={1} mt="md" mb="xs">{children}</Title>,
        h2: ({ children }) => <Title order={2} mt="md" mb="xs">{children}</Title>,
        h3: ({ children }) => <Title order={3} mt="md" mb="xs">{children}</Title>,
        h4: ({ children }) => <Title order={4} mt="md" mb="xs">{children}</Title>,

        ul: ({ children }) => <List withPadding mb="sm">{children}</List>,
        ol: ({ children }) => <List type="ordered" withPadding mb="sm">{children}</List>,
        li: ({ children }) => <List.Item>{children}</List.Item>,

        // Inline code vs block code
        code: ({ children }) => <Code>{children}</Code>,

        pre: ({ children }) => (
          <Code block my="sm">
            {children}
          </Code>
        ),

        img: ({ src, alt }) => (
          <Image src={src ?? ""} alt={alt ?? ""} radius="md" my="sm" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}