import type { Metadata } from "next";
import { PenLine, Rss } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { formatDate } from "@/lib/posts";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the build — what Chuks is learning about AI engineering, teaching with AI, and shipping websites in the AI era.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="pb-28 pt-32">
      <section className="wrap">
        <Reveal>
          <div className="eyebrow">
            <Rss className="h-3.5 w-3.5" strokeWidth={1.75} />
            ls ./posts
          </div>
          <h1 className="font-sans text-[clamp(28px,4.5vw,42px)] font-extrabold tracking-tight text-ink">
            Notes from the build.
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-mist">
            What I&apos;m learning about AI engineering and teaching people to
            build with AI — workflows, opinions, and the occasional technical
            deep-dive. Steal anything useful.
          </p>
        </Reveal>

        {featured && (
          <Reveal delay={0.1} className="mt-12">
            <a
              href={`/blog/${featured.slug}`}
              className="card group block overflow-hidden p-7 transition-colors duration-300 hover:border-line-bright md:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] text-amber">
                <span className="rounded border border-amber/40 bg-amber/8 px-2 py-0.5">
                  latest post
                </span>
                <span className="text-faint">{formatDate(featured.date)}</span>
                <span className="text-faint">{featured.readingMinutes} min read</span>
              </div>
              <h2 className="mt-4 max-w-3xl font-sans text-[clamp(20px,3vw,30px)] font-bold leading-tight text-ink transition-colors group-hover:text-neon">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-mist">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        )}

        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16">
          <p className="flex items-center gap-2 font-mono text-xs text-faint">
            <PenLine className="h-3.5 w-3.5" strokeWidth={1.75} />
            new posts land here first, then get shared everywhere else
          </p>
        </Reveal>
      </section>
    </div>
  );
}
