export type Role = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const SUMMARY = `Senior full-stack engineer with 10 years shipping production systems across fintech, agtech, govtech, healthtech and Web3 — from a state government identity platform serving millions of residents to the booking engine powering hundreds of beauty businesses today. Now pivoting hard into AI engineering: certified as an OpenAI API Deployment Practitioner, deep in structured AI engineering study, and teaching cohorts of learners to build and ship real websites with AI.`;

export const SKILL_GROUPS: { key: string; label: string; skills: string[] }[] = [
  {
    key: "ai-engineering",
    label: "AI Engineering",
    skills: [
      "OpenAI API",
      "Function calling",
      "Structured outputs",
      "RAG",
      "Embeddings & vector search",
      "Prompt engineering",
      "AI-assisted development",
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Vue.js",
      "GraphQL / Apollo",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    key: "backend",
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "PHP / Laravel",
      "Adonis.js",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    key: "data",
    label: "Data",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Sequelize",
      "Upstash Redis",
      "Supabase",
    ],
  },
  {
    key: "infra",
    label: "Infra & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Vercel",
      "Heroku",
      "Cloudflare R2",
    ],
  },
  {
    key: "web3",
    label: "Web3",
    skills: ["Solidity", "Hardhat", "Web3.js", "Ethers.js"],
  },
  {
    key: "quality",
    label: "Quality & Process",
    skills: [
      "Jest",
      "Cypress",
      "React Testing Library",
      "Storybook",
      "Figma",
      "Agile / Scrum",
    ],
  },
];

export const EXPERIENCE: Role[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Carojon",
    period: "2023 — Present",
    location: "Awka, Nigeria",
    current: true,
    bullets: [
      "Architected NestJS microservices and PostgreSQL schemas powering bookings, storefronts, payments and messaging automation",
      "Shipped full-stack features with Next.js, Apollo GraphQL and Material UI; wrote Jest coverage and ran cloud deploys on Heroku",
      "Led cross-functional engineering, product and UI teams through Agile sprints while owning backend performance",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "GraphQL", "React Native"],
  },
  {
    role: "Frontend Software Engineer",
    company: "Clearlabs",
    period: "2021 — 2023",
    location: "California, US",
    bullets: [
      "Built React.js interfaces with Atomic Design for high-volume genomic workflow dashboards",
      "Integrated LaunchDarkly feature flags and introduced React Testing Library, raising deployment safety and UI reliability",
      "Worked daily across backend, device, QA, UX and product to ship enhancements and resolve escalations",
    ],
    tags: ["React", "GraphQL", "Cypress", "Atomic Design"],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "GAINS Associate & Youmeme",
    period: "2021 — 2024",
    location: "France",
    bullets: [
      "Worked with GAINS' CTO on backend architecture, scalability and uptime for a decentralized investment platform",
      "Migrated Youmeme from styled-components to CSS modules (~25% performance gain) and shipped cache-busting via version invalidation",
      "Helped cut the product bug backlog ~20% through structured debugging, and contributed to an AI-assisted meme-generation feature",
    ],
    tags: ["Solidity", "Web3.js", "NestJS", "Next.js", "AI features"],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Releaf Technology",
    period: "2019 — 2022",
    location: "Lagos, Nigeria",
    bullets: [
      "Led the engineering team; architected sourcing tools (SALT), field-agent apps and factory operations dashboards",
      "Built a USSD platform and loan system letting smallholder farmers request funds, sell produce and get real-time field follow-ups",
      "Integrated Africa's Talking and OnePipe; ran AWS/Docker/Kubernetes infrastructure with CI/CD pipelines",
    ],
    tags: ["AWS", "Kubernetes", "USSD", "Fintech"],
  },
  {
    role: "Lead Software Engineer",
    company: "Nuture Technology",
    period: "2019 — 2021",
    location: "Lagos, Nigeria",
    bullets: [
      "Led backend and system architecture for Anambra State's Central Information Management System (ANSCIMS) and Social Services Identity System (ANSSID)",
      "Built and maintained core APIs consumed by mobile and frontend teams across government-scale platforms",
      "Integrated Interswitch and other identity/payment services into state operations tooling",
    ],
    tags: ["Laravel", "Vue.js", "GovTech", "Identity Systems"],
  },
  {
    role: "Lead Software Engineer",
    company: "Techie Planet",
    period: "2018 — 2019",
    location: "Lagos, Nigeria",
    bullets: [
      "Backend engineer on a 4-person team building a full ride-hailing and pickup platform, Uber/Bolt-style",
      "Refactored critical database queries in a legacy Zend codebase, materially improving performance and stability",
    ],
    tags: ["Zend", "MySQL", "Ride-hailing"],
  },
  {
    role: "Full-Stack Website Developer",
    company: "Technovia",
    period: "2017 — 2018",
    location: "Lagos, Nigeria",
    bullets: [
      "Built an asset-monitoring system combining geolocation and multimedia capture for a billboard agency, with privacy-first data transfer",
    ],
    tags: ["Geolocation", "Media Capture"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "OpenAI API Deployment Practitioner",
    issuer: "OpenAI",
    status: "Certified",
    note: "Taking OpenAI-powered features from prompt to production — API integration, function calling, structured outputs and deployment practice.",
  },
  {
    title: "AI Engineering",
    issuer: "Structured professional curriculum",
    status: "In progress",
    note: "RAG, agents, evals, and the engineering discipline behind reliable AI systems.",
  },
];

export const TEACHING = {
  title: "Teaching & Community",
  items: [
    {
      title: "Build Your First Website with AI",
      note: "6-week cohort for absolute beginners — 18 learners, 16 live websites shipped.",
    },
    {
      title: "AI-Assisted Web Development: Ship Like a Pro",
      note: "4-week project-based cohort — 14 learners shipping professional multi-page sites.",
    },
    {
      title: "Mentoring & writing",
      note: "Ongoing 1:1 guidance plus technical writing on building with AI at devchuksemeka.com/blog.",
    },
  ],
};

export const CAROJON = {
  name: "Carojon",
  role: "Beauty booking & business-management SaaS · Senior Full-Stack Engineer, 2023–Present",
  description:
    "A booking and operations platform connecting clients with beauty professionals across Lagos, Abuja, Port Harcourt, Enugu, Awka, Onitsha, Owerri and Asaba — with scheduling, WhatsApp booking, POS, a business marketplace and automated client reminders. I own the engineering end to end: architecture, backend systems, and the product decisions that sit underneath them.",
  built: [
    "Quota-based booking limits across a Free / Lite / Starter / Pro tier structure",
    "A points-based loyalty system (1pt = ₦1) with redemption thresholds and payout-safe discount caps",
    "A multi-account switcher for businesses managing several locations or orgs",
    "A Clinical Practice Mode in progress — credentialing, intake forms and consent capture for aesthetic clinics",
  ],
  solved: [
    "Rebuilt SSR/SEO on marketplace listing pages so Googlebot can actually index them",
    "Server-component-plus-client-pagination pattern for fast, crawlable listings",
    "Shipped a Node.js/Resend automation to manage a billing-policy rollout without losing trust",
    "Direct bank-transfer payments with no per-transaction fees, layered against a dual commission/subscription model",
  ],
};
