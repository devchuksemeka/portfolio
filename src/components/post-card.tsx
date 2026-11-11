"use client";

import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { MotionCard } from "@/components/motion-primitives";
import { formatDate, type Post } from "@/lib/format";

export function PostCard({ post }: { post: Post }) {
  return (
    <MotionCard href={`/blog/${post.slug}`} className="card group flex h-full flex-col p-6">
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-faint">
        <span>{formatDate(post.date)}</span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
          {post.readingMinutes} min read
        </span>
      </div>
      <h3 className="font-sans text-[16px] font-bold leading-snug text-ink transition-colors group-hover:text-neon">
        {post.title}
      </h3>
      <p className="mt-2.5 line-clamp-3 flex-1 text-[13.5px] leading-relaxed text-mist">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
            >
              <Tag className="mr-1 inline h-3 w-3 align-[-1px]" strokeWidth={1.75} />
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight
          className="h-4.5 w-4.5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon"
          strokeWidth={1.75}
        />
      </div>
    </MotionCard>
  );
}
