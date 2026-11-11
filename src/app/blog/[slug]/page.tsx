import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  GraduationCap,
  Rocket,
  Tag,
} from "lucide-react";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { CopyLinkButton } from "@/components/copy-link-button";
import { Reveal } from "@/components/motion-primitives";
import { SITE } from "@/data/site";
import { SocialLinks } from "@/components/social-links";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pb-28 pt-32">
      <div className="wrap max-w-3xl">
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-mist transition-colors hover:text-neon"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            all posts
          </Link>

          <h1 className="mt-6 font-sans text-[clamp(24px,4vw,36px)] font-extrabold leading-tight tracking-tight text-ink">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-line pb-6 font-mono text-xs text-faint">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={1.75} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
              {post.readingMinutes} min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="h-3.5 w-3.5" strokeWidth={1.75} />
              {post.tags.join(" · ")}
            </span>
            <span className="ml-auto">
              <CopyLinkButton />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="prose prose-invert mt-8 max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </Reveal>

        {/* AUTHOR / CTA */}
        <Reveal className="mt-14">
          <div className="card p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-sm font-bold text-ink">
                  {SITE.name} — &quot;Chuks&quot;
                </div>
                <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-mist">
                  Full-stack engineer steering into AI. OpenAI-certified,
                  studying AI engineering, teaching cohorts to ship real
                  websites with AI.
                </p>
              </div>
              <SocialLinks />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/classes" className="btn btn-neon btn-sm">
                <GraduationCap className="h-3.5 w-3.5" strokeWidth={2} />
                join a class
              </Link>
              <a
                href={SITE.whatsappProject}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <Rocket className="h-3.5 w-3.5" strokeWidth={2} />
                work with me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
