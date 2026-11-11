export const SITE = {
  name: "Chukwuemeka Miracle Okafor",
  shortName: "Chuks",
  handle: "devchuksemeka",
  title: "Full-Stack & AI Engineer",
  email: "devchuksemeka@gmail.com",
  phone: "+234 701 669 4767",
  phoneHref: "tel:+2347016694767",
  location: "Nigeria · open to remote / relocation",
  github: "https://github.com/devchuksemeka",
  linkedin: "https://linkedin.com/in/devchuksemeka",
  mailto: "mailto:devchuksemeka@gmail.com",
  whatsapp: "https://wa.me/2347016694767?text=Hi%20Chuks!",
  whatsappNumber: "2347016694767",
  whatsappProject:
    "https://wa.me/2347016694767?text=Hi%20Chuks!%20I%20have%20a%20project%20idea",
  whatsappTeach:
    "https://wa.me/2347016694767?text=Hi%20Chuks!%20I%27d%20like%20to%20talk%20about%20a%20class",
};

export type SocialKey = "github" | "linkedin" | "whatsapp" | "mail" | "phone";

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: SITE.github },
  { key: "linkedin", label: "LinkedIn", href: SITE.linkedin },
  { key: "whatsapp", label: "WhatsApp", href: SITE.whatsapp },
  { key: "mail", label: "Email", href: SITE.mailto },
  { key: "phone", label: "Phone", href: SITE.phoneHref },
];

export const AI_FOCUS = {
  certification: "OpenAI API Deployment Practitioner",
  certificationNote:
    "Certified on taking OpenAI-powered features from prompt to production — API integration, function calling, structured outputs, and deployment practice.",
  studying: "AI Engineering (in progress)",
  studyingNote:
    "Currently working through a structured AI engineering curriculum — RAG, agents, evals, and the discipline behind reliable AI systems.",
};
