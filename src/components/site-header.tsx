"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

const NAV = [
  { href: "/", label: "home" },
  { href: "/classes", label: "classes" },
  { href: "/blog", label: "blog" },
  { href: "/my-resume", label: "my-resume" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-40 border-b border-line bg-abyss/75 backdrop-blur-md">
      <nav className="wrap flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center font-mono text-[15px] font-bold text-ink"
        >
          {SITE.handle}
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-neon" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            hire me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="icon-btn md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.75} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-abyss/95 backdrop-blur-md md:hidden"
          >
            <div className="wrap flex flex-col gap-4 py-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link w-fit ${
                    isActive(item.href) ? "nav-link-active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm w-fit"
              >
                hire me
              </a>
              <SocialLinks />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
