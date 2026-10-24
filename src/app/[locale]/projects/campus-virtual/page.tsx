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
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import {
  ProfessionalCaseCarousel,
  type ProfessionalCaseSlide,
} from "@/components/project/ProfessionalCaseCarousel";
import { CaseVideoPlayer } from "@/components/project/CaseVideoPlayer";
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
  title: "Campus Virtual CEAR Latinoamericano | Caso Profesional Full-Stack",
  description:
    "Arquitectura y desarrollo del Campus Virtual oficial de CEAR Latinoamericano durante una asignación estratégica de 5 meses con Next.js, Node.js, PostgreSQL y AWS.",
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

const campusSlides: ProfessionalCaseSlide[] = [
  {
    src: "/projects/campus/home-students.png",
    alt: "Vista Estudiante: Panel principal de asignaturas y cronograma de sesiones",
  },
  {
    src: "/projects/campus/home-admin.png",
    alt: "Vista Administrador: Dashboard general, métricas y control de accesos",
  },
  {
    src: "/projects/campus/estudiantes-admin-notas.png",
    alt: "Gestión Administrativa: Registro y ponderación de calificaciones de alumnos",
  },
  {
    src: "/projects/campus/exam-student.png",
    alt: "Módulo de Exámenes: Interfaz de evaluaciones interactivas para estudiantes",
  },
  {
    src: "/projects/campus/silabo-admin.png",
    alt: "Gestión Académica: Administración modular de sílabos y material didáctico",
  },
  {
    src: "/projects/campus/pagos-student.png",
    alt: "Módulo Financiero: Historial de pagos, comprobantes y cuotas del estudiante",
  },
  {
    src: "/projects/campus/users-admin.png",
    alt: "Seguridad y Accesos: Gestión de usuarios y control de roles (RBAC)",
  },
  {
    src: "/projects/campus/config-admin.png",
    alt: "Configuración del Sistema: Parámetros institucionales y de plataforma",
  },
];

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: "campusProject",
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
  const engineeringChallenges = t.raw(
    "engineeringChallenges.items",
  ) as EngineeringItem[];

  const architectureLayers = [
    {
      icon: Layout,
      name: t("architecture.layers.frontend.name"),
      color: "text-teal-400",
      borderColor: "border-teal-400/20",
      details: t.raw("architecture.layers.frontend.details") as string[],
    },
    {
      icon: Database,
      name: t("architecture.layers.backend.name"),
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
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
      <MotionAmbientGlow
        color="bg-teal-500/15"
        className="-top-32 -left-32 w-96 h-96"
      />
      <MotionAmbientGlow
        color="bg-cyan-500/10"
        className="top-1/3 -right-32 w-[32rem] h-[32rem]"
      />
      <MotionAmbientGlow
        color="bg-emerald-500/10"
        className="bottom-20 left-1/4 w-[28rem] h-[28rem]"
      />

      <MotionContainer className="relative z-10 max-w-screen-xl mx-auto">
        {/* Top Navigation */}
        <MotionBackLink className="mb-8 w-fit">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300 transition-colors"
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
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-400/10 text-teal-300 border border-teal-400/30 shadow-[0_0_15px_rgba(45,212,191,0.25)]">
                  <Sparkles className="w-3 h-3 text-teal-300" />
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
              <p className="text-xl font-medium text-teal-300 mb-5">
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
                    className="px-3.5 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 hover:border-teal-300/40 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://campus.cearlatinoamericano.edu.pe/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(45,212,191,0.35)] hover:bg-teal-300 transition-all hover:scale-[1.02]"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>{t("visitLive")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </MotionHeroText>

            {/* Video de Presentación Oficial en lugar de carrusel */}
            <MotionHeroMedia className="w-full">
              <CaseVideoPlayer
                src="https://cearlatinoamericano.edu.pe/sisdocs/video-presentacion/campus_virtual.mp4"
                poster="/projects/campus/home-students.png"
                title="Presentación Oficial del Campus Virtual"
                accentColor="teal"
              />
            </MotionHeroMedia>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <MotionStaggerList className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map((metric) => (
            <MotionStaggerItem key={metric.label}>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-teal-400/40 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-colors">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  {metric.label}
                </div>
                <div className="text-2xl font-bold font-mono text-teal-300 tracking-tight">
                  {metric.value}
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerList>

        {/* Business Challenge */}
        <MotionSection className="mb-16 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c1c2e] to-[#080e1a] shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
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
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
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
                    className={`h-full p-6 rounded-2xl border ${layer.borderColor} bg-white/[0.02] hover:bg-white/[0.05] hover:shadow-[0_0_25px_rgba(45,212,191,0.15)] transition-all`}
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
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
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
                  <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-teal-400/40 hover:bg-white/[0.04] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-teal-400">
                          0{index + 1}
                        </span>
                        <Icon className="w-5 h-5 text-teal-400" />
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

        {/* Módulos & Galería Interactiva de Capturas */}
        <MotionSection className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Galería de Módulos (Estudiante & Administrador)
            </h2>
            <p className="text-slate-400">
              Capturas de la experiencia estudiantil, módulo de exámenes, control de notas y administración RBAC.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-400/20 bg-white/[0.02] p-2 shadow-[0_0_35px_rgba(20,184,166,0.15)]">
            <ProfessionalCaseCarousel slides={campusSlides} />
          </div>
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
            href="https://campus.cearlatinoamericano.edu.pe/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-teal-400/30 bg-teal-400/10 text-teal-300 font-semibold text-sm hover:bg-teal-400/20 shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-colors"
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
