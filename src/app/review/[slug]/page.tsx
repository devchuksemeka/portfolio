import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { COHORTS } from "@/data/classes";
import { SITE } from "@/data/site";
import { ReviewForm } from "@/components/review-form";
import { KindChip } from "@/components/class-meta";
import { Reveal } from "@/components/motion-primitives";

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
  if (!cohort) return { title: "Review not found" };
  return {
    title: `Review — ${cohort.title}`,
    description: `Took "${cohort.title}"? Share your experience in two minutes.`,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cohort = COHORTS.find((c) => c.slug === slug);
  if (!cohort) notFound();

  const classmates = cohort.projects.slice(0, 3);

  return (
    <div className="wrap max-w-2xl pb-28 pt-32">
      <Reveal>
        <Link
          href={`/classes/${cohort.slug}`}
          className="inline-flex items-center gap-2 font-mono text-[13px] text-mist transition-colors hover:text-neon"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          back to the class
        </Link>

        <div className="mt-10 flex items-center gap-2.5 font-mono text-xs text-amber">
          <Star className="h-4 w-4" strokeWidth={1.75} />
          share your experience
        </div>
        <h1 className="mt-3 font-sans text-[clamp(26px,4.5vw,40px)] font-extrabold leading-[1.12] tracking-tight text-ink">
          How was &ldquo;{cohort.title}&rdquo;?
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-mist">
          Your honest review helps the next beginner take the first step —
          and keeps me honest about what to improve. It takes two minutes,
          and specific beats brief: say what the class did for you.
          Reviews come only from learners with published work — that&rsquo;s
          what keeps every review real.
        </p>
      </Reveal>

      {/* COURSE RECAP */}
      <Reveal delay={0.08}>
        <div className="card mt-8 p-7">
          <div className="eyebrow mb-3">the class you took</div>
          <h2 className="font-sans text-lg font-bold leading-snug text-ink">
            {cohort.title}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <KindChip cohort={cohort} />
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-amber">
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.period}
            </span>
          </div>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-faint">
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.format}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5" strokeWidth={1.75} />
              {cohort.learnersLabel}
            </span>
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-mist">
            {cohort.description}
          </p>

          <div className="mt-5">
            <div className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-faint">
              what we covered
            </div>
            <div className="flex flex-wrap gap-2">
              {cohort.highlights.map((h) => (
                <span key={h} className="chip">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 border-t border-line pt-5">
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

          {classmates.length > 0 && (
            <div className="mt-6">
              <div className="mb-2.5 font-mono text-[11px] uppercase tracking-widest text-faint">
                sites your classmates launched
              </div>
              <div className="grid grid-cols-3 gap-3">
                {classmates.map((project) => (
                  <a
                    key={project.url}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overflow-hidden rounded border border-line transition-colors hover:border-neon"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`${project.title} — student project`}
                      width={1200}
                      height={750}
                      loading="lazy"
                      className="aspect-[1200/750] w-full object-cover"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>

      {/* REVIEW FORM */}
      <Reveal delay={0.12}>
        <div className="mt-8">
          <div className="eyebrow mb-4">your turn</div>
          <ReviewForm
            cohortTitle={cohort.title}
            cohortSlug={cohort.slug}
            projects={cohort.projects}
          />
        </div>
        <p className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-faint">
          <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.75} />
          prefer to talk? WhatsApp me at
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-neon"
          >
            {SITE.phone}
          </a>
        </p>
      </Reveal>
    </div>
  );
}
