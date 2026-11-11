import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EXPERIENCE,
  SKILL_GROUPS,
  SUMMARY,
  TEACHING,
} from "@/data/resume";
import { SITE } from "@/data/site";
import { PrintButton } from "@/components/print-button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "My Resume",
  description:
    "Chuks Okafor — resume. 10 years shipping production systems across fintech, agtech, govtech, healthtech and Web3; now AI engineering: OpenAI API Deployment Practitioner certified.",
};

export default function ResumePage() {
  return (
    <div className="print-surface pb-32 pt-32">
      <div className="wrap max-w-4xl">
        {/* HEADER */}
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="eyebrow">
                <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
                cat my-resume.pdf
              </div>
              <h1 className="font-sans text-[clamp(26px,4vw,38px)] font-extrabold tracking-tight text-ink">
                {SITE.name}
              </h1>
              <p className="mt-1.5 font-mono text-[14px] text-teal">
                Senior Full-Stack Engineer → AI Engineer
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12.5px] text-mist">
                <span className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {SITE.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.75} />
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon"
                  >
                    {SITE.phone} · WhatsApp
                  </a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {SITE.location}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12.5px] text-mist">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-neon"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  github.com/devchuksemeka
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-neon"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                  linkedin.com/in/devchuksemeka
                </a>
              </div>
            </div>
            <PrintButton />
          </div>
        </Reveal>

        {/* SUMMARY */}
        <Reveal className="mt-10">
          <h2 className="print-accent mb-3 font-mono text-xs uppercase tracking-widest text-amber">
            summary
          </h2>
          <p className="max-w-3xl text-[14.5px] leading-relaxed text-mist">
            {SUMMARY}
          </p>
        </Reveal>

        {/* CERTIFICATIONS */}
        <Reveal className="mt-10">
          <h2 className="print-accent mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber">
            <BadgeCheck className="h-4 w-4" strokeWidth={1.75} />
            certifications &amp; ai credentials
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="card p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[14px] font-bold text-ink">
                    {cert.title}
                  </span>
                  <span className="badge-live shrink-0">{cert.status}</span>
                </div>
                <div className="mt-1 font-mono text-[11px] text-faint">{cert.issuer}</div>
                <p className="mt-2.5 text-[13px] leading-relaxed text-mist">{cert.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* TEACHING */}
        <Reveal className="mt-10">
          <h2 className="print-accent mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber">
            <Users className="h-4 w-4" strokeWidth={1.75} />
            teaching &amp; community
          </h2>
          <div className="space-y-3">
            {TEACHING.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <div className="font-mono text-[14px] font-bold text-ink">
                  {item.title}
                </div>
                <p className="text-[13.5px] leading-relaxed text-mist">{item.note}</p>
              </div>
            ))}
            <Link
              href="/classes"
              className="no-print inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:text-neon"
            >
              see student projects &amp; reviews
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        {/* SKILLS */}
        <Reveal className="mt-10">
          <h2 className="print-accent mb-3 font-mono text-xs uppercase tracking-widest text-amber">
            core stack
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.key}>
                <div className="font-mono text-[13px] font-bold text-teal">
                  {group.label}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-mist"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* EXPERIENCE */}
        <Reveal className="mt-10">
          <h2 className="print-accent mb-5 font-mono text-xs uppercase tracking-widest text-amber">
            experience
          </h2>
          <Stagger className="space-y-8">
            {EXPERIENCE.map((role) => (
              <StaggerItem key={`${role.company}-${role.period}`}>
                <div className="border-l-2 border-line pl-5">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[15.5px] font-bold text-ink">
                      {role.role}
                    </span>
                    <span className="font-mono text-[14px] text-teal">
                      @ {role.company}
                    </span>
                    {role.current && <span className="badge-live">CURRENT</span>}
                  </div>
                  <div className="mt-0.5 font-mono text-[11.5px] text-faint">
                    {role.period} · {role.location}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-[13.5px] leading-relaxed text-mist before:absolute before:left-0 before:text-neon before:content-['+']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line px-2 py-0.5 font-mono text-[10.5px] text-faint"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

        {/* FOOTER */}
        <Reveal className="mt-12">
          <div className="rounded-lg border border-dashed border-line p-5 font-mono text-xs leading-relaxed text-faint">
            <div className="flex items-center gap-2 text-mist">
              <GraduationCap className="h-4 w-4" strokeWidth={1.75} />
              {SITE.name} — references available on request.
            </div>
            <div className="mt-1.5">
              {"// always current at devchuksemeka — /my-resume · print → save as pdf"}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
