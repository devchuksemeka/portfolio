"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { StudentProject } from "@/data/classes";
import { ProjectCard } from "@/components/project-card";
import { Stagger, StaggerItem } from "@/components/motion-primitives";

const SEARCH_THRESHOLD = 6;

export function ProjectSearch({ projects }: { projects: StudentProject[] }) {
  const [query, setQuery] = useState("");

  const normalized = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalized) return projects;
    return projects.filter((project) =>
      [project.title, project.blurb, project.student, project.tag]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [projects, normalized]);

  const showSearch = projects.length >= SEARCH_THRESHOLD;

  return (
    <div>
      {showSearch && (
        <div className="mb-6">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              strokeWidth={1.75}
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="find a project — name, type or description"
              aria-label="Search student projects"
              className="w-full rounded-md border border-line-bright bg-term py-2.5 pl-10 pr-10 font-mono text-[13px] text-ink placeholder:text-faint focus:border-neon focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-faint transition-colors hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            )}
          </div>
          {normalized && (
            <p className="mt-2.5 font-mono text-[11px] text-faint">
              {filtered.length === 0
                ? `no matches for "${query.trim()}"`
                : `showing ${filtered.length} of ${projects.length} sites`}
            </p>
          )}
        </div>
      )}

      {filtered.length > 0 ? (
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((project) => (
            <StaggerItem key={project.url} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>
      ) : (
        <div className="card border-dashed p-10 text-center">
          <p className="font-mono text-[13px] leading-relaxed text-faint">
            no projects match &ldquo;{query.trim()}&rdquo; — try a name like
            &ldquo;wig shop&rdquo;, &ldquo;photography&rdquo; or
            &ldquo;laundry&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
