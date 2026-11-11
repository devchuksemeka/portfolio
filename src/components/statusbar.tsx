"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function fileFor(pathname: string): string {
  if (pathname === "/") return "landing.tsx";
  if (pathname === "/classes") return "classes.tsx";
  if (pathname === "/blog") return "blog.md";
  if (pathname === "/my-resume") return "resume.tsx";
  if (pathname.startsWith("/blog/")) return `${pathname.split("/")[2]}.md`;
  return "index.tsx";
}

export function Statusbar() {
  const pathname = usePathname();
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const raw =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 || 0;
      setPct(Math.round(raw));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-50 flex items-center justify-between border-t border-line bg-elev px-4 py-1.5 font-mono text-[11px] tracking-wide text-faint">
      <div className="flex items-center gap-4">
        <span className="rounded bg-neon px-2 py-px font-bold text-[#03150a]">
          NORMAL
        </span>
        <span className="hidden text-mist sm:inline">{fileFor(pathname)}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">{pct}%</span>
        <span>UTF-8</span>
        <span className="hidden sm:inline">main</span>
      </div>
    </div>
  );
}
