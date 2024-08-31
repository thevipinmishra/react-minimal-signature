import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";
import type { BundledLanguage, BundledTheme } from "shiki";
import { useEffect, useState } from "react";
// import CopyToClipboard from "./CopyToClipboard";

type Props = {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  filename?: string;
};
export default function Code({
  code,
  lang = "javascript",
  theme = "catppuccin-macchiato",
  filename,
}: Props) {
  const [html, setHTML] = useState<TrustedHTML | null>(null);

  useEffect(() => {
    async function highlightCode() {
      const htmlString = await codeToHtml(code, {
        lang,
        theme,
      });
      setHTML(htmlString as TrustedHTML);
    }

    highlightCode();
  }, [code]);

  return (
    <div className="relative">
      {html ? (
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="[&_pre]:p-4 [&_pre]:rounded-md [&_pre]:shadow-md [&_pre]:text-sm [&_pre]:overflow-x-auto"
        ></div>
      ) : (
        <p className="text-sm text-slate-700">Loading...</p>
      )}
    </div>
  );
}
