import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
};

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    const metaDescription =
      document.querySelector<HTMLMetaElement>('meta[name="description"]') ??
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();

    metaDescription.content = description;
  }, [title, description]);
}
