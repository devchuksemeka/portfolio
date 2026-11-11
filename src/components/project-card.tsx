"use client";

import { ExternalLink } from "lucide-react";
import type { StudentProject } from "@/data/classes";
import { MotionCard } from "@/components/motion-primitives";

export function ProjectCard({ project }: { project: StudentProject }) {
  return (
    <MotionCard
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group block overflow-hidden"
    >
      <div className="relative aspect-[1200/750] overflow-hidden border-b border-line bg-elev">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} — student project website`}
          width={1200}
          height={750}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded bg-abyss/85 px-2.5 py-1.5 font-mono text-[11px] text-neon opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
          visit site
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-sans text-[15px] font-bold text-ink">
            {project.title}
          </span>
          <span className="shrink-0 rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint">
            {project.tag}
          </span>
        </div>
        <div className="mt-1 font-mono text-xs text-teal">
          by {project.student}
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-mist">
          {project.blurb}
        </p>
      </div>
    </MotionCard>
  );
}
