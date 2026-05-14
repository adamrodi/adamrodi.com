import { Center, Loader } from "@mantine/core";
import { useEffect } from "react";

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.replace("/Adam_Rodi_Resume.pdf");
  }, []);

  return (
    <Center mih="calc(100vh - 80px)">
      <Loader color="amber" />
    </Center>
  );
}
