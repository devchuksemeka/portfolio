"use client";

import { motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || state !== "idle") return;
    setState("sending");
    await new Promise((r) => setTimeout(r, 900));
    setState("done");
  }

  if (state === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 rounded-md border border-neon-dim bg-neon/5 px-4 py-3 font-mono text-[13px] text-neon"
      >
        <CheckCircle2 className="h-4.5 w-4.5 shrink-0" strokeWidth={1.75} />
        <span>
          You&apos;re on the list — watch {email} for cohort news.
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          className="w-full flex-1 rounded-md border border-line-bright bg-term px-4 py-3 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn btn-neon shrink-0 disabled:opacity-70"
        >
          {state === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
              joining…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" strokeWidth={2} />
              join waitlist
            </>
          )}
        </button>
      </div>
      {!compact && (
        <p className="font-mono text-xs text-faint">
          Paid registrations &amp; referral links land here first. No spam —
          cohort news only.
        </p>
      )}
    </form>
  );
}
