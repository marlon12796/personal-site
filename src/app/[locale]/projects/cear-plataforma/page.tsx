import Link from "next/link";
import {
  ArrowLeft,
  Server,
  Layout,
  Database,
  Cloud,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import {
  ProfessionalCaseCarousel,
  type ProfessionalCaseSlide,
} from "@/components/project/ProfessionalCaseCarousel";
import {
  MotionContainer,
  MotionHeroText,
  MotionHeroMedia,
  MotionStaggerList,
  MotionStaggerItem,
  MotionSection,
  MotionBackLink,
  MotionAmbientGlow,
} from "@/components/project/ProjectCaseAnimations";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Plataforma Web CEAR Latinoamericano | Caso Profesional Full-Stack",
  description:
    "Arquitectura y desarrollo de la plataforma web de formación continua para CEAR Latinoamericano con Next.js, Node.js, PostgreSQL y AWS.",
};

type Props = {
  params: Promise<{ locale: string }>;
};

type Metric = {
  label: string;
  value: string;
};

type EngineeringItem = {
  title: string;
  description: string;
};

const cearSlides: ProfessionalCaseSlide[] = [
  { src: "/projects/cear/home.png", alt: "Inicio de la plataforma CEAR Latinoamericano" },
  { src: "/projects/cear/cursos.png", alt: "Catálogo de cursos de CEAR Latinoamericano" },
  { src: "/projects/cear/contacto.png", alt: "Módulo de contacto y admisión de CEAR Latinoamericano" },
];

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "cearProject",
  });

  const techStack = [
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tailwind CSS",
  ];

  const metrics = t.raw("metrics") as Metric[];
  const businessPoints = t.raw("businessProblem.points") as string[];
  const engineeringChallenges = t.raw("engineeringChallenges.items") as EngineeringItem[];

  const architectureLayers = [
    {
      icon: Layout,
      name: t("architecture.layers.frontend.name"),
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
      details: t.raw("architecture.layers.frontend.details") as string[],
    },
    {
      icon: Database,
      name: t("architecture.layers.backend.name"),
      color: "text-blue-400",
      borderColor: "border-blue-400/20",
      details: t.raw("architecture.layers.backend.details") as string[],
    },
    {
      icon: Cloud,
      name: t("architecture.layers.devops.name"),
      color: "text-emerald-400",
      borderColor: "border-emerald-400/20",
      details: t.raw("architecture.layers.devops.details") as string[],
    },
  ];

  const challengeIcons = [Zap, ShieldCheck, Server];

  return (
    <main className="relative w-full min-h-screen bg-[#070c16] text-slate-200 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated ambient background glows */}
      <MotionAmbientGlow color="bg-cyan-500/15" className="-top-32 -left-32 w-96 h-96" />
      <MotionAmbientGlow color="bg-blue-500/10" className="top-1/3 -right-32 w-[32rem] h-[32rem]" />
      <MotionAmbientGlow color="bg-teal-500/10" className="bottom-20 left-1/4 w-[28rem] h-[28rem]" />

      <MotionContainer className="relative z-10 max-w-screen-xl mx-auto">
        {/* Top Navigation */}
        <MotionBackLink className="mb-8 w-fit">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backText")}</span>
          </Link>
        </MotionBackLink>

        {/* Header / Hero with Integrated Carousel */}
        <header className="border-b border-white/10 pb-12 mb-14">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <MotionHeroText>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                  <Sparkles className="w-3 h-3 text-cyan-300" />
                  <span>{t("role")}</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  {t("type")}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
                {t("title")}
              </h1>
              <p className="text-xl font-medium text-cyan-300 mb-5">
                {t("institution")}
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                {t("subtitle")}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 hover:border-cyan-300/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div>
                <a
                  href="https://cearlatinoamericano.edu.pe/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-300 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:bg-cyan-200 transition-all hover:scale-[1.02]"
                >
                  <span>{t("visitLive")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </MotionHeroText>

            {/* Carousel in Hero */}
            <MotionHeroMedia className="w-full">
              <div className="rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_rgba(6,182,212,0.18)] p-1 bg-white/[0.02]">
                <ProfessionalCaseCarousel slides={cearSlides} />
              </div>
            </MotionHeroMedia>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <MotionStaggerList className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric) => (
            <MotionStaggerItem key={metric.label}>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-colors">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {metric.label}
                </div>
                <div className="text-2xl font-bold font-mono text-cyan-300 tracking-tight">
                  {metric.value}
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerList>

        {/* Business Challenge */}
        <MotionSection className="mb-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#08131e] to-[#080e1a] shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t("businessProblem.title")}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-6">
            {t("businessProblem.description")}
          </p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {businessPoints.map((pt) => (
              <li
                key={pt}
                className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        {/* Technical Architecture */}
        <MotionSection className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t("architecture.title")}
            </h2>
            <p className="text-slate-400">{t("architecture.subtitle")}</p>
          </div>

          <MotionStaggerList className="grid lg:grid-cols-3 gap-6">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <MotionStaggerItem key={layer.name}>
                  <div
                    className={`h-full p-6 rounded-2xl border ${layer.borderColor} bg-white/[0.02] hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                        <Icon className={`w-6 h-6 ${layer.color}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {layer.name}
                      </h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
                      {layer.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStaggerList>
        </MotionSection>

        {/* Engineering Challenges */}
        <MotionSection className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            {t("engineeringChallenges.title")}
          </h2>
          <MotionStaggerList className="grid md:grid-cols-3 gap-6">
            {engineeringChallenges.map((item, index) => {
              const Icon = challengeIcons[index] || Zap;
              return (
                <MotionStaggerItem key={item.title}>
                  <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          0{index + 1}
                        </span>
                        <Icon className="w-5 h-5 text-cyan-400" />
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

        {/* Bottom CTA */}
        <MotionSection className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("backText")}</span>
          </Link>
          <a
            href="https://cearlatinoamericano.edu.pe/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 font-semibold text-sm hover:bg-cyan-400/20 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-colors"
          >
            <span>{t("visitLive")}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </MotionSection>
      </MotionContainer>
    </main>
  );
};

export default Page;
