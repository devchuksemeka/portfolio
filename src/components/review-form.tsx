"use client";

import { motion } from "motion/react";
import { CheckCircle2, ChevronDown, Star } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE } from "@/data/site";
import type { StudentProject } from "@/data/classes";

type Submitted = {
  name: string;
  role: string;
  rating: number;
  quote: string;
  projectUrl: string;
  projectTitle: string;
};

function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function normalizeUrl(raw: string): string | null {
  let url = raw.trim();
  if (!url) return null;
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes(".")) return null;
    return parsed.href;
  } catch {
    return null;
  }
}

function buildWhatsAppUrl(review: {
  cohortTitle: string;
  cohortSlug: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  projectUrl: string;
  projectTitle: string;
}): string {
  const lines = [
    "New class review",
    "",
    `Class: ${review.cohortTitle}`,
    `Rating: ${review.rating}/5`,
    `Name: ${review.name}`,
  ];
  if (review.role) lines.push(`Role: ${review.role}`);
  if (review.projectUrl) {
    lines.push(
      review.projectTitle
        ? `Project: ${review.projectTitle} — ${review.projectUrl}`
        : `Project: ${review.projectUrl}`,
    );
  }
  lines.push("", `"${review.quote}"`, "");
  lines.push(`— sent from devchuksemeka.com/review/${review.cohortSlug}`);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

export function ReviewForm({
  cohortTitle,
  cohortSlug,
  projects,
}: {
  cohortTitle: string;
  cohortSlug: string;
  projects: StudentProject[];
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [quote, setQuote] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [selectedUrl, setSelectedUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [state, setState] = useState<"idle" | "done">("idle");
  const [submitted, setSubmitted] = useState<Submitted | null>(null);
  const [waUrl, setWaUrl] = useState("");

  const hasPublishedProjects = projects.length > 0;
  const selectedProject = projects.find((p) => p.url === selectedUrl);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (state !== "idle") return;

    let resolvedUrl = "";
    let resolvedTitle = "";

    if (hasPublishedProjects) {
      if (!selectedProject) return;
      resolvedUrl = selectedProject.url;
      resolvedTitle = selectedProject.title;
    } else {
      const normalized = normalizeUrl(projectUrl);
      if (!normalized) {
        setUrlError(
          "that doesn't look like a published link — paste the full URL, e.g. https://your-site.lovable.app",
        );
        return;
      }
      setUrlError("");
      resolvedUrl = normalized;
    }

    const payload = {
      cohortTitle,
      cohortSlug,
      name: name.trim(),
      role: role.trim(),
      rating,
      quote: quote.trim(),
      projectUrl: resolvedUrl,
      projectTitle: resolvedTitle,
    };

    const url = buildWhatsAppUrl(payload);
    setWaUrl(url);
    setSubmitted(payload);
    setState("done");

    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (state === "done" && submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-start gap-3 rounded-md border border-neon-dim bg-neon/5 px-4 py-3 font-mono text-[13px] leading-relaxed text-neon">
          <CheckCircle2
            className="mt-0.5 h-4.5 w-4.5 shrink-0"
            strokeWidth={1.75}
          />
          <span>
            Review submitted — thank you,{" "}
            {submitted.name.split(" ")[0] || "friend"}! Your review is
            pre-filled in WhatsApp — tap send there and it lands straight
            on Chuks&rsquo; line.
          </span>
        </div>

        <div className="card p-6">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-faint">
            your review, as it will appear
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={`h-4 w-4 ${
                  n <= submitted.rating
                    ? "fill-amber text-amber"
                    : "text-faint"
                }`}
                strokeWidth={1.75}
              />
            ))}
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-mist">
            &ldquo;{submitted.quote}&rdquo;
          </p>
          <div className="mt-3 font-mono text-xs text-teal">
            {submitted.name}
            {submitted.role ? ` · ${submitted.role}` : ""}
          </div>
          <div className="mt-1 font-mono text-[11px] text-faint">
            {cohortTitle}
          </div>
          {submitted.projectUrl && (
            <div className="mt-1 truncate font-mono text-[11px] text-faint">
              project:{" "}
              {submitted.projectTitle
                ? `${submitted.projectTitle} — `
                : ""}
              {submitted.projectUrl}
            </div>
          )}
        </div>

        <p className="text-[13.5px] leading-relaxed text-mist">
          Your review will be visible on this website within the next few
          hours.
        </p>

        <div className="rounded-md border border-dashed border-line-bright bg-elev/40 p-4 font-mono text-xs leading-relaxed text-faint">
          <div className="mb-1.5 text-mist">
            {"// how this works — no database yet, on purpose"}
          </div>
          <div>1. your review lands on Chuks&rsquo; WhatsApp line</div>
          <div>2. AI helps him fold it into the site</div>
          <div>3. a fresh build deploys — usually within hours</div>
          <div className="mt-2 text-teal">
            → opens WhatsApp with everything pre-filled — just tap send
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          WhatsApp didn&rsquo;t open? tap here to send it
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="flex flex-col gap-4 rounded-lg border border-line bg-panel p-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-xs text-amber">
          {"// "}
          review &ldquo;{cohortTitle}&rdquo;
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(n)}
              className="cursor-pointer p-0.5"
            >
              <Star
                className={`h-4.5 w-4.5 transition-colors ${
                  n <= (hover || rating)
                    ? "fill-amber text-amber"
                    : "text-faint"
                }`}
                strokeWidth={1.75}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="rounded-md border border-line-bright bg-term px-3.5 py-2.5 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
        <input
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="What you do (e.g. salon owner)"
          aria-label="Your role"
          className="rounded-md border border-line-bright bg-term px-3.5 py-2.5 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
      </div>

      {hasPublishedProjects ? (
        <div>
          <label
            htmlFor="review-project"
            className="mb-2 block font-mono text-xs text-amber"
          >
            {"// "}
            your published project
          </label>
          <div className="relative">
            <select
              id="review-project"
              required
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
              className="w-full appearance-none rounded-md border border-line-bright bg-term px-3.5 py-2.5 pr-9 font-mono text-[13px] text-ink focus:border-neon focus:outline-none"
            >
              <option value="" disabled>
                find the site you built…
              </option>
              {projects.map((project) => (
                <option key={project.url} value={project.url}>
                  {project.title} · {hostOf(project.url)}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              strokeWidth={1.75}
            />
          </div>
          {selectedProject && (
            <p className="mt-2 truncate font-mono text-[11px] text-teal">
              → {selectedProject.title} — {selectedProject.url}
            </p>
          )}
          <p className="mt-2 text-[12px] leading-relaxed text-faint">
            reviews only come from learners with a published site —
            that&rsquo;s what keeps every review real. can&rsquo;t find
            yours?{" "}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal transition-colors hover:text-neon"
            >
              send it to Chuks on WhatsApp
            </a>{" "}
            to get it listed, then come back.
          </p>
        </div>
      ) : (
        <div>
          <label
            htmlFor="review-project"
            className="mb-2 block font-mono text-xs text-amber"
          >
            {"// "}
            your published link
          </label>
          <input
            id="review-project"
            required
            value={projectUrl}
            onChange={(e) => {
              setProjectUrl(e.target.value);
              if (urlError) setUrlError("");
            }}
            placeholder="link to what you built & published"
            aria-label="Your published project link"
            className="w-full rounded-md border border-line-bright bg-term px-3.5 py-2.5 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
          />
          {urlError && (
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-amber">
              {urlError}
            </p>
          )}
          <p className="mt-2 text-[12px] leading-relaxed text-faint">
            reviews only come from learners who shipped something public —
            paste the link to what you built in this class (your site,
            portfolio or repo).
          </p>
        </div>
      )}

      <div>
        <label
          htmlFor="review-quote"
          className="mb-2 block font-mono text-xs text-amber"
        >
          {"// "}
          what did you learn
        </label>
        <textarea
          id="review-quote"
          required
          rows={4}
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="What did you learn, and what has it done for you?"
          aria-label="Your review"
          className="w-full resize-none rounded-md border border-line-bright bg-term px-3.5 py-2.5 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
        <p className="mt-2 text-[12px] leading-relaxed text-faint">
          tell it like it happened: what you learned, what you built, and
          how it&rsquo;s helping you now. specific beats sweet —{" "}
          <span className="text-mist">
            &ldquo;my shop takes bookings through the site I built&rdquo;
          </span>{" "}
          tells the next beginner more than &ldquo;great class&rdquo;.
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-faint">
          sends straight to Chuks&rsquo; WhatsApp · shows up on the site
          within a few hours
        </span>
        <button type="submit" className="btn btn-primary btn-sm shrink-0">
          submit review
        </button>
      </div>
    </form>
  );
}
