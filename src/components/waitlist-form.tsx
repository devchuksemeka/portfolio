"use client";

import { motion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SITE } from "@/data/site";
import { UPCOMING_COHORT } from "@/data/classes";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "done">("idle");
  const [waUrl, setWaUrl] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    if (state !== "idle") return;

    const lines = [
      "Waitlist signup",
      "",
      `Class: ${UPCOMING_COHORT.title} (${UPCOMING_COHORT.period})`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      "— from devchuksemeka.com",
    ];
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setWaUrl(url);
    setState("done");

    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (state === "done") {
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
            You&apos;re in — your signup is pre-filled in WhatsApp. Tap
            send there and you&apos;re on the list.
          </span>
        </div>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neon btn-sm"
        >
          WhatsApp didn&rsquo;t open? tap here to join
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-label="Your name"
          className="w-full rounded-md border border-line-bright bg-term px-4 py-3 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full rounded-md border border-line-bright bg-term px-4 py-3 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
      </div>
      <button type="submit" className="btn btn-neon shrink-0">
        <Send className="h-4 w-4" strokeWidth={2} />
        join waitlist via WhatsApp
      </button>
      {!compact && (
        <p className="font-mono text-xs text-faint">
          opens WhatsApp with your signup pre-filled — no database yet, on
          purpose. paid registrations &amp; referral links land here first.
        </p>
      )}
    </form>
  );
}
