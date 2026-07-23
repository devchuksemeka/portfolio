"use client";

import { useEffect } from "react";

const sequence = [
  { type: "cmd" as const, text: "whoami" },
  {
    type: "out" as const,
    text: 'Chukwuemeka "Chuks" Okafor — Senior Full-Stack Engineer',
    cls: "",
  },
  { type: "cmd" as const, text: "cat role.txt" },
  {
    type: "out" as const,
    text: "Founder-minded engineer. 8 years turning zero-to-one ideas into production systems.",
    cls: "dim",
  },
  { type: "cmd" as const, text: "ls -la ./companies" },
  {
    type: "out" as const,
    text: "carojon/  clearlabs/  gains-associate/  releaf/  nuture-tech/  techie-planet/  technovia/",
    cls: "green",
  },
  { type: "cmd" as const, text: "echo $STATUS" },
  {
    type: "out" as const,
    text: "open to senior / staff full-stack roles, remote or relocation",
    cls: "cyan",
  },
];

export default function PortfolioInit() {
  useEffect(() => {
    const termBody = document.getElementById("term-body");
    if (!termBody) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function renderInstant() {
      termBody!.innerHTML = sequence
        .map((s) => {
          if (s.type === "cmd") {
            return `<div class="term-line"><span class="prompt">$</span> ${s.text}</div>`;
          }
          return `<div class="term-out ${s.cls}" style="margin-bottom:14px;">${s.text}</div>`;
        })
        .join("");
    }

    let cancelled = false;

    async function typeSequence() {
      for (const step of sequence) {
        if (cancelled) return;
        if (step.type === "cmd") {
          const line = document.createElement("div");
          line.className = "term-line";
          line.innerHTML =
            '<span class="prompt">$</span> <span class="type-target"></span><span class="type-cursor"></span>';
          termBody!.appendChild(line);
          const target = line.querySelector(".type-target") as HTMLElement;
          const cursor = line.querySelector(".type-cursor") as HTMLElement;
          for (let i = 0; i < step.text.length; i++) {
            if (cancelled) return;
            target.textContent += step.text[i];
            await new Promise((r) => setTimeout(r, 22 + Math.random() * 28));
          }
          cursor.remove();
          await new Promise((r) => setTimeout(r, 120));
        } else {
          const out = document.createElement("div");
          out.className = `term-out ${step.cls}`;
          out.style.marginBottom = "14px";
          out.style.opacity = "0";
          out.textContent = step.text;
          termBody!.appendChild(out);
          requestAnimationFrame(() => {
            out.style.transition = "opacity .35s ease";
            out.style.opacity = "1";
          });
          await new Promise((r) => setTimeout(r, 260));
        }
      }
    }

    if (reduceMotion) {
      renderInstant();
    } else {
      typeSequence();
    }

    // ---- scroll reveal ----
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    // ---- animated stat counters ----
    const statBlock = document.getElementById("stats-block");
    let counted = false;

    function animateCounters() {
      if (counted) return;
      counted = true;
      document.querySelectorAll(".stat .n").forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.count || "0", 10);
        const suffix = (el as HTMLElement).dataset.suffix || "";
        if (reduceMotion) {
          el.textContent = target + suffix;
          return;
        }
        let cur = 0;
        const dur = 900;
        const start = performance.now();

        function tick(now: number) {
          const p = Math.min((now - start) / dur, 1);
          cur = Math.floor(p * target);
          el.textContent = cur + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(tick);
      });
    }

    const statIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) animateCounters();
        });
      },
      { threshold: 0.4 }
    );
    if (statBlock) statIo.observe(statBlock);

    // ---- status bar scroll % ----
    const scrollPct = document.getElementById("scroll-pct");

    function onScroll() {
      const h = document.documentElement;
      const pct = Math.round(
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      );
      if (scrollPct)
        scrollPct.textContent = (isFinite(pct) ? pct : 0) + "%";
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelled = true;
      io.disconnect();
      statIo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
