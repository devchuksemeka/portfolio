"use client";

import { Check, Link2 } from "lucide-react";
import { useState } from "react";

export function CopyLinkButton({
  path,
  label = "copy link",
}: {
  path?: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      const url = path
        ? new URL(path, window.location.origin).href
        : window.location.href;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" onClick={copy} className="btn btn-ghost btn-sm">
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-neon" strokeWidth={2} />
          link copied
        </>
      ) : (
        <>
          <Link2 className="h-3.5 w-3.5" strokeWidth={2} />
          {label}
        </>
      )}
    </button>
  );
}
