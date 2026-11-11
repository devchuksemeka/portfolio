import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export { formatDate } from "@/lib/format";
export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

function toPost(file: string, raw: string): Post {
  const slug = file.replace(/\.md$/, "");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    excerpt: String(data.excerpt ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => toPost(f, fs.readFileSync(path.join(POSTS_DIR, f), "utf8")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  const file = `${slug}.md`;
  const full = path.join(POSTS_DIR, file);
  if (!fs.existsSync(full)) return undefined;
  return toPost(file, fs.readFileSync(full, "utf8"));
}
