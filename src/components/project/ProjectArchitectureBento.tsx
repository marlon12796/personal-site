/**
 * ProjectArchitectureBento
 *
 * Shared Technical Architecture bento-grid section.
 * Each layer is described by an `ArchitectureLayer` object and rendered
 * as a card in a 12-column responsive grid.
 */
import type { LucideIcon } from "lucide-react";
import { MotionSection } from "./ProjectCaseAnimations";

export type ArchitectureLayer = {
  badge: string;
  badgeColor: string;
  colSpan: string;
  gradient: string;
  icon: LucideIcon;
  name: string;
  color: string;
  borderColor: string;
  chips: string[];
  details: string[];
  /** Dot colour for detail bullets, e.g. "bg-teal-400" */
  dotColor: string;
  /** Glow colour for detail dots, e.g. "shadow-[0_0_8px_rgba(45,212,191,0.7)]" */
  dotGlow: string;
};

type Props = {
  title: string;
  subtitle: string;
  layers: ArchitectureLayer[];
};

export function ProjectArchitectureBento({ title, subtitle, layers }: Props) {
  return (
    <MotionSection className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {title}
        </h2>
        <p className="text-slate-400">{subtitle}</p>
      </div>

      {/* Bento Grid Layout: 7+5 / 5+7 balance */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {layers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.name}
              className={`${layer.colSpan} rounded-3xl border ${layer.borderColor} bg-gradient-to-br ${layer.gradient} p-7 md:p-8 transition-all flex flex-col justify-between`}
            >
              <div>
                {/* Header: Icon + Layer pill */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 shadow-inner">
                      <Icon className={`w-6 h-6 ${layer.color}`} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${layer.badgeColor}`}
                    >
                      {layer.badge}
                    </span>
                  </div>
                </div>

                {/* Layer title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 tracking-tight">
                  {layer.name}
                </h3>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {layer.chips.map((chip) => (
                    <span
                      key={chip}
                      className="px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-[11px] font-mono text-slate-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Engineering detail bullet-cards */}
                <div className="space-y-3">
                  {layer.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${layer.dotColor} mt-2 shrink-0 ${layer.dotGlow}`}
                      />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MotionSection>
  );
}
