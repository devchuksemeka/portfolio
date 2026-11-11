import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Globe,
  GraduationCap,
  Hammer,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { SITE } from "@/data/site";
import { COHORTS, totalLearners, totalStudentSites } from "@/data/classes";
import { getAllPosts } from "@/lib/posts";
import { ProjectCard } from "@/components/project-card";
import { PostCard } from "@/components/post-card";
import { SocialLinks } from "@/components/social-links";
import { WaitlistForm } from "@/components/waitlist-form";
import { Statusbar } from "@/components/statusbar";
import { KindChip } from "@/components/class-meta";
import {
  Counter,
  MotionCard,
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion-primitives";

const WHAT_STUDENTS_BUILD = [
  "websites built with AI",
  "Lovable",
  "Bolt",
  "v0",
  "Codex",
  "opencode",
  "HTML · CSS · JS",
  "Python",
  "GitHub",
  "Vercel deploys",
  "Next.js",
  "MUI",
  "API integration",
  "exam prep",
];

const STATS = [
  { value: totalLearners(), suffix: "+", label: "People taught" },
  { value: totalStudentSites(), suffix: "", label: "Student sites live" },
  { value: 10, suffix: "", label: "Years building software" },
  { value: 300, suffix: "+", label: "Businesses on software I built" },
];

const ABOUT_CARDS = [
  {
    icon: BadgeCheck,
    title: "Certified, not just confident",
    text: "I completed OpenAI's API Deployment Practitioner certification. In plain words: officially trained to put AI to work in real products, safely.",
  },
  {
    icon: GraduationCap,
    title: "Always a student",
    text: "I'm currently working through a professional AI engineering course — so what I teach is always current, never secondhand.",
  },
  {
    icon: HeartHandshake,
    title: "Zero-jargon teaching",
    text: "My classes are built for salon owners, photographers and caterers — not computer scientists. If you can use WhatsApp, you can build a website.",
  },
  {
    icon: Hammer,
    title: "I still build for a living",
    text: "Real products, real users, real deadlines. You learn from someone who ships software every week — not someone who just talks about it.",
  },
];

const JOURNEY = [
  {
    period: "Today",
    title: "Senior engineer, Carojon",
    text: "The booking platform hundreds of beauty businesses run on. I own it end to end — and it pays the bills while I teach.",
  },
  {
    period: "Before that",
    title: "Built for a whole state government",
    text: "Identity systems that millions of residents relied on for government services. Learned what 'it cannot fail' really means.",
  },
  {
    period: "Along the way",
    title: "Built for farmers",
    text: "Simple phone tools that helped smallholder farmers get loans and sell produce. My favorite reminder that tech is for people.",
  },
  {
    period: "2017",
    title: "Started as a web developer",
    text: "Ten years, seven companies, four continents of clients — one thread: taking ideas from zero to shipped.",
  },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const studentProjects = COHORTS.flatMap((c) => c.projects).slice(0, 8);
  const testimonials = COHORTS.flatMap((c) => c.reviews).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="wrap flex min-h-[92vh] flex-col items-center justify-center pb-16 pt-36 text-center">
        <Reveal>
          <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-line-bright bg-gradient-to-br from-neon/25 via-amber/20 to-teal/25">
            <span className="font-sans text-2xl font-extrabold tracking-tight text-ink">
              CO
            </span>
            <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border border-line-bright bg-elev">
              <BadgeCheck className="h-4 w-4 text-neon" strokeWidth={2} />
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="chip inline-flex items-center gap-2 !py-1.5">
            <Sparkles className="h-4 w-4 text-amber" strokeWidth={1.75} />
            OpenAI-Certified AI Engineer &amp; Teacher
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-sans text-[clamp(30px,5.5vw,54px)] font-extrabold leading-[1.1] tracking-tight text-ink">
            Hi, I&apos;m Chuks. I build software —{" "}
            <span className="text-neon">and I teach everyday people to build
            it too.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            For ten years I&apos;ve quietly built the apps and systems
            businesses rely on. Today I&apos;m all-in on AI — building with it,
            certified on it, and running friendly classes where beginners
            launch real, working websites. No coding degree required.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/classes" className="btn btn-primary">
              see what i teach
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link href="/#learn" className="btn btn-ghost">
              join the next class
            </Link>
            <Link href="/blog" className="btn btn-ghost">
              read the blog
            </Link>
          </div>
          <div className="mt-7 flex justify-center">
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.25} className="w-full">
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-panel px-5 py-6">
                <div className="flex items-baseline justify-center font-sans text-[26px] font-bold text-neon">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 font-mono text-[10.5px] uppercase tracking-wider text-faint">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MARQUEE — what students build */}
      <div className="marquee-mask relative overflow-hidden border-y border-line bg-elev/50 py-4">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...WHAT_STUDENTS_BUILD, ...WHAT_STUDENTS_BUILD].map((word, i) => (
            <span
              key={i}
              className={`font-mono text-[13px] tracking-wide ${
                i % 4 === 0 ? "text-neon" : "text-faint"
              }`}
            >
              {word}
              <span className="ml-10 text-line-bright">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="wrap py-24 md:py-32" id="about">
        <Reveal>
          <div className="eyebrow">nice to meet you</div>
          <h2 className="sec-title">Who I am — and what I stand for.</h2>
          <p className="sec-desc">
            I believe technology should belong to the people using it — not
            just the people building it. That belief is the whole brand.
          </p>
        </Reveal>

        <Reveal>
          <div className="card border-dashed p-7 md:p-9">
            <p className="max-w-3xl text-[16px] leading-relaxed text-mist md:text-[17px]">
              For ten years I&apos;ve been the engineer companies call when
              they need software that absolutely cannot fail — booking
              platforms hundreds of salons run on, identity systems that
              served an entire state, farming tools that moved real money.
              Today, AI has made building websites something{" "}
              <span className="text-ink">anyone</span> can do — and
              I&apos;ve made it my job to show them how.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-6 grid gap-5 md:grid-cols-2">
          {ABOUT_CARDS.map((card) => (
            <StaggerItem key={card.title}>
              <div className="card h-full p-7">
                <card.icon className="h-6 w-6 text-neon" strokeWidth={1.5} />
                <h3 className="mt-4 font-sans text-base font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-mist">
                  {card.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WHAT I CAN HELP YOU WITH */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">how we can work together</div>
          <h2 className="sec-title">What can I help you with?</h2>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          <StaggerItem className="h-full">
            <MotionCard href="/classes" className="card group flex h-full flex-col p-7">
              <Globe className="h-6 w-6 text-neon" strokeWidth={1.5} />
              <h3 className="mt-4 font-sans text-base font-bold text-ink">
                Build your own website
              </h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mist">
                Join a friendly class and launch a real website with AI —
                step by step, at your pace, with your own domain on the
                internet at the end.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors group-hover:text-neon">
                see the classes
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </MotionCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <MotionCard
              href={SITE.whatsappProject}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-7"
            >
              <Briefcase className="h-6 w-6 text-amber" strokeWidth={1.5} />
              <h3 className="mt-4 font-sans text-base font-bold text-ink">
                Need something built?
              </h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mist">
                A platform, an app, or an AI feature for your business —
                engineered end to end by someone who has shipped for
                governments and startups alike.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors group-hover:text-neon">
                chat on WhatsApp
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </MotionCard>
          </StaggerItem>

          <StaggerItem className="h-full">
            <MotionCard href="/blog" className="card group flex h-full flex-col p-7">
              <BookOpen className="h-6 w-6 text-teal" strokeWidth={1.5} />
              <h3 className="mt-4 font-sans text-base font-bold text-ink">
                Learn at your own pace
              </h3>
              <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mist">
                My notes and workflows, written in plain language for busy
                people — free to steal, easy to share.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors group-hover:text-neon">
                read the blog
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </MotionCard>
          </StaggerItem>
        </Stagger>
      </section>

      {/* WHAT I TEACH */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">what i teach</div>
          <h2 className="sec-title">Four classrooms, one mission.</h2>
          <p className="sec-desc">
            From a church-hall skill acquisition program with 30+ learners
            to 1-on-1 exam prep and frontend mentorship — every class is
            built around the same belief: the people using technology
            should own it.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2">
          {COHORTS.map((cohort) => (
            <StaggerItem key={cohort.slug} className="h-full">
              <MotionCard
                href={`/classes/${cohort.slug}`}
                className="card group flex h-full flex-col p-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <KindChip cohort={cohort} />
                  <span className="font-mono text-[11px] text-faint">
                    {cohort.period}
                  </span>
                </div>
                <h3 className="mt-3.5 font-sans text-lg font-bold leading-snug text-ink transition-colors group-hover:text-neon">
                  {cohort.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-mist">
                  {cohort.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cohort.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint"
                    >
                      {tool}
                    </span>
                  ))}
                  {cohort.tools.length > 4 && (
                    <span className="rounded border border-line px-2 py-0.5 font-mono text-[10px] text-faint">
                      +{cohort.tools.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span
                    className="font-mono text-xs"
                    style={{ color: cohort.accent }}
                  >
                    {cohort.learnersLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors group-hover:text-ink">
                    open class
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                </div>
              </MotionCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-teal transition-colors hover:text-neon"
          >
            see all classes in detail
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </section>

      {/* STUDENT WORK */}
      {studentProjects.length > 0 && (
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            student work
          </div>
          <h2 className="sec-title">Real websites. Real beginners.</h2>
          <p className="sec-desc">
            Every site below was built by someone who had never written a
            line of code — planned, built and launched in weeks, live on the
            internet today. Click any card to visit.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {studentProjects.map((project) => (
            <StaggerItem key={project.url} className="h-full">
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10">
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-teal transition-colors hover:text-neon"
          >
            meet the classes behind these sites
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </section>
      )}

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">
            <Star className="h-3.5 w-3.5" strokeWidth={1.75} />
            kind words from class
          </div>
          <h2 className="sec-title">What learners say.</h2>
          <p className="sec-desc">
            Salon owners, photographers, caterers — the exact people who
            &ldquo;could never build a website.&rdquo;
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-2">
          {testimonials.map((review) => (
            <StaggerItem key={review.name}>
              <div className="card h-full p-7">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-amber text-amber"
                          : "text-line-bright"
                      }`}
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-3 font-mono text-xs text-teal">
                  {review.name} · {review.role}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      )}

      {/* JOURNEY */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">the short version</div>
          <h2 className="sec-title">Where I&apos;ve been.</h2>
          <p className="sec-desc">
            Ten years of building software people rely on — no résumé
            needed. (But the full résumé exists if you want it.)
          </p>
        </Reveal>

        <div className="relative space-y-10 border-l border-line-bright pl-7">
          {JOURNEY.map((item, i) => (
            <Reveal key={item.period} delay={i * 0.05}>
              <div className="relative">
                <span className="absolute -left-[34.5px] top-1.5 h-3 w-3 rounded-full border-2 border-neon bg-abyss" />
                <div className="font-mono text-[11px] uppercase tracking-widest text-amber">
                  {item.period}
                </div>
                <h3 className="mt-1.5 font-sans text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-mist">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            href="/my-resume"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-teal transition-colors hover:text-neon"
          >
            the full engineer&apos;s résumé lives here
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </Reveal>
      </section>

      {/* BLOG */}
      <section className="wrap py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">latest writing</div>
          <h2 className="sec-title">Notes from the build.</h2>
          <p className="sec-desc">
            What I&apos;m learning about AI and teaching — written in plain
            language, so you can steal the workflow.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} className="h-full">
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* WAITLIST */}
      <section className="wrap py-24 md:py-32" id="learn">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line-bright bg-panel p-8 md:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-neon/8 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber/8 blur-3xl" />
            <h2 className="font-sans text-[clamp(24px,3.5vw,34px)] font-bold leading-tight tracking-tight text-ink">
              Come build with me.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
              The next class is coming. Join the list to hear about it
              first — and get the occasional behind-the-scenes workflow I
              only share on WhatsApp. Paid registrations and referral
              links will live here too; list members get first seats.
            </p>
            <div className="mt-7">
              <WaitlistForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="wrap py-24 pb-36 md:py-32" id="contact">
        <Reveal>
          <div className="eyebrow">say hello</div>
          <h2 className="sec-title">Let&apos;s talk.</h2>
          <p className="sec-desc">
            Questions about a class, an idea for a project, or you just
            want to talk about what AI could do for you? WhatsApp is the
            fastest way to reach me — and yes, I reply myself.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              chat on WhatsApp
            </a>
            <span className="font-mono text-[13px] text-faint">
              {SITE.phone} · {SITE.email}
            </span>
            <SocialLinks />
          </div>
        </Reveal>
      </section>

      <Statusbar />
    </>
  );
}
