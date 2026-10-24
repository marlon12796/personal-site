/**
 * ProjectCaseHeader
 *
 * Shared hero header section for professional case study pages.
 * Contains:
 *   – Back navigation link
 *   – Hero text column (badges, h1, institution, subtitle, CTAs slot)
 *   – Hero media column (video player / carousel)
 *   – Tech-stack row
 */
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import {
  MotionBackLink,
  MotionHeroText,
  MotionHeroMedia,
} from "./ProjectCaseAnimations";

type Props = {
  /** i18n keys already resolved */
  backLabel: string;
  backHref?: string;
  role: string;
  type: string;
  title: string;
  institution: string;
  subtitle: string;
  /** Tailwind colour fragment, e.g. "teal" or "amber" */
  accentColor: string;
  /** RGBA values for the glow shadow on the role badge, e.g. "45,212,191" */
  accentRgba: string;
  /** Slot: CTA buttons or badges rendered below the subtitle */
  ctas?: ReactNode;
  /** Slot: video player or carousel rendered in the right column */
  media: ReactNode;
  /** Slot: Tech-stack grid rendered below the hero grid */
  techStack: ReactNode;
  /** Label for the tech-stack section */
  techStackLabel?: string;
};

export function ProjectCaseHeader({
  backLabel,
  backHref = "/#projects",
  role,
  type,
  title,
  institution,
  subtitle,
  accentColor,
  accentRgba,
  ctas,
  media,
  techStack,
  techStackLabel = "Stack Tecnológico del Proyecto (Frontend, Backend & DevOps)",
}: Props) {
  return (
    <>
      {/* Top navigation */}
      <MotionBackLink className="mb-8 w-fit">
        <Link
          href={backHref}
          className={`inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-${accentColor}-300 transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{backLabel}</span>
        </Link>
      </MotionBackLink>

      {/* Header / Hero */}
      <header className="border-b border-white/10 pb-12 mb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-10">
          {/* Left: Hero text */}
          <MotionHeroText className="lg:col-span-7 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-${accentColor}-400/10 text-${accentColor}-300 border border-${accentColor}-400/30 shadow-[0_0_15px_rgba(${accentRgba},0.25)]`}
              >
                <Sparkles className={`w-3 h-3 text-${accentColor}-300`} />
                <span>{role}</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                {type}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              {title}
            </h1>
            <p className={`text-xl font-medium text-${accentColor}-300 mb-5`}>
              {institution}
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              {subtitle}
            </p>

            {ctas}
          </MotionHeroText>

          {/* Right: Media */}
          <MotionHeroMedia className="lg:col-span-5 min-w-0 w-full">
            {media}
          </MotionHeroMedia>
        </div>

        {/* Tech-stack row */}
        <div className="w-full pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`w-2 h-2 rounded-full bg-${accentColor}-400`}
            />
            <span
              className={`text-xs font-mono font-semibold uppercase tracking-wider text-${accentColor}-300`}
            >
              {techStackLabel}
            </span>
          </div>
          {techStack}
        </div>
      </header>
    </>
  );
}
