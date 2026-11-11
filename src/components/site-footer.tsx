import Link from "next/link";
import { SITE } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

const FOOTER_NAV = [
  { href: "/", label: "home" },
  { href: "/classes", label: "classes" },
  { href: "/blog", label: "blog" },
  { href: "/my-resume", label: "my-resume" },
  { href: "/#contact", label: "contact" },
];

export function SiteFooter() {
  return (
    <footer className="no-print relative z-[2] border-t border-line bg-elev/40">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3 md:gap-8">
        <div>
          <div className="flex items-center font-mono text-sm font-bold text-ink">
            {SITE.handle}
            <span className="ml-1 inline-block h-3.5 w-1.5 animate-blink bg-neon" />
          </div>
          <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-faint">
            Full-stack engineer steering hard into AI. Building with it,
            certified on it, teaching it — and writing it all down.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <div className="eyebrow">sitemap</div>
          <ul className="flex flex-col gap-2.5 font-mono text-[13px] text-mist">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-neon">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">direct line</div>
          <ul className="flex flex-col gap-2.5 font-mono text-[13px] text-mist">
            <li>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon"
              >
                WhatsApp · {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-neon">
                {SITE.phone}
              </a>
            </li>
            <li className="text-faint">{SITE.email}</li>
            <li className="text-faint">{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <div className="wrap flex flex-col items-center justify-between gap-2 font-mono text-xs text-faint md:flex-row">
          <span>
            {"// built by Chuks — compiled with intent, deployed with confidence."}
          </span>
          <span>© {new Date().getFullYear()} {SITE.name}</span>
        </div>
      </div>
    </footer>
  );
}
