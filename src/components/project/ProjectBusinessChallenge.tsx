/**
 * ProjectBusinessChallenge
 *
 * Shared "Business Challenge / Reto de Negocio" section.
 */
import { CheckCircle2 } from "lucide-react";
import { MotionSection } from "./ProjectCaseAnimations";

type Props = {
  title: string;
  description: string;
  points: string[];
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string;
  /** Optional extra bg gradient fragment for the card */
  gradient?: string;
};

export function ProjectBusinessChallenge({
  title,
  description,
  points,
  accentColor,
  gradient = "from-[#0c1c2e] to-[#080e1a]",
}: Props) {
  return (
    <MotionSection
      className={`mb-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} shadow-[0_16px_50px_rgba(0,0,0,0.3)]`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-slate-300 text-base leading-relaxed mb-6">
        {description}
      </p>
      <ul className="grid sm:grid-cols-2 gap-4">
        {points.map((pt) => (
          <li
            key={pt}
            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
          >
            <CheckCircle2
              className={`w-5 h-5 text-${accentColor}-400 shrink-0 mt-0.5`}
            />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </MotionSection>
  );
}
