import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Rocket } from "lucide-react";
import {
  allTools,
  COHORTS,
  totalLearners,
  totalStudentSites,
  UPCOMING_COHORT,
} from "@/data/classes";
import { SITE } from "@/data/site";
import { WaitlistForm } from "@/components/waitlist-form";
import { KindChip } from "@/components/class-meta";
import {
  MotionCard,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Classes & Programs",
  description:
    "Skill acquisition programs, 1-on-1 exam prep, summer coding classes and frontend mentorship — every class Chuks teaches has its own page.",
};

export default function ClassesPage() {
  return (
    <div className="pb-28 pt-32">
      {/* INTRO */}
      <section className="wrap">
        <Reveal>
          <div className="eyebrow">classes &amp; programs</div>
          <h1 className="font-sans text-[clamp(28px,4.5vw,44px)] font-extrabold leading-[1.12] tracking-tight text-ink">
            Every class I teach.
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-mist">
            From a church-hall skill acquisition program with 30+ learners to
            1-on-1 exam prep and frontend mentorship — each class below has
            its own page: what we covered, the tools we used, student
            projects as they come in, and what learners said about it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
            {[
              { value: COHORTS.length, label: "Classes & programs" },
              { value: `${totalLearners()}+`, label: "People taught" },
              { value: totalStudentSites(), label: "Student sites live" },
              { value: allTools().length, label: "Tools & tech taught" },
            ].map((stat) => (
              <div key={stat.label} className="bg-panel px-5 py-6">
                <div className="font-sans text-[26px] font-bold text-neon">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-mono text-[10.5px] uppercase tracking-wider text-faint">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CLASSES */}
      <section className="wrap pt-20">
        <Reveal>
          <div className="eyebrow">the classes</div>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2">
          {COHORTS.map((cohort) => (
            <StaggerItem key={cohort.slug} className="h-full">
              <MotionCard
                href={`/classes/${cohort.slug}`}
                className="card group flex h-full flex-col p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <KindChip cohort={cohort} />
                  <span className="font-mono text-[11px] text-faint">
                    {cohort.period}
                  </span>
                </div>

                <h2 className="mt-3.5 font-sans text-lg font-bold leading-snug text-ink transition-colors group-hover:text-neon">
                  {cohort.title}
                </h2>
                {cohort.poweredBy && (
                  <p
                    className="mt-1 font-mono text-[11px]"
                    style={{ color: cohort.accent }}
                  >
                    powered by {cohort.poweredBy}
                  </p>
                )}
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mist">
                  {cohort.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cohort.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
                    >
                      {tool}
                    </span>
                  ))}
                  {cohort.tools.length > 4 && (
                    <span className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint">
                      +{cohort.tools.length - 4} more
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span
                    className="font-mono text-xs"
                    style={{ color: cohort.accent }}
                  >
                    {cohort.learnersLabel}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-faint transition-colors group-hover:text-ink">
                    open class page
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* UPCOMING + WAITLIST */}
      <section className="wrap pt-20" id="join">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line-bright bg-panel p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-neon/8 blur-3xl" />
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-amber">
              <span className="flex items-center gap-1.5">
                <Rocket className="h-4 w-4" strokeWidth={1.75} />
                {UPCOMING_COHORT.period}
              </span>
              <span className="badge-live">{UPCOMING_COHORT.seats}</span>
            </div>
            <h2 className="mt-3 font-sans text-[clamp(22px,3vw,30px)] font-bold leading-tight tracking-tight text-ink">
              {UPCOMING_COHORT.title}
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-mist">
              {UPCOMING_COHORT.summary}
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {UPCOMING_COHORT.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 font-mono text-[13px] text-mist"
                >
                  <span className="text-neon">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* TEAM CTA */}
      <section className="wrap pt-16">
        <Reveal>
          <div className="card flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
            <div>
              <h3 className="font-sans text-[15px] font-bold text-ink">
                Want a class for your team, church or community?
              </h3>
              <p className="mt-1.5 text-[13.5px] text-mist">
                Custom cohorts and private groups — let&apos;s talk about it.
              </p>
            </div>
            <a
              href={SITE.whatsappTeach}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm shrink-0"
            >
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
              chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-teal transition-colors hover:text-neon"
          >
            read the workflow posts behind these classes
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
