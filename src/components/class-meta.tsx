import {
  Briefcase,
  GraduationCap,
  Sun,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ClassKind, Cohort } from "@/data/classes";

export const CLASS_ICONS: Record<ClassKind, LucideIcon> = {
  "skill-program": Users,
  "exam-prep": GraduationCap,
  "summer-class": Sun,
  mentorship: Briefcase,
};

export function KindChip({ cohort }: { cohort: Cohort }) {
  const Icon = CLASS_ICONS[cohort.kind];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[10.5px] tracking-wide"
      style={{
        color: cohort.accent,
        borderColor: `${cohort.accent}66`,
        background: `${cohort.accent}14`,
      }}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      {cohort.kindLabel}
    </span>
  );
}
