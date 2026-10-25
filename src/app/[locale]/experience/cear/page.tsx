import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Server,
  Sparkles,
  Users,
  Globe,
  Database,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ProjectCaseLayout } from "@/components/project/ProjectCaseLayout";
import {
  MotionBackLink,
  MotionHeroText,
  MotionSection,
  MotionStaggerList,
  MotionStaggerItem,
} from "@/components/project/ProjectCaseAnimations";
import { getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Experiencia Full-Stack en CEAR Latinoamericano | Marlon",
  description:
    "Detalle de responsabilidades, liderazgo de arquitectura y los 4 sistemas empresariales desarrollados para CEAR Latinoamericano: Campus Virtual, Sistema Mailer, CRM Interno y Plataforma Web.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

type Metric = { label: string; value: string };
type Pillar = { title: string; description: string };
type System = {
  id: string;
  title: string;
  tag: string;
  description: string;
  href:
    | "/projects/campus-virtual"
    | "/projects/sistema-mailer"
    | "/projects/crm-interno"
    | "/projects/cear-plataforma";
};

const pillarIcons = [Server, Code2, Cpu, Layers];

const systemThemes: Record<
  string,
  {
    icon: typeof GraduationCap;
    accent: string;
    badge: string;
    glow: string;
    border: string;
    textHover: string;
  }
> = {
  campus: {
    icon: GraduationCap,
    accent: "text-teal-400",
    badge: "border-teal-400/30 bg-teal-400/10 text-teal-300",
    glow: "shadow-[0_0_30px_rgba(45,212,191,0.15)]",
    border: "border-teal-400/20 hover:border-teal-400/50",
    textHover: "group-hover:text-teal-300",
  },
  mailer: {
    icon: Mail,
    accent: "text-amber-400",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    border: "border-amber-400/20 hover:border-amber-400/50",
    textHover: "group-hover:text-amber-300",
  },
  crm: {
    icon: Users,
    accent: "text-violet-400",
    badge: "border-violet-400/30 bg-violet-400/10 text-violet-300",
    glow: "shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    border: "border-violet-400/20 hover:border-violet-400/50",
    textHover: "group-hover:text-violet-300",
  },
  web: {
    icon: Globe,
    accent: "text-cyan-400",
    badge: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    border: "border-cyan-400/20 hover:border-cyan-400/50",
    textHover: "group-hover:text-cyan-300",
  },
};

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "cearExperience",
  });

  const metrics = t.raw("metrics") as Metric[];
  const pillars = t.raw("pillars") as Pillar[];
  const systems = t.raw("systems") as System[];

  const allTechStack = [
    "Next.js (App Router)",
    "TypeScript",
    "NestJS",
    "Node.js & Express",
    "PostgreSQL",
    "Drizzle ORM",
    "BullMQ & Redis",
    "Docker & Compose",
    "VPS On-Premise",
    "Tailwind CSS",
    "TanStack Table & Query",
    "SendGrid API",
    "Niubiz API",
    "Zod",
  ];

  return (
    <ProjectCaseLayout
      glows={[
        { color: "bg-cyan-500/15", className: "-top-32 -left-32 w-96 h-96" },
        {
          color: "bg-blue-500/10",
          className: "top-1/3 -right-32 w-[32rem] h-[32rem]",
        },
        {
          color: "bg-violet-500/10",
          className: "bottom-20 left-1/4 w-[28rem] h-[28rem]",
        },
      ]}
    >
      {/* Top back navigation */}
      <MotionBackLink className="mb-8 w-fit">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("backText")}</span>
        </Link>
      </MotionBackLink>

      {/* Hero Section */}
      <header className="border-b border-white/10 pb-12 mb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Info */}
          <MotionHeroText className="lg:col-span-7 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                <Sparkles className="w-3 h-3 text-cyan-300" />
                <span>{t("badge")}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              {t("role")}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-300 mb-5">
              <span className="text-xl sm:text-2xl font-bold text-cyan-400 flex items-center gap-2">
                {t("company")}
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-cyan-400" />
                {t("period")}
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                {t("location")}
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              {t("summary")}
            </p>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {allTechStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-xs font-mono text-slate-300 hover:border-cyan-400/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </MotionHeroText>

          {/* Right: Marlon Photo + CEAR Institutional Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1a2e] via-[#091424] to-[#070e1a] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4">
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-cyan-400/10" />

              {/* Foto de Marlon (de sobre mí) */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner group">
                <Image
                  src="/sobre-mi.png"
                  alt="Marlon - Desarrollador Full-Stack"
                  width={250}
                  height={250}
                  quality={90}
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-white block leading-tight">
                      Marlon
                    </span>
                    <span className="text-[11px] font-mono text-cyan-300">
                      {t("role")}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/15 text-[10px] font-mono font-semibold text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                    2025 - 2026
                  </span>
                </div>
              </div>

              {/* Logo e Identidad de CEAR Latinoamericano */}
              <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
                <div className="relative mb-2 w-full flex items-center justify-center">
                  <Image
                    src="/logo-white.webp"
                    alt="CEAR Latinoamericano"
                    width={150}
                    height={150}
                    quality={90}
                    className="h-auto w-full max-w-[170px] object-contain opacity-95"
                    priority
                  />
                </div>
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-widest mb-0.5">
                  Institución Educativa & Arbitraje
                </span>
                <span className="text-[11px] text-slate-400">
                  Centro de Especialización y Arbitraje
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Row */}
      <MotionSection className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all flex flex-col"
            >
              <span className="text-xs font-mono text-slate-400 mb-1">
                {metric.label}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* The 4 Systems Ecosystem */}
      <MotionSection className="mb-20">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              Ecosistema de Software
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {t("systemsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            {t("systemsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((system) => {
            const theme = systemThemes[system.id] ?? systemThemes.web;
            const Icon = theme.icon;

            return (
              <Link
                key={system.id}
                href={system.href}
                className={`group relative p-6 sm:p-8 rounded-3xl border ${theme.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between ${theme.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl border ${theme.border} bg-white/[0.03] flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-6 h-6 ${theme.accent}`} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${theme.badge}`}
                    >
                      {system.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold text-white mb-2 ${theme.textHover} transition-colors flex items-center gap-2`}
                  >
                    <span>{system.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {system.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>{t("exploreCase")}</span>
                  <span className={`text-base font-bold ${theme.accent}`}>
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </MotionSection>

      {/* Key Responsibilities / Pillars */}
      <MotionSection className="mb-16">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
              Metodología & Aportes
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {t("pillarsTitle")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl">
            {t("pillarsSubtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] ?? Briefcase;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl border border-cyan-400/30 bg-cyan-400/10 flex items-center justify-center text-cyan-300 mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </MotionSection>

      {/* Bottom CTA */}
      <MotionSection className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("backText")}</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:bg-cyan-300 transition-all hover:scale-[1.02]"
        >
          <span>Conversemos sobre oportunidades</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </MotionSection>
    </ProjectCaseLayout>
  );
};

export default Page;
