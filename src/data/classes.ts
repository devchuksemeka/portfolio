export type StudentProject = {
  student: string;
  title: string;
  url: string;
  image: string;
  blurb: string;
  tag: string;
};

export type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export type ClassKind =
  | "skill-program"
  | "exam-prep"
  | "summer-class"
  | "mentorship";

export type Cohort = {
  slug: string;
  title: string;
  tagline: string;
  kind: ClassKind;
  kindLabel: string;
  poweredBy?: string;
  period: string;
  format: string;
  learners: number;
  learnersLabel: string;
  tools: string[];
  accent: string;
  summary: string;
  description: string;
  highlights: string[];
  projects: StudentProject[];
  reviews: Review[];
};

export type UpcomingCohort = {
  slug: string;
  title: string;
  period: string;
  format: string;
  seats: string;
  summary: string;
  highlights: string[];
};

export const COHORTS: Cohort[] = [
  {
    slug: "dunamis-ai-skill-acquisition",
    title: "Build Your First Website with AI",
    tagline: "A whole community's first websites — built with AI.",
    kind: "skill-program",
    kindLabel: "Skill Acquisition Program",
    poweredBy: "Dunamis International Gospel Awka · Anambra State",
    period: "2026",
    format: "Group class · community skill program",
    learners: 30,
    learnersLabel: "30+ learners",
    tools: ["Lovable", "Bolt", "v0", "Codex"],
    accent: "#39ff88",
    summary:
      "Over 30 absolute beginners — a whole church community — planned, built and published real websites using AI.",
    description:
      "A skill acquisition program powered by Dunamis International Gospel Awka, Anambra State. Over 30 learners, most of them touching a website for the very first time, planned, prompted and published their own live sites using AI builders — Lovable, Bolt and v0 — while I tutored the room with Codex as my co-pilot: live demonstrations, code walkthroughs and instant answers. No coding background required; by the end, every learner had a site they built themselves on the internet.",
    highlights: [
      "AI website building with Lovable, Bolt & v0",
      "Prompt-to-website workflows for beginners",
      "Planning a site before prompting",
      "Publishing a live site on the internet",
      "Live tutoring with Codex as co-pilot",
    ],
    projects: [
      {
        student: "a Dunamis learner",
        title: "Blissy Emporium",
        url: "https://blissyemporium.lovable.app",
        image: "/projects/blissy-emporium.jpg",
        blurb: "Shop site for the Blissy Emporium brand.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Chinyere Okoye",
        url: "https://chinyereokoye.lovable.app",
        image: "/projects/chinyere-okoye.jpg",
        blurb: "A personal website for Chinyere Okoye.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "City Schools Nkpor-Agu",
        url: "https://city-schools-nkpor-agu.lovable.app",
        image: "/projects/city-schools-nkpor-agu.jpg",
        blurb: "A website for City Schools, Nkpor-Agu.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Awka Roof & Room",
        url: "https://awka-roof-and-room.lovable.app",
        image: "/projects/awka-roof-and-room.jpg",
        blurb: "Housing & accommodation listings in Awka.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Michael Ogbonnaya — Writer",
        url: "https://michael-ogbonnaya-writer.lovable.app",
        image: "/projects/michael-ogbonnaya-writer.jpg",
        blurb: "A writer's portfolio site.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Onyekach",
        url: "https://onyekach.lovable.app",
        image: "/projects/onyekach.jpg",
        blurb: "A personal brand website.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Pixel Perfect Picture",
        url: "https://pixel-perfect-picture-1750.lovable.app",
        image: "/projects/pixel-perfect-picture.jpg",
        blurb: "A photography business site.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "School Website",
        url: "https://school-website-7zfk.bolt.host",
        image: "/projects/school-website-bolt.jpg",
        blurb: "A school website, built with Bolt.",
        tag: "Bolt",
      },
      {
        student: "a Dunamis learner",
        title: "Blissy Emporium (Zite)",
        url: "https://blissyemporium.zite.so",
        image: "/projects/blissy-emporium-zite.jpg",
        blurb: "Blissy Emporium, published with Zite.",
        tag: "Zite",
      },
      {
        student: "a Dunamis learner",
        title: "Flourish Kitchen",
        url: "https://flourish-kitchen-cake-and-catering.lovable.app",
        image: "/projects/flourish-kitchen.jpg",
        blurb: "Cakes & catering — menu and enquiries.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Pixel Perfect Scene",
        url: "https://pixel-perfect-scene-4879.lovable.app",
        image: "/projects/pixel-perfect-scene.jpg",
        blurb: "A photography & events portfolio.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Unique Touch Laundry",
        url: "https://uniquetouchlaundryawka.lovable.app",
        image: "/projects/unique-touch-laundry.jpg",
        blurb: "Laundry services in Awka.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Screenshot Perfect Replica",
        url: "https://screenshot-perfect-replica-991.lovable.app",
        image: "/projects/screenshot-perfect-replica.jpg",
        blurb: "A photography portfolio.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Lovie Custom Occasionwear",
        url: "https://lovie-custom-occasionwear.lovable.app",
        image: "/projects/lovie-custom-occasionwear.jpg",
        blurb: "Custom occasionwear & fashion.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Cherry Crown Wig Shop",
        url: "https://cherry-crown-wig-shop.lovable.app",
        image: "/projects/cherry-crown-wig-shop.jpg",
        blurb: "A wig shop with a product catalogue.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Onuzulike Makuochukwu",
        url: "https://onuzulikemakuochukwu.lovable.app",
        image: "/projects/onuzulike-makuochukwu.jpg",
        blurb: "A personal website.",
        tag: "Lovable",
      },
      {
        student: "a Dunamis learner",
        title: "Glam Spot",
        url: "https://glamspot-alpha.vercel.app",
        image: "/projects/glamspot.jpg",
        blurb: "A beauty & glam studio site.",
        tag: "Vercel",
      },
      {
        student: "a Dunamis learner",
        title: "Pixel Perfect Replay",
        url: "https://pixel-perfect-replay-55404.lovable.app",
        image: "/projects/pixel-perfect-replay.jpg",
        blurb: "A photography portfolio.",
        tag: "Lovable",
      },
    ],
    reviews: [],
  },
  {
    slug: "btec-computing-exam-prep",
    title: "Pearson BTEC Computing — Exam Prep",
    tagline: "One student, one mission: walk into the exam ready.",
    kind: "exam-prep",
    kindLabel: "Exam Preparation · 1-on-1",
    period: "2026",
    format: "One-on-one · personalized coaching",
    learners: 1,
    learnersLabel: "1 student · 1-on-1",
    tools: ["Python", "Number systems", "Software lifecycle", "Mock exams"],
    accent: "#ffb454",
    summary:
      "One-on-one tutoring to carry a student confidently into his Pearson Level 3 AAQ BTEC National in Computing exam.",
    description:
      "A one-on-one tutoring class built around a single student preparing for his Pearson Level 3 AAQ BTEC National in Computing exam. We went deep on core coding skills with Python, software engineering principles and the full software development lifecycle — then made sure the fundamentals were solid: number systems, exam technique and time management. Every topic was pressure-tested with mock exams until the format felt routine and the answers came naturally.",
    highlights: [
      "Core coding skills with Python",
      "Software engineering principles",
      "The software development lifecycle",
      "Number systems — binary, denary, hex",
      "Mock exam drills & exam technique",
    ],
    projects: [],
    reviews: [],
  },
  {
    slug: "summer-coding-class",
    title: "Summer Coding Class",
    tagline: "Two students, one summer: from first tag to first deployment.",
    kind: "summer-class",
    kindLabel: "Summer Coding Class",
    period: "Summer 2026",
    format: "One-on-one · 2 students",
    learners: 2,
    learnersLabel: "2 students · 1-on-1",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Vercel",
      "Lovable",
      "Codex",
      "opencode",
    ],
    accent: "#5eead4",
    summary:
      "A one-on-one summer class where two students went from HTML basics to deploying live sites on Vercel.",
    description:
      "A one-on-one summer coding class with two students. We started from the foundations — HTML, CSS and JavaScript — then moved into version control with GitHub and deployed real sites live on Vercel. From there we levelled up into the modern workflow: building with AI using Lovable, Codex and opencode, so the summer ended with both the fundamentals and the tools that professional teams actually use today.",
    highlights: [
      "HTML, CSS & JavaScript fundamentals",
      "Version control with GitHub",
      "Deploying live sites to Vercel",
      "Building with Lovable, Codex & opencode",
      "From first tag to first deployment",
    ],
    projects: [],
    reviews: [],
  },
  {
    slug: "carojon-frontend-mentorship",
    title: "Frontend Developer Mentorship",
    tagline: "Turning Carojon interns into frontend developers.",
    kind: "mentorship",
    kindLabel: "Mentorship Program",
    poweredBy: "Carojon",
    period: "2026 · ongoing",
    format: "Internship mentorship · hands-on",
    learners: 4,
    learnersLabel: "4 interns",
    tools: ["Next.js", "MUI", "API Integration", "Vercel"],
    accent: "#a78bfa",
    summary:
      "Coaching four Carojon interns into frontend developers — mastering Next.js, MUI, API integration and Vercel deployment.",
    description:
      "A mentorship program powered by Carojon, where I coach four interns through becoming frontend developers. We learn and master Next.js and Material UI, integrate real APIs and ship to production on Vercel — with mentorship access to me throughout. It's hands-on, code-review-driven and paced like a real engineering team, because it is one: the interns work on real product code, and the goal is for each of them to graduate into confident frontend developers.",
    highlights: [
      "Learning & mastering Next.js",
      "Material UI (MUI) mastery",
      "Real API integration",
      "Vercel deployment workflows",
      "Code reviews & engineering habits",
    ],
    projects: [],
    reviews: [],
  },
];

export const UPCOMING_COHORT: UpcomingCohort = {
  slug: "cohort-03",
  title: "From Zero to AI Engineer",
  period: "Starting January 2027",
  format: "8 weeks · cohort-based, limited seats",
  seats: "Registration opens soon",
  summary:
    "The next step of the journey: from building websites with AI to building AI-powered products — APIs, prompts in production, and shipping your own AI tools.",
  highlights: [
    "OpenAI APIs in production",
    "Function calling & structured outputs",
    "RAG fundamentals",
    "Ship a personal AI product",
  ],
};

export function totalLearners(): number {
  return COHORTS.reduce((sum, c) => sum + c.learners, 0);
}

export function allTools(): string[] {
  return [...new Set(COHORTS.flatMap((c) => c.tools))];
}

export function totalStudentSites(): number {
  return COHORTS.reduce((sum, c) => sum + c.projects.length, 0);
}
