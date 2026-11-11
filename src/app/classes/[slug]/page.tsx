import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Globe,
  MessageSquareHeart,
  Quote,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { COHORTS } from "@/data/classes";
import { ProjectCard } from "@/components/project-card";
import { CopyLinkButton } from "@/components/copy-link-button";
import { KindChip } from "@/components/class-meta";
import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion-primitives";

export function generateStaticParams() {
  return COHORTS.map((cohort) => ({ slug: cohort.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cohort = COHORTS.find((c) => c.slug === slug);
  if (!cohort) return { title: "Class not found" };
  return {
    title: cohort.title,
    description: `${cohort.summary} ${cohort.learnersLabel}.`,
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cohort = COHORTS.find((c) => c.slug === slug);
  if (!cohort) notFound();

  return (
    <div className="pb-28 pt-32">
      {/* HEADER */}
      <section className="wrap max-w-4xl">
        <Reveal>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-mist transition-colors hover:text-neon"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            all classes
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <KindChip cohort={cohort} />
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-amber">
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.period}
            </span>
          </div>

          <h1 className="mt-4 font-sans text-[clamp(26px,4.5vw,42px)] font-extrabold leading-[1.12] tracking-tight text-ink">
            {cohort.title}
          </h1>

          <p
            className="mt-2.5 font-mono text-[13px]"
            style={{ color: cohort.accent }}
          >
            {cohort.tagline}
          </p>

          {cohort.poweredBy && (
            <p className="mt-2 font-mono text-[11px] text-faint">
              powered by {cohort.poweredBy}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-faint">
            <span className="flex items-center gap-1.5 text-teal">
              <Clock3 className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.format}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.learnersLabel}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-mist">
            {cohort.description}
          </p>
        </Reveal>
      </section>

      {/* WHAT WE COVERED */}
      <section className="wrap max-w-4xl pt-14">
        <Reveal>
          <div className="card p-7">
            <div className="eyebrow mb-4">what we covered</div>
            <div className="flex flex-wrap gap-2">
              {cohort.highlights.map((h) => (
                <span key={h} className="chip">
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-5">
              <div className="mb-2.5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-faint">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
                what we built with
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cohort.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded border px-2 py-0.5 font-mono text-[10.5px]"
                    style={{
                      color: cohort.accent,
                      borderColor: `${cohort.accent}55`,
                      background: `${cohort.accent}0d`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* STUDENT PROJECTS */}
      <section className="wrap pt-20">
        <Reveal>
          <div className="eyebrow">
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            student projects
          </div>
          <h2 className="sec-title">What the class built.</h2>
        </Reveal>

        {cohort.projects.length > 0 ? (
          <>
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {cohort.projects.map((project) => (
                <StaggerItem key={project.url} className="h-full">
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-4">
              <p className="font-mono text-xs text-faint">
                {"// "}
                {cohort.projects.length} live site
                {cohort.projects.length === 1 ? "" : "s"} shared by learners —
                every card opens in a new tab, hosted by the students
              </p>
            </Reveal>
          </>
        ) : (
          <Reveal>
            <div className="card flex flex-col items-center gap-3 border-dashed p-10 text-center">
              <Globe
                className="h-8 w-8"
                strokeWidth={1.25}
                style={{ color: cohort.accent }}
              />
              <h3 className="font-sans text-[15px] font-bold text-ink">
                Student projects coming soon
              </h3>
              <p className="max-w-md text-[13.5px] leading-relaxed text-mist">
                The sites built in this class are real and live — links (and
                screenshots) land on this page as students share them.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* REVIEWS */}
      <section className="wrap max-w-4xl pt-20">
        <Reveal>
          <div className="eyebrow">
            <Quote className="h-3.5 w-3.5" strokeWidth={1.75} />
            what learners said
          </div>
          <h2 className="sec-title">Reviews from this class.</h2>
        </Reveal>

        {cohort.reviews.length > 0 ? (
          <Stagger className="grid gap-5 md:grid-cols-2">
            {cohort.reviews.map((review) => (
              <StaggerItem key={review.name}>
                <div className="card h-full p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < review.rating
                            ? "fill-amber text-amber"
                            : "text-line-bright"
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-mist">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-3 font-mono text-xs text-teal">
                    {review.name} · {review.role}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <Reveal>
            <p className="font-mono text-[13px] text-faint">
              {"// no reviews here yet — be the first to share your experience"}
            </p>
          </Reveal>
        )}

        {/* REVIEW CTA */}
        <Reveal className="mt-8">
          <div className="card flex flex-col items-start justify-between gap-5 border-line-bright p-7 md:flex-row md:items-center">
            <div>
              <h3 className="flex items-center gap-2.5 font-sans text-[15px] font-bold text-ink">
                <MessageSquareHeart className="h-5 w-5 text-neon" strokeWidth={1.75} />
                Took this class?
              </h3>
              <p className="mt-1.5 text-[13.5px] text-mist">
                Share your experience — it takes two minutes and helps the
                next beginner decide.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href={`/review/${cohort.slug}`} className="btn btn-neon btn-sm">
                share your experience
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
              <CopyLinkButton path={`/review/${cohort.slug}`} label="copy review link" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
