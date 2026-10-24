/**
 * ProjectEngineeringChallenges
 *
 * Shared "Engineering Challenges" 3-column card grid.
 * Accepts up to 3 icons (falls back to Zap) and an accent colour.
 */
import type { LucideIcon } from "lucide-react";
import { Zap } from "lucide-react";
import {
  MotionSection,
  MotionStaggerList,
  MotionStaggerItem,
} from "./ProjectCaseAnimations";

type EngineeringItem = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  items: EngineeringItem[];
  icons: LucideIcon[];
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string;
};

export function ProjectEngineeringChallenges({
  title,
  items,
  icons,
  accentColor,
}: Props) {
  return (
    <MotionSection className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        {title}
      </h2>
      <MotionStaggerList className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const Icon = icons[index] ?? Zap;
          return (
            <MotionStaggerItem key={item.title}>
              <div
                className={`h-full p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-${accentColor}-400/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold text-${accentColor}-400`}
                    >
                      0{index + 1}
                    </span>
                    <Icon className={`w-5 h-5 text-${accentColor}-400`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionStaggerItem>
          );
        })}
      </MotionStaggerList>
    </MotionSection>
  );
}
