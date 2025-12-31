import { Text,  Image, Modal, UnstyledButton, Group, ActionIcon, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

export default function MarkdownClickToFullscreenImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt?: string;
  title?: string;
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const imageRadius = "lg";

  return (
    <>
      <UnstyledButton
        onClick={open}
        style={{ display: "block", width: "100%", cursor: "zoom-in" }}
        aria-label="Open image fullscreen"
      >
        <Image
          src={src}
          alt={alt ?? ""}
          radius={imageRadius}
          maw="1100px"
          w="100%"
        />
      </UnstyledButton>

      <Modal
        opened={opened}
        onClose={close}
        fullScreen
        withCloseButton={false}
        padding="sm"
        overlayProps={{ opacity: 0.7, blur: 3 }}
      >
        <Group justify="space-between" mb="sm"> 
          <Box />
          {title ? <Text fw={500}>{title}</Text> : <Box />}
          <ActionIcon onClick={close} color="gray" variant="subtle" size="lg">
            <IconX />
          </ActionIcon>
        </Group>

        <Box
          style={{
            height: "calc(100vh - 80px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={src}
            alt={alt ?? ""}
            fit="contain"
            radius={imageRadius}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Box> 
      </Modal>
    </>
  );
}