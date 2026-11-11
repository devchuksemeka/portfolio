import { Mail, Phone } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/brand-icons";
import { SOCIALS } from "@/data/site";

export function SocialLinks({
  className = "",
  iconClassName = "h-4.5 w-4.5",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map((social) => (
        <a
          key={social.key}
          href={social.href}
          aria-label={social.label}
          title={social.label}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={
            social.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="icon-btn"
        >
          {social.key === "github" && <GithubIcon className={iconClassName} />}
          {social.key === "linkedin" && (
            <LinkedinIcon className={iconClassName} />
          )}
          {social.key === "whatsapp" && (
            <WhatsappIcon className={iconClassName} />
          )}
          {social.key === "mail" && (
            <Mail className={iconClassName} strokeWidth={1.75} />
          )}
          {social.key === "phone" && (
            <Phone className={iconClassName} strokeWidth={1.75} />
          )}
        </a>
      ))}
    </div>
  );
}
